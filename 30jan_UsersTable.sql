CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL,
  age INTEGER CHECK (age >= 18),
  role TEXT DEFAULT 'user',
  created_at TIMESTAMP DEFAULT NOW()
);
