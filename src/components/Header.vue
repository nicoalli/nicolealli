<template>
  <nav id="main-nav">
    <router-link :to="{ path: '/' }"> Home </router-link>
    <router-link :to="{ path: '/', hash: '#about' }"> About </router-link>
    <router-link :to="{ path: '/', hash: '#portfolio' }">
      Portfolio
    </router-link>
  </nav>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
#main-nav {
  background: var(--primary);
  display: flex;
  justify-content: space-evenly;
  padding: 1rem;
}

#main-nav a {
  color: var(--text-primary);
  font-weight: bold;
  font-size: 1rem;
  letter-spacing: 1px;
  margin: 0 1rem;
  padding: 0.25rem 0.5rem;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
}

#main-nav a:hover,
#main-nav a:active {
  border-bottom: 2px solid var(--siyah-black);
  transition: border 0.1s ease-in-out;
}

#main-nav a:focus {
  background: var(--text-primary);
  color: var(--primary);
  outline: 1px solid var(--text-primary);
  transition: all 0.2s ease-in;
}

@media only screen and (min-width: 769px) {
  #main-nav {
    justify-content: left;
    padding: 1.5rem;
  }
}
</style>
