<template>
  <div>
    <UCard class="card">
      <h3>Login</h3>
      <div class="input-container">
        <input placeholder="Email" />
        <input placeholder="Pasword" />
      </div>
      <UButton>Log in</UButton>
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
</style>