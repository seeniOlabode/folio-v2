<template>
  <div class="loader-container">
    <div class="wrapper" ref="wrapper">
      <h1 class="logo jet-brains">
        <span class="logo-text-wrapper generic-slide-down">
          OLABODE-ODEBUNMI<br />
          OLUWASEENI.
        </span>
      </h1>

      <div class="visual generic-slide-up">
        <div class="outer">
          <div class="inner" :style="{ width: loadPercent + '%' }"></div>
        </div>
        <span class="percentage jet-brains">{{ loadPercent }}%</span>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";

const loaderTl = gsap.timeline();

export default {
  name: "SiteLoader",
  data() {
    return {
      loadPercent: 0,
      loadInterval: null,
    };
  },
  watch: {
    loadPercent(value) {
      if (value == 100) {
        loaderTl.play();
      }
    },
  },
  methods: {
    load() {
      this.loadInterval = setInterval(() => {
        if (this.loadPercent != 100) {
          this.loadPercent++;
        } else {
          clearInterval(this.loadInterval);
        }
      }, 50);
    },
  },
  mounted() {
    this.load();
    const wrapperElement = this.$refs.wrapper;
    const wrapperBox = wrapperElement.getBoundingClientRect();

    console.log(wrapperBox);

    console.log(
      window.innerHeight,
      window.innerWidth,
      wrapperBox.height,
      wrapperBox.width
    );

    let halfLeft = window.innerWidth / 2 - wrapperBox.width / 2;
    let halfTop = window.innerHeight / 2 - wrapperBox.height / 2;

    gsap.set(wrapperElement, {
      left: halfLeft,
      top: halfTop,
    });

    loaderTl
      .to(".visual", {
        delay: 0.5,
        yPercent: 200,
        duration: 0.5,
        ease: "ease",
      })
      .set(".visual", {
        display: "none",
      })
      .to(wrapperElement, {
        left: 50,
        top: 40,
        duration: 1,
        fontSize: 18,
        ease: "power4.in",
      })
      .set(wrapperElement, {
        position: "static",
      })
      .call(() => {
        const containerElement = document.querySelector(".loader-container");
        const layoutElement = document.querySelector(".layout-container");
        containerElement.classList.remove("loader-container");
        containerElement.classList.add("logo-container");
        layoutElement.classList.remove("loading");

        this.$emit("site-loaded");
      })
      .pause();
  },
};
</script>

<style>
.logo-text-wrapper {
  display: block;
}
.loader-container {
  .wrapper {
    position: fixed;
    overflow: hidden;
  }

  .logo {
    font-size: 24px;
    font-weight: 500;
    margin: 0;
  }

  .visual {
    display: flex;
    align-items: end;
    margin-top: 14px;

    .percentage {
      display: inline-block;
      font-size: 14px;
      line-height: 0.7;
      margin-left: 5px;
      text-align: right;
      width: 35px;
    }

    .outer {
      height: 3px;
      border: solid 1px var(--near-white);
      flex-grow: 1;

      .inner {
        height: 100%;
        background: var(--near-white);
      }
    }
  }
}

.logo-container {
  .visual {
    display: none;
  }

  .logo {
    font-size: 18px;
  }
}
</style>