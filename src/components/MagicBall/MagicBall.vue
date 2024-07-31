<template>
  <div class="ball" ref="ball" @click="shake()">
    <div class="triangle hidden" ref="triangle">
      <p class="answer" ref="answer">{{ answer }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { mapState } from "vuex";
import { ANSWERS_COUNT } from "@/shared/constants.ts";

export default {
  name: "MagicBall",
  data() {
    return {
      count: ANSWERS_COUNT,
      answer: "",
      isShaking: false,
    };
  },
  computed: {
    ...mapState(["locale"]),
  },
  watch: {
    locale() {
      this.reset();
    },
  },
  methods: {
    reset() {
      const triangle = this.$refs.triangle as HTMLElement;
      const answer = this.$refs.answer as HTMLElement;

      triangle.classList.remove("visible");
      answer.classList.remove("visible");
      triangle.classList.add("hidden");
      answer.classList.add("hidden");
    },
    shake() {
      if (this.isShaking) return;
      this.isShaking = true;

      const ball = this.$refs.ball as HTMLElement;
      const triangle = this.$refs.triangle as HTMLElement;
      const answer = this.$refs.answer as HTMLElement;

      const randomIndex = Math.floor(Math.random() * this.count);

      ball.classList.add("shake");
      triangle.classList.add("hidden");
      answer.classList.add("hidden");

      setTimeout(() => {
        this.answer = this.$t(`answers[${randomIndex}]`);

        triangle.classList.remove("hidden");
        answer.classList.remove("hidden");
        triangle.classList.add("visible");
        answer.classList.add("visible");
        ball.classList.remove("shake");

        this.isShaking = false;
      }, 1000);
    },
  },
};
</script>

<style scoped src="./MagicBall.scss"></style>
