<template>
<div class="loader"></div>
</template>

<style scoped lang="scss">
.loader {
  --color: no-repeat linear-gradient(var(--color-white) 0 0); 
  background:
    var(--color), var(--color), var(--color),
    var(--color), var(--color), var(--color),
    var(--color), var(--color), var(--color);
  background-size: 16px 16px;
  animation: 
    first-frame 1s infinite,
    second-frame 1s infinite;
}
@keyframes first-frame {
  0%, 100% { width:45px; height: 45px }
  35%, 65% { width:65px; height: 65px }
}
@keyframes second-frame {
  0%, 40%  { background-position: 0 0, 0 50%, 0 100%, 50% 100%, 100% 100%, 100% 50%, 100% 0, 50% 0, 50% 50% }
  60%, 100% { background-position: 0 50%, 0 100%, 50% 100%, 100% 100%, 100% 50%, 100% 0, 50% 0, 0 0, 50% 50% }
}
</style>
