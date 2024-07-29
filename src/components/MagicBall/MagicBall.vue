<template>
  <div class="ball" ref="ball" @click="shakeBall()">
    <div class="triangle hidden" ref="triangle">
      <p class="answer" ref="answer">{{ answer }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { answers } from "../../shared/constants.ts";

export default {
  name: "MagicBall",
  data() {
    return {
      answers: answers,
      answer: "",
      isShaking: false,
    };
  },
  methods: {
    shakeBall() {
      if (this.isShaking) return;
      this.isShaking = true;

      const randomIndex = Math.floor(Math.random() * this.answers.length);

      (this.$refs.ball as HTMLElement).classList.add("shake");
      (this.$refs.triangle as HTMLElement).classList.add("hidden");
      (this.$refs.answer as HTMLElement).classList.add("hidden");

      setTimeout(() => {
        this.answer = this.answers[randomIndex];

        (this.$refs.triangle as HTMLElement).classList.remove("hidden");
        (this.$refs.answer as HTMLElement).classList.remove("hidden");
        (this.$refs.triangle as HTMLElement).classList.add("visible");
        (this.$refs.answer as HTMLElement).classList.add("visible");
        (this.$refs.ball as HTMLElement).classList.remove("shake");

        this.isShaking = false;
      }, 1000);
    },
  },
};
</script>

<style scoped src="./MagicBall.scss"></style>
