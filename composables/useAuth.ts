export const useAuth = () => {
  // create user and store info
  const user = useState('user', () => null)
  const router = useRouter()
  const { supabase } = useSupabase()

  supabase.auth.onAuthStateChange((e, session) => {
    user.value = session?.user || null
  })

  const signUp = async ({ email, password }) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password
    })

    if (error) throw error
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
    router.push('/')
  }

  const isLoggedIn = () => {
    return !!user.value
  }

  return {
    user,
    signUp,
    signIn,
    signOut,
    isLoggedIn
  }
}