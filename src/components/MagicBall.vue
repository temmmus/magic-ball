<template>
  <div class="ball" ref="ball" @click="shakeBall()">
    <div class="triangle hidden" ref="triangle">
      <p class="answer" ref="answer">{{ answer }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { answers } from "../shared/constants.ts";

export default {
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

<style scoped>
.ball {
  width: 80vw;
  max-width: 500px;
  height: 80vw;
  max-height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, #222222, #000000);
  position: relative;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5), inset 0 -10px 20px rgba(0, 0, 0, 0.8),
    inset 0 10px 20px rgba(255, 255, 255, 0.1);
  transform-style: preserve-3d;
}

.ball::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50%;
  height: 50%;
  border: 8px solid #171717;
  border-radius: 50%;
  background: radial-gradient(circle at 90% 90%, #1c1c1c, #121212);
  transform: translate(-50%, -50%);
  box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.5);
}

.triangle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -30%);
  width: 40%;
  height: 30%;
  background: linear-gradient(
    to bottom,
    rgb(0, 0, 255, 0.5),
    rgb(0, 0, 255, 0.2)
  );
  clip-path: polygon(50% 100%, 0% 0%, 100% 0%);
  display: flex;
  align-items: stretch;
  justify-content: center;
}

.answer {
  width: 60%;
  color: #d3d3d3;
  text-shadow: 1px 1px 8px #ff00f2;
}

.visible {
  visibility: visible;
  opacity: 1;
  transition: opacity 1s linear;
}
.hidden {
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s 1s, opacity 1s linear;
}

@keyframes shake {
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate(-4vw, 0) rotate(4deg);
  }
  20%,
  40%,
  60%,
  80% {
    transform: translate(4vw, 0) rotate(-4deg);
  }
}

.shake {
  animation: shake 0.9s;
}
</style>
