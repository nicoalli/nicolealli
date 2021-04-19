<template>
  <main class="home">
    <component
      v-for="component in components"
      :is="component"
      :key="`${component}-key`"
    />
  </main>
</template>

<script>
import About from "@/components/About.vue";
import Hero from "@/components/Hero.vue";
import Portfolio from "@/components/Portfolio.vue";

export default {
  name: "Home",
  components: {
    About,
    Hero,
    Portfolio
  },
  data() {
    return {
      components: ["Hero", "About", "Portfolio"]
    };
  }
};
</script>
