<script setup lang="ts">
  const { signOut, isLoggedIn } = useAuth()
</script>

<template>
  <nav>
    <ul>
      <li>
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/profile">My Profile</NuxtLink>
      </li>
      <li v-if="isLoggedIn()" class="logout" @click="signOut">Logout</li>
    </ul>
  </nav>
</template>

<style scoped>
  nav {
    background-color: black;
    height: 10vh;
  }

  ul {
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0 2rem;
  }

  li {
    color: white;
    margin-right: 1rem;
  }

  .logout {
    margin-left: auto;
    cursor: pointer;
  }
</style>