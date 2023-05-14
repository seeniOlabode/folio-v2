<template>
  <header :class="{ 'loader-header': !siteLoaded }">
    <site-loader @site-loaded="siteLoaded = true" />
    <site-time />
    <nav class="generic-slide-down">
      <action-button
        variant="secondary"
        text="projects"
        @click="() => $router.push('projects')"
      />
      <action-button variant="secondary" text="resume" />
      <action-button
        variant="primary"
        href="mailto:seeniolabode8734@gmail.com"
        text="contact"
      />
    </nav>
  </header>
</template>

<script>
import SiteLoader from "./SiteLoader.vue";
import ActionButton from "./shared/ActionButton.vue";
import SiteTime from "./SiteTime.vue";

export default {
  name: "SiteHeader",
  components: {
    SiteLoader,
    ActionButton,
    SiteTime,
  },
  inject: ["getDisplayProjects"],
  data() {
    return {
      siteLoaded: false,
    };
  },
  computed: {
    projectButtonData() {},
    displayProjects() {
      return this.getDisplayProjects();
    },
  },
};
</script>

<style>
header {
  display: flex;
  justify-content: space-between;

  .time {
    font-size: 14px;
    user-select: none;

    .time-colon {
      animation: blink 1s infinite;
      animation-direction: alternate;
    }
  }

  > nav {
    display: flex;
    gap: 25px;
  }
}

.loader-header {
  display: block;
  .time {
    display: none;
  }

  > nav {
    display: none;
  }
}

@keyframes blink {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>