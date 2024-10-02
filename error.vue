<template>
  <div class="error-container">
    <AnimatedSpinner />
  </div>
</template>

<script setup>
onMounted(() => handleError())
const handleError = () => {
  clearError({
    redirect: '/',
  })
}
</script>
<style class="scss">
.error-container {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
}
</style>
