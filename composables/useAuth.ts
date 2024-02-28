export const useAuth = () => {
  // create user and store info
  const user = useState('user', () => null)
  const { supabase } = useSupabase()

  supabase.auth.onAuthStateChange((e, session) => {
    user.value = session?.user || null
    console.log(e, session)
  })

  const signUp = async ({ email, password }) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password
    })

    if (error) throw error
    console.log(data.user)
    return data.user
  }

  const signIn = async ({ email, password }) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    if (error) throw error
    return data.user
  }

  const signOut = async () => {
    const { error } = await supabase.auth.signOut()

    if (error) throw error
  }

  return {
    user,
    signUp,
    signIn,
    signOut
  }
}