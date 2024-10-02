<template>
  <svg class="spinner" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" />
  </svg>
</template>
<style lang="scss" scoped>
@import '@/styles/colors.scss';
.spinner {
  width: 100px;
  height: auto;
  animation: 2s linear infinite spin;
}

@keyframes spin {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}

.spinner circle {
  animation: 1.4s ease-in-out infinite both drawCircle;
  -webkit-transition: stroke 0.3s linear;
  -moz-transition: stroke 0.3s linear;
  -o-transition: stroke 0.3s linear;
  transition: stroke 0.3s linear;
  display: block;
  fill: transparent;
  stroke: $purple-0;
  stroke-linecap: round;
  stroke-dasharray: 283;
  stroke-dashoffset: 280;
  stroke-width: 10px;
  transform-origin: 50% 50%;
}

@keyframes drawCircle {
  0%,
  25% {
    stroke-dashoffset: 280;
    transform: rotate(0);
  }

  50%,
  75% {
    stroke-dashoffset: 75;
    transform: rotate(45deg);
  }

  100% {
    stroke-dashoffset: 280;
    transform: rotate(360deg);
  }
}
</style>
