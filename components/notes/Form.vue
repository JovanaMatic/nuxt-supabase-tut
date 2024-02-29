<script setup>
const { supabase } = useSupabase()
const { user } = useAuth()
  const notesTitle = ref('')
  const notesText = ref('')

  const saveNotes = async () => {
    if (!notesTitle.value || !notesText.value) { return }
    console.log('hello')
    const { error } = await supabase.from('notes').insert({
      title: notesTitle.value,
      note: notesText.value,
      user_id: user.value.id
    })
    notesTitle.value = ''
    notesText.value = ''
  }
</script>

<template>
  <UCard>
    <div class="card">
      <input class="input" placeholder="My title" v-model="notesTitle"/>
      <textarea class="input" placeholder="My notes" v-model="notesText"></textarea>
    </div>
    <UButton @click="saveNotes">Save notes</UButton>
  </UCard>
</template>

<style scoped>
  .input {
    border: 0.1rem solid rgba(0, 0, 0, 0.2);
    margin-bottom: 0.5rem;
    border-radius: 0.25rem;
    padding: 0.2rem;
  }

  .card{
    display: flex;
    flex-direction: column;
  }
</style>