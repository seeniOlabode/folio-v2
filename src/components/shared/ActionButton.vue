<template>
  <button class="jet-brains" :class="variant">
    <div class="button-wrapper">
      <span class="text-span">{{ text }}</span>
      <span class="text-span">{{ text }}</span>
    </div>
  </button>
</template>

<script>
export default {
  props: ["text", "variant"],
};
</script>

<style scoped>
button {
  background: none;
  border: none;
  overflow: hidden;
  height: 28px;
  position: relative;
  padding: 0 10px;
  border: solid 1px var(--near-white);
  border-radius: 14px;
  cursor: pointer;

  color: var(--near-white);

  text-transform: uppercase;

  .button-wrapper {
    height: 200%;
    transition: transform 0.2s;
  }

  .text-span {
    display: flex;
    height: 50%;
    align-items: center;
  }

  &.primary {
    background: var(--near-white);
    color: black;
  }

  &.secondary {
  }
}

button:hover {
  .button-wrapper {
    transform: translateY(-50%);
  }
}
</style>