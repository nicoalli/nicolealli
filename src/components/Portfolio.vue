<template>
  <section id="portfolio" class="section">
    <div class="section__content">
      <h2 id="portfolio-title" class="section__title">Portfolio</h2>
      <ul class="portfolio__list">
        <UICard tag="li" v-for="(item, index) in portfolio" :key="index">
          <UICardText titleTag="h3">
            <template #title>
              {{ item.title }}
            </template>
            <template #subtitle>
              {{ item.position }}
            </template>
            {{ item.desc }}
            <div class="portfolio__tags">
              <span
                v-for="tag in item.tags"
                :key="`${index}-${tag}`"
                :class="['portfolio__tag', tag]"
              >
                {{ tag }}
              </span>
            </div>
          </UICardText>
        </UICard>
      </ul>
    </div>
  </section>
</template>

<script>
import { UICard, UICardText } from "./UICard.vue";

export default {
  name: "Portfolio",
  components: {
    UICard,
    UICardText
  },
  data() {
    return {
      portfolio: [
        {
          title: "ResearchAI",
          position: "front end developer, accessibility lead",
          tags: ["vuejs", "python", "html", "css", "javascript"],
          desc:
            "ResearchAI by PigeonLine is a platform that automates data \
            cleaning, reporting, and research tasks using statistics and AI. I \
            designed UX/UI flows, created wireframes and prototypes. I also \
            focused on web accessibility and developed a process to account for \
            accessibility in the development cycle."
        },
        {
          title: "Tejo",
          position: "front end developer",
          tags: ["drupal", "php", "javascript", "html", "css", "python"],
          desc:
            "I worked primarily as a front-end developer with some time spent \
            maintaining the backend. I built the landing page \
            with a focus on responsive design. I also built the front end for \
            their recommendation survey which involved converting \
            low-fidelity designs to a high-fidelity prototype to code - helping \
            to produce a smooth user experience."
        },
        {
          title: "Administrator Portal",
          position: "full stack developer",
          tags: ["wordpress", "php", "javascript", "html", "css"],
          desc:
            "A platform for employees at Diane Frankling Co-operative Homes to \
            manage various administrative tasks. I built inventory systems to \
            keep track of maintenance requests, building assets, and resident \
            parking & key card access. I also built a calendar dashboard that \
            manages employee payroll and vacation schedules."
        },
        {
          title: "Realestate Web App",
          position: "full stack developer",
          tags: ["wordpress", "php", "java", "javascript", "html", "css"],
          desc:
            "I developed a web app from provided wireframes for an eary stage \
            startup. Features include a search algorithm to find real estate \
            listing that best match client requirements."
        },
        {
          title: "Climate Justice Toronto",
          position: "front end developer, designer",
          tags: ["wordpress", "html", "css"],
          desc:
            "I designed and developed the website for Climate Justice Toronto."
        },
        {
          title: "Student Accessibility Portal",
          position: "full stack developer",
          tags: ["react", "javascript", "html", "css", "nodejs"],
          desc:
            "As part of a school project, my team developed a web app where UofT \
            students can access and interact with accessibility services. We \
            scraped UofT sites for accessibility related services and built an \
            API for personalized dashboards and an interactive map."
        }
      ]
    };
  }
};
</script>

<style>
#portfolio {
  background: #fafafa;
}

.portfolio__list {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
}

.portfolio__list .card {
  background: #fff;
  box-shadow: 0 2px 8px 0 hsla(0, 0%, 0%, 0.1);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  margin: 1rem;
  max-width: calc(100% / 4);
  padding: 1rem 1.5rem;
}

.portfolio__list .card__text .title {
  margin: 0;
  line-height: 2;
}

.portfolio__list .card__text .subtitle {
  text-transform: uppercase;
  font-weight: bold;
  color: var(--primary);
  font-size: 0.9rem;
  letter-spacing: 0.5px;
  margin-bottom: 1rem;
  display: block;
}

.portfolio__list .card__text .content {
  color: var(--text-secondary);
  line-height: 1.5;
}

.portfolio__tags {
  display: flex;
  flex-wrap: wrap;
  margin: 2rem 0 1rem 0;
}
.portfolio__tag {
  border-radius: 999px;
  font-size: 0.9rem;
  font-weight: bold;
  margin: 0 0.5rem 0.5rem 0;
  padding: 0.25em 0.75em;
}
.portfolio__tag.vuejs {
  color: #0f744e;
  background: #bfedd9;
}
.portfolio__tag.html {
  background: #fbd6c6;
  color: #884926;
}
.portfolio__tag.css {
  background: #d2daf9;
  color: #3150ab;
}
.portfolio__tag.javascript,
.portfolio__tag.python {
  background: #f9f1bd;
  color: #866a02;
}
.portfolio__tag.drupal,
.portfolio__tag.react {
  background: #d1eefa;
  color: #4b6f79;
}
.portfolio__tag.php {
  background: #e1e4ef;
  color: #5862a1;
}
.portfolio__tag.wordpress {
  background: #e4e3e2;
  color: #444140;
}
.portfolio__tag.java {
  background: #fddcb5;
  color: #8b5a18;
}
.portfolio__tag.nodejs {
  background: #d9efd7;
  color: #5f6d5f;
}
</style>
