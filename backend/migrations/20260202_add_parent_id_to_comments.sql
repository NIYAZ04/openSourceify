-- Migration to add parent_id to comments for replies
ALTER TABLE public.comments 
ADD COLUMN parent_id UUID REFERENCES public.comments(id) ON DELETE CASCADE;

-- Create index on parent_id for better query performance
CREATE INDEX idx_comments_parent_id ON public.comments(parent_id);
