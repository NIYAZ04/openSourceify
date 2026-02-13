-- Fix: Add "ai" to the project_domain enum if it doesn't exist
-- Run this SQL in your Supabase SQL Editor if the migration wasn't applied

-- Check if 'ai' already exists in the enum
DO $$ 
BEGIN
    -- Try to add 'ai' to the enum
    -- This will fail silently if it already exists
    IF NOT EXISTS (
        SELECT 1 
        FROM pg_enum 
        WHERE enumlabel = 'ai' 
        AND enumtypid = (SELECT oid FROM pg_type WHERE typname = 'project_domain')
    ) THEN
        ALTER TYPE public.project_domain ADD VALUE 'ai';
    END IF;
END $$;
