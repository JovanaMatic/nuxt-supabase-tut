<script setup>
  const { supabase } = useSupabase()
  const { user } = useAuth()
  const dbData = ref(null)

  definePageMeta({
    middleware: ['auth']
  })

  if (process.client) {
    dbData.value = await supabase
    .from('notes')
    .select()
    .eq('user_id', user.value.id)
  }

</script>

<template>
  <div>
    <div class="container">
      <h3>My Notes</h3>
      <NotesForm />
      <div v-if="dbData">
        <UCard class="notes-card" v-for="data in dbData.data" :key="data.id">
          <h3>{{ data.title }}</h3>
          <p>{{ data.note }}</p>
        </UCard>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .container {
    max-width: 50%;
    margin: 0 auto;
    padding: 3rem 0;
    height: 90vh;
  }

  .notes-card {
    margin-top: 2rem;
  }

  .notes-card h3 {
    font-size: 1.5rem;
    font-weight: 400;
  }
</style>