<template>
  <header :class="{ 'loader-header': !siteLoaded }">
    <site-loader @site-loaded="siteLoaded = true" />
    <div class="time jet-brains generic-slide-down">
      18<span class="time-colon">:</span>04 WAT
    </div>

    <nav class="generic-slide-down">
      <action-button
        variant="secondary"
        :text="projectButtonData.text"
        @click="projectButtonData.action.handler()"
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

export default {
  name: "SiteHeader",
  components: {
    SiteLoader,
    ActionButton,
  },
  inject: ["getDisplayProjects"],
  data() {
    return {
      siteLoaded: false,
    };
  },
  computed: {
    projectButtonData() {
      if (this.displayProjects) {
        return {
          text: "home",
          action: {
            handler: () => {
              this.$eventBus.emit("display-home");
            },
          },
        };
      } else {
        return {
          text: "projects",
          action: {
            handler: () => {
              this.$eventBus.emit("display-projects");
            },
          },
        };
      }
    },
    displayProjects() {
      return this.getDisplayProjects();
    },
  },
};
</script>

<style >
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