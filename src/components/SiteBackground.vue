<template>
  <div class="site-background nippo">
    <div
      class="background-row"
      v-for="(mark, i) in waterMarkText"
      :key="mark + 'bg'"
      :style="{ transform: `translateX(${(i + 1) * -220}px)` }"
    >
      <div class="background-wrapper">
        <span class="background-watermark"> OLABODE-ODEBUNMI OLUWASEENI </span>
        <span class="background-watermark"> OLABODE-ODEBUNMI OLUWASEENI </span>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  name: "SiteBackground",
  computed: {
    waterMarkText() {
      const textArray = [];
      for (let i = 0; i < 10; i++) {
        textArray.push(i);
      }
      return textArray;
    },
  },
  mounted() {},
};
</script>

<style scoped>
.site-background {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  opacity: 80%;
  background: black;
  overflow: hidden;
  user-select: none;
  opacity: 0.5;

  .background-watermark {
    font-size: 150px;
    white-space: nowrap;
    color: #080807;
    width: 50%;
  }
}
</style>