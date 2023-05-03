<template>
  <div class="layout-container loading">
    <site-header />
    <site-home />
    <footer>
      <span class="jet-brains">Lagos, Nigeria</span>
    </footer>
  </div>
  <site-background />
</template>

<script>
import SiteHeader from "./components/SiteHeader.vue";
import SiteBackground from "./components/SiteBackground.vue";
import SiteHome from "./components/SiteHome.vue";

export default {
  name: "App",
  components: {
    SiteHeader,
    SiteBackground,
    SiteHome,
  },
};
</script>

<style>
#app {
  height: 100vh;
  width: 100vw;
  background: var(--background-gray);
  color: var(--near-white);
  padding: 40px 50px;
  overflow: hidden;
  overscroll-behavior: none;
}

.layout-container {
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100%;
  z-index: 10;
  position: relative;

  &.loading {
    > main {
      display: none;
    }

    > footer {
      display: none;
    }
  }

  > footer {
    > span {
      font-size: 14px;
    }
  }
}
</style>