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
    };
  },
  methods: {
    shakeBall() {
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
      }, 1000);
    },
  },
};
</script>

<style scoped>
.ball {
  width: 500px;
  height: 500px;
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
  width: 260px;
  height: 260px;
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
  width: 0;
  height: 0;
  border-left: 100px solid transparent;
  border-right: 100px solid transparent;
  border-top: 150px solid hsla(240, 100%, 50%, 0.35);
  transform: translate(-50%, -40%);
}

.answer {
  position: relative;
  top: -120px;
  left: -55px;
  margin: 0px;
  width: 100px;
  height: 100px;
  font-size: 13px;
  text-align: center;
  color: #c2c2c2;
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
    transform: translate(-40px, 0) rotate(40deg);
  }
  20%,
  40%,
  60%,
  80% {
    transform: translate(40px, 0) rotate(-40deg);
  }
}

.shake {
  animation: shake 0.9s;
}
</style>
