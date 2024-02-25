<script setup lang="ts">
  const isLoggedIn = ref<'login' | 'signup'>('signup')

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
      <h3>{{ isLoggedIn }}</h3>
      <div class="input-container">
        <input placeholder="Email" />
        <input placeholder="Password" />
      </div>
      <UButton>{{ isLoggedIn === 'signup' ? 'Sign up' :'Log in' }}</UButton>
      <p @click="handleLoginState">{{ isLoggedIn === 'login' ? 'Don\'t have an account? Create one now.' : 'Already have an account? Go ahead and log in' }}</p>
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