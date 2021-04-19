<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "App",
  components: {
    Header
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400&display=swap");

html,
body {
  color: var(--text-primary);
  font-family: "PT Sans", sans-serif;
  font-size: 18px;
  margin: 0;
  overflow-x: hidden;
}

main {
  width: 100vw;
  overflow-x: hidden;
}

#app {
  background: rgb(255, 255, 255);
  border-top: 8px solid var(--siyah-black);
}

.vertical-align-parent {
  position: relative;
}
.vertical-align-child {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.center-align-parent {
  position: relative;
}
.center-align-child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.section {
  padding: 1rem;
  margin: auto;
}

.section__content {
  width: 60vw;
  margin: auto;
}

.section__title {
  border-bottom: 5px solid var(--primary);
  color: var(--text-primary);
  font-weight: bold;
  font-size: 2rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  width: fit-content;
}

.dark-bg {
  background: var(--siyah-black);
  color: var(--primary);
  display: inline-block;
  margin-left: -1rem;
  padding: 0 0.75rem;
}

:root {
  --primary: var(--fairy-wand);
  --secondary: var(--light-lilac);
  --text-primary: var(--siyah-black);
  --text-header: var(--fairy-wand);

  --silt: #8b7a72;
  --light-lilac: #dac6d4;
  --siyah-black: #1d191a;
  --fairy-wand: #b0a2bf;
  --polished-mahogany: #472723;
  --folklore: #694440;
  --terra-brun: #59382a;
  --burns-cave: #7a5a48;
  --silverado-trail: #b6b7c5;
}
</style>
