import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://laozabqjnvkyilgqbxzy.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxhb3phYnFqbnZreWlsZ3FieHp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg5ODYxNTMsImV4cCI6MjAyNDU2MjE1M30.th0Py2pcK8O6C0FkNAByng3b1Y5A7Gf9gtYCLWv5efg'

export const useSupabase = () => {
  const supabase = createClient(supabaseUrl, SUPABASE_KEY)

  return {
    supabase
  }
}