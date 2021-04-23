<template>
  <footer id="footer" class="footer">
    <div class="footer__grid">
      <div class="footer__col-1">
        <figure>
          <img :src="require('@/assets/images/coco.jpg')" alt="Coco" />
          <figcaption>
            Please enjoy this photo of my very fluffy cat, Coco.
          </figcaption>
        </figure>
      </div>
      <div class="footer__col-2">
        <h2 class="text--thick">Contact</h2>
        <ul class="contact-list">
          <li class="contact-list__item">
            <a
              class="link text--thick"
              href="mailto:alli.nicolette@gmail.com"
              target="_blank"
            >
              email
            </a>
          </li>
          <li class="contact-list__item">
            <a
              class="link text--thick"
              href="https://www.linkedin.com/in/nicole-alli/"
              target="_blank"
            >
              linkedin
            </a>
          </li>
          <li class="contact-list__item">
            <a
              class="link text--thick"
              href="https://twitter.com/ItsTheNicoleA"
              target="_blank"
            >
              twitter
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
.footer {
  background: var(--siyah-black);
  color: var(--secondary);
  padding: 1rem;
}

.footer__grid {
  display: grid;
  grid-template-columns: 25% 1fr;
  margin: auto;
  width: 75vw;
}

.footer__col-1 {
  margin-left: 2rem;
}
.footer__col-1 figure img {
  border-radius: 4px;
  object-fit: cover;
  width: 100%;
}

.footer__col-2 h2 {
  font-size: 1.25rem;
}

.contact-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.contact-list__item {
  color: var(--primary);
  padding: 0.25rem 0;
}
.contact-list__item .link {
  border-bottom: 2px solid var(--primary);
  color: var(--primary);
  line-height: 2;
  text-decoration: none;
}
.contact-list__item .link:hover {
  border-bottom: 4px solid var(--primary);
  transition: border 0.3s ease-in-out;
}
.contact-list__item .link:focus {
  background: var(--primary);
  color: var(--text-primary);
  outline: 1px solid var(--primary);
  transition: all 0.2s ease;
}
</style>
