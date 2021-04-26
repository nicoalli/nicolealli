<template>
  <div id="hero-wrapper" class="center-align-parent">
    <div class="hero__inner center-align-child">
      <h1 class="hero__title">Nicole <span class="dark-bg">Alli</span></h1>
      <p class="hero__tagline">
        She/Her. A developer building accessible & incluse tech.
      </p>
      <div class="hero__links" id="social-links">
        <a
          href="mailto:alli.nicolette@gmail.com"
          target="_blank"
          class="hero__link"
        >
          <img :src="email" alt="email" class="hero__icon" />
        </a>
        <a
          href="https://github.com/nicoalli"
          target="_blank"
          class="hero__link"
        >
          <img :src="github" alt="github" class="hero__icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/nicole-alli/"
          target="_blank"
          class="hero__link"
        >
          <img :src="linkedin" alt="linkedin" class="hero__icon" />
        </a>
        <a
          href="https://twitter.com/ItsTheNicoleA"
          target="_blank"
          class="hero__link"
        >
          <img :src="twitter" alt="twitter" class="hero__icon" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import github from "@/assets/icons/github.svg";
import email from "@/assets/icons/email.svg";
import linkedin from "@/assets/icons/linkedin.svg";
import twitter from "@/assets/icons/twitter.svg";

export default {
  name: "Hero",
  data() {
    return {
      github,
      email,
      linkedin,
      twitter
    };
  }
};
</script>

<style scoped>
#hero-wrapper {
  background: var(--primary);
  border-bottom: 1px solid var(--siyah-black);
  min-height: 70vh;
  text-align: center;
}

.hero__title {
  font-size: 4.5rem;
  font-weight: bold;
  letter-spacing: 2px;
  margin: 0;
  padding: 0 0.5rem;
  text-transform: uppercase;
}

.hero__inner {
  width: 100%;
}

.hero__tagline {
  font-size: 1.15rem;
  margin: 1rem 0 2rem 0;
  padding: 0 0.5rem;
  line-height: 2;
}

.hero__links {
  display: flex;
  justify-content: space-evenly;
  margin: 2rem auto;
}

.hero__link {
  align-items: center;
  background: var(--secondary);
  border-radius: 9999px;
  border: 2px solid var(--primary);
  display: flex;
  height: 3rem;
  width: 3rem;
}
.hero__link:hover,
.hero__link:focus {
  border: 2px solid var(--text-primary);
  transition: border 0.3s ease-in-out;
  outline: none;
}

.hero__icon {
  width: 1.15rem;
  height: 1.15rem;
  margin: auto;
}

@media only screen and (min-width: 600px) {
  .hero__links {
    max-width: 60vw;
  }
}

@media only screen and (min-width: 769px) {
  .hero__title {
    font-size: 6rem;
    letter-spacing: 3px;
  }

  .hero__tagline {
    font-size: 1.25rem;
  }

  .hero__links {
    max-width: 40vw;
  }

  .hero__icon {
    width: 1.25rem;
    height: 1.25rem;
    margin: auto;
  }
}
</style>
