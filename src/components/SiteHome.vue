<template>
  <main>
    <nav class="contact-links">
      <img src="../assets/icon-twitter.svg" alt="" />
      <img src="../assets/icon-linkedin.svg" alt="" />
      <img src="../assets/icon-github.svg" alt="" />
    </nav>
    <div class="about">
      <h1 class="nippo hero-title">
        <span class="frontend">FRONTEND</span> <br />
        <span>DEVELOPER</span>
      </h1>
      <div class="body-part">
        <p class="author hero-description generic-slide-down">
          I have a thing for turning designs into quality code, with interesting
          interactions and precision. I’m currently focused on improving the
          user’s experience through animations and web interactions.
        </p>
        <p class="author hero-description generic-slide-down">
          I have a thing for turning designs into quality code, with interesting
          interactions and precision. I’m currently focused on improving the
          user’s experience through animations and web interactions.
        </p>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
main {
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
}
.about {
  position: relative;
  .hero-title {
    font-size: 72px;
    line-height: 0.9;
    flex-basis: 100%;
    .frontend {
      letter-spacing: 4px;
    }
  }

  .body-part {
    position: absolute;
    left: 0;
    right: 0;
    overflow: hidden;

    .hero-description {
      text-align: justify;
    }
  }
}

nav.contact-links {
  display: flex;
  flex-direction: column;
  gap: 25px;
  justify-self: start;
  position: absolute;
  left: 0;
}
</style>