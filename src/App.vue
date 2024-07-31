<template>
  <Canvas>
    <LocaleSwitcher />
    <MagicBall />
  </Canvas>
</template>

<script lang="ts">
import Canvas from "@/components/Canvas/Canvas.vue";
import MagicBall from "@/components/MagicBall/MagicBall.vue";
import LocaleSwitcher from "@/components/LocaleSwitcher/LocaleSwitcher.vue";

export default {
  name: "App",
  components: {
    Canvas,
    MagicBall,
    LocaleSwitcher,
  },
};
</script>

<style scoped></style>
