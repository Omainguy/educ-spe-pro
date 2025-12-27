-- Database Schema for Educ Spé Pro

-- 1. Profiles Table (linked to auth.users)
create table profiles (
  id uuid references auth.users on delete cascade not null primary key,
  full_name text,
  institution text,
  role text,
  updated_at timestamp with time zone default timezone('utc'::text, now())
);

-- 2. Writing Styles Table
create table writing_styles (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references profiles(id) on delete cascade not null,
  name text not null,
  description text,
  instructions text,
  is_active boolean default true,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- 3. Documents Table
create table documents (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references profiles(id) on delete cascade not null,
  type text not null,
  subject text,
  content text not null,
  institution text,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- 4. Row Level Security (RLS)
alter table profiles enable row level security;
alter table writing_styles enable row level security;
alter table documents enable row level security;

-- 5. Policies
create policy "Users can view their own profile" on profiles for select using (auth.uid() = id);
create policy "Users can update their own profile" on profiles for update using (auth.uid() = id);
create policy "Users can manage their own styles" on writing_styles for all using (auth.uid() = user_id);
create policy "Users can manage their own documents" on documents for all using (auth.uid() = user_id);

-- 6. Trigger for profile creation on signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name)
  values (new.id, new.raw_user_meta_data->>'full_name');
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
