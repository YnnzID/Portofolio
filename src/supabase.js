import { createClient } from '@supabase/supabase-js'

// Menggunakan URL dan Key yang sudah kita validasi
const supabaseUrl = "https://ciuwvanqhzyntdfzetcn.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpdXd2YW5xaHp5bnRkZnpldGNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYxNjQzOTYsImV4cCI6MjEwMTc0MDM5Nn0.oUf7zB1QEtbDgH7mKYj2monjID-kvmK7Jf6f6-dCA_0"

export const supabase = createClient(supabaseUrl, supabaseKey)