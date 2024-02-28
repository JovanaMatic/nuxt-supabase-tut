<script setup lang="ts">
  const isLoggedIn = ref<'login' | 'signup'>('signup')
  const email = ref('')
  const password = ref('')
  const showConfirmEmailMessage = ref(false)

  const { signUp, signIn, user, signOut } = useAuth()
  const router = useRouter()

  const handleSubmit = async () => {
    if (isLoggedIn.value === 'login') {
      'SIGN IN'
      await signIn({ email: email.value, password: password.value })
      router.push('/profile')
    } else {
      'SIGNUP'
      await signUp({ email: email.value, password: password.value })
      showConfirmEmailMessage.value = true
    }

    email.value = ''
    password.value = ''
  }

  const handleLoginState = () => {
    if (isLoggedIn.value === 'login') {
      isLoggedIn.value = 'signup'
    } else {
      isLoggedIn.value = 'login'
    }
  }
</script>

<template>
  <div>
    <UCard class="card">
      <div v-if="!showConfirmEmailMessage">
        <h3>{{ isLoggedIn }}</h3>
      <div class="input-container">
        <input placeholder="Email" v-model="email"/>
        <input placeholder="Password" v-model="password"/>
      </div>
      <UButton @click="handleSubmit">Submit</UButton>
      <p @click="handleLoginState">{{ isLoggedIn === 'login' ? 'Already have an account? Go ahead and log in' : 'Don\'t have an account? Create one now.' }}</p>
      </div>
      <div v-else>
        <h3>Check email form confirmation message</h3>
      </div>
    </UCard>
  </div>
</template>

<script setup>

</script>

<style scoped>
  .card {
    padding: rem
  }

  .card h3 {
    font-size: 1.75rem;
    width: 25rem;
    text-transform: capitalize;
  }

  .input-container {
    display: flex;
    flex-direction: column;
  }

  input {
    margin-bottom: 0.3rem;
    padding: 0.2rem;
    outline: none;
    border: 0.1rem solid rgba(0, 0, 0, 0.1);
    border-radius: 0.2rem;
  }

  p {
    color: blue;
    padding-top: 0.5rem;
    font-size: 0.5rem;
    cursor: pointer;
  }
</style>