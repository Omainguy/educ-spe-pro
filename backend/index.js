const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { createClient } = require('@supabase/supabase-js');
const { GoogleGenAI } = require('@google/genai');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Supabase Configuration
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Google AI Configuration
const genAI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

app.use(cors());
app.use(express.json());

// Basic Route
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Backend is running' });
});

// AI Generation Route
app.post('/api/generate', async (req, res) => {
    const { type, institution, subject, description, styleName, styleDescription } = req.body;

    if (!description) {
        return res.status(400).json({ error: 'Description is required' });
    }

    try {
        const prompt = `
      Rédige un écrit professionnel de type "${type}" pour un établissement de type "${institution}".
      Sujet / Usager : ${subject || 'Non spécifié'}
      Style souhaité : ${styleName} (${styleDescription})
      
      Notes brutes de l'éducateur :
      "${description}"
      
      L'écrit doit être formel, respecter le secret professionnel et la déontologie du travail social français.
      Structure attendue :
      1. Contexte / Introduction
      2. Observations et éléments recueillis
      3. Analyse socio-éducative
      4. Perspectives et préconisations d'accompagnement
      
      Produis uniquement l'écrit professionnel final, prêt à être utilisé.
    `;

        const result = await genAI.models.generateContent({
            model: 'gemini-1.5-flash',
            contents: prompt,
            config: {
                systemInstruction: "Tu es un expert en travail social en France (éducateur spécialisé). Tu accompagnes tes collègues dans la rédaction d'écrits professionnels de haute qualité, structurés, objectifs et respectant les principes d'éthique et de bientraitance.",
                temperature: 0.7,
            }
        });

        res.json({ content: result.text || "La génération a échoué." });
    } catch (error) {
        console.error("Gemini Generation Error:", error);
        res.status(500).json({ error: "Une erreur est survenue lors de la génération de l'écrit." });
    }
});

// Example API Route for Beneficiaries
app.get('/api/beneficiaries', async (req, res) => {
    const { data, error } = await supabase
        .from('beneficiaries')
        .select('*');

    if (error) return res.status(400).json({ error: error.message });
    res.json(data);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
