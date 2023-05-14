<template>
  <div class="time jet-brains generic-slide-down">
    {{ hour }}<span class="time-colon">:</span>{{ minute }} WAT
  </div>
</template>

<script>
export default {
  name: "SiteTime",
  data() {
    return {
      timeInterval: null,
      hour: null,
      minute: null,
      timezone: null,
    };
  },
  mounted() {
    let time = new Date();

    this.hour = time.getHours();
    this.minute = time.getMinutes();

    this.timeInterval = setInterval(() => {
      let time = new Date();
      this.hour = time.getHours();
      this.minute = time.getMinutes();
    }, 60000);
  },
  beforeUnmount() {
    clearInterval(this.timeInterval);
  },
};
</script>

<style>
</style>