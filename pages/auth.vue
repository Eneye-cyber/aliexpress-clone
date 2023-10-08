<template>
  <div id="AuthPage" class="w-full h-[100vh] bg-white">
    <div class="w-full flex items-center justify-center p-5 border-b border-b-gray-300">
      <NuxtLink to="/" class="min-w-[170px]">
        <img width="170" src="img/AliExpress-logo.png">
      </NuxtLink>
    </div>

    <div class="max-w-[400px] mx-auto px-2">

      <h5 class="text-center my-6">Login / Register</h5>

      <button @click="login('google')" :class="btnClass">
        <img class="w-full max-w-[30px]" src="img/google-logo.png">
        <div>Google</div>
      </button>

      <button @click="login('github')" :class="`mt-4 ${btnClass}`">
        <img class="w-full max-w-[30px]" src="img/github-logo.png">
        <div>Github</div>
      </button>

    </div>
  </div>
</template>

<script setup>
const client = useSupabaseClient()
const user = useSupabaseUser()

const btnClass = 'flex items-center justify-center gap-3 p-1.5 w-full border hover:bg-gray-100 rounded-full text-lg font-semibold'
// watchEffect(() => {
//   if (user.value) {
//       return navigateTo('/')
//   }
// })

const login = async (prov) => {
  const { data, error } = await client.auth.signInWithOAuth({
    provider: prov,
  })
}
</script>
