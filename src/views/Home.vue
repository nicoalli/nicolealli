<template>
  <main class="home">
    <h1>Under construction</h1>
  </main>
</template>

<script>
import About from "@/components/About.vue";
import Hero from "@/components/Hero.vue";
import Portfolio from "@/components/Portfolio.vue";

export default {
  name: "Home",
  components: {
  },
  data() {
    return {
      components: ["Hero", "About", "Portfolio"]
    };
  }
};
</script>
