<template>
  <header class="header">
    <nav id="main-nav" class="main-nav">
      <router-link :to="{ path: '/' }" class="text--thick"> Home </router-link>
      <router-link :to="{ path: '/', hash: '#about' }" class="text--thick">
        About
      </router-link>
      <router-link :to="{ path: '/', hash: '#portfolio' }" class="text--thick">
        Portfolio
      </router-link>
    </nav>
    <span class="header__resume">
      <a
        href="https://resume.creddle.io/resume/gzpy3v9gj6h"
        target="_blank"
        class="header__resume-link text--thick"
      >
        Resume
      </a>
    </span>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
.header {
  background: var(--primary);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.main-nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 1.5rem;
}
.main-nav a {
  border-bottom: 2px solid var(--primary);
  color: var(--text-primary);
  line-height: 2;
  margin: 0 1rem;
  padding: 0.25rem 0.5rem;
  text-align: center;
  text-decoration: none;
}
.main-nav a:hover,
.main-nav a:active {
  border-bottom: 2px solid var(--siyah-black);
  transition: border 0.3s ease-in-out;
}
.main-nav a:focus {
  border-bottom: 2px solid var(--siyah-black);
  background: var(--text-primary);
  color: var(--primary);
  outline: none;
  transition: all 0.2s ease;
}

.header__resume {
  margin-left: auto;
  margin-right: 1rem;
  padding: 1rem;
}
.header__resume-link {
  background: var(--siyah-black);
  color: var(--primary);
  padding: 0.5rem 1rem;
  text-decoration: none;
}
.header__resume-link:hover,
.header__resume-link:focus {
  outline: 2px solid var(--siyah-black);
  background: var(--primary);
  color: var(--siyah-black);
  transition: all 0.2s ease;
}

@media only screen and (max-width: 768px) {
  .main-nav {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
