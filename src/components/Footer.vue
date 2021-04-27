<template>
  <footer id="footer" class="footer">
    <div class="footer__grid">
      <div class="footer__col-1">
        <h2 class="text--thick">Contact</h2>
        <ul class="contact-list">
          <li class="contact-list__item">
            <a class="link text--thick" href="mailto:alli.nicolette@gmail.com">
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
              <img
                :src="externalLink"
                alt="opens in new window"
                class="external-icon"
              />
            </a>
          </li>
          <li class="contact-list__item">
            <a
              class="link text--thick"
              href="https://twitter.com/ItsTheNicoleA"
              target="_blank"
            >
              twitter
              <img
                :src="externalLink"
                alt="opens in new window"
                class="external-icon"
              />
            </a>
          </li>
        </ul>
      </div>
      <div class="footer__col-2">
        <figure>
          <img :src="require('@/assets/images/coco.jpg')" alt="Coco" />
          <figcaption>
            Please enjoy this photo of my very fluffy cat, Coco.
          </figcaption>
        </figure>
      </div>
    </div>
  </footer>
</template>

<script>
import externalLink from "@/assets/icons/externalLink.svg";

export default {
  name: "Footer",
  data() {
    return {
      externalLink
    };
  }
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
  grid-template-columns: 1fr 20%;
  margin: auto;
  width: 75vw;
}

.footer__col-1 {
  margin-left: 2rem;
}
.footer__col-1 h2 {
  font-size: 1.25rem;
}

.footer__col-2 figure img {
  border-radius: 4px;
  object-fit: cover;
  width: 100%;
}

.contact-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.contact-list__item {
  color: var(--primary);
  padding: 0.5rem 0;
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
  outline: none;
  transition: all 0.2s ease;
}
.contact-list__item .external-icon {
  width: 1rem;
}

@media only screen and (max-width: 1439px) {
  .footer__grid {
    grid-template-columns: 1fr 40%;
  }
}

@media only screen and (max-width: 600px) {
  .footer__grid {
    display: block;
  }
  .footer__col-1 {
    margin: auto;
    text-align: center;
  }
}
</style>
