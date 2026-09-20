import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://klzxholtbsfisfzkquuo.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtsenhob2x0YnNmaXNmemtxdXVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk3NTUyNjUsImV4cCI6MjEwNTMzMTI2NX0.a4wSZkfo4uAqbq9xJR-SHxtQwyI-N6ymdOPUoOprVtA'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)