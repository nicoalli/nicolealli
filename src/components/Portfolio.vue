<template>
  <section id="portfolio" class="section">
    <div class="section__content">
      <h2 id="portfolio-title" class="section__title">Portfolio</h2>
      <ul class="portfolio__list">
        <UICard tag="li">
          <UICardText titleTag="h3">
            <template #title>
              ResearchAI
            </template>
            <template #subtitle>
              <span class="position"> front end developer </span>
            </template>
            A product by Pigeonline. ResearchAI, is a platform that automates
            data cleaning, reporting, and research tasks using statistics and
            AI. I designed UX/UI flows, created wireframes and prototypes. I
            also focused on web accessibility, developing a process to include
            accessibility in the development cycle.
            <div>
              <span
                v-for="tag in ['vuejs', 'html', 'css', 'sass', 'javascript']"
                :key="`${tag}1`"
              >
                {{ tag }}
              </span>
            </div>
          </UICardText>
        </UICard>
        <UICard tag="li">
          <UICardText titleTag="h3">
            <template #title>
              Tejo
            </template>
            I worked primarily as a <strong>front-end developer</strong> with
            some time spent maintaining the backend. I was tasked with building
            the landing page with a focus on responsive design. I also built the
            front end for Tejo's cosmetics recommendation survey, this involved
            converting low-fidelity designs to a high-fidelity prototype to code
            - helping to produce a smooth user experience.
            <div>
              <span
                v-for="tag in [
                  'drupal',
                  'php',
                  'javascript',
                  'html',
                  'css',
                  'python'
                ]"
                :key="`${tag}2`"
              >
                {{ tag }}
              </span>
            </div>
          </UICardText>
        </UICard>
        <UICard tag="li">
          <UICardText titleTag="h3">
            <template #title>
              Administrator Portal
            </template>
            A platform for employees at Diane Frankling Co-operative Homes to
            manage various administrative tasks. I worked as a
            <strong>full-stack developer</strong>. I built inventory systems to
            keep track of maintenance requests, building assets, and resident
            parking & key card access. I also built a calendar dashboard that
            manages employee payroll and vacation schedules.
            <div>
              <span
                v-for="tag in ['wordpress', 'php', 'javascript', 'html', 'css']"
                :key="`${tag}3`"
              >
                {{ tag }}
              </span>
            </div>
          </UICardText>
        </UICard>
        <UICard tag="li">
          <UICardText titleTag="h3">
            <template #title>
              Realestate Website
            </template>
            I developed a web app from provided wireframes for an eary stage
            startup. Features include a search algorithm to find real estate
            listing that best match client requirements.
            <div>
              <span
                v-for="tag in [
                  'wordpress',
                  'php',
                  'java',
                  'javascript',
                  'html',
                  'css'
                ]"
                :key="`${tag}4`"
              >
                {{ tag }}
              </span>
            </div>
          </UICardText>
        </UICard>
        <UICard tag="li">
          <UICardText titleTag="h3">
            <template #title>
              Student Accessibility Portal
            </template>
            As part of a school project, my team developed a web app where UofT
            students can access and interact with accessibility services. We
            scraped UofT sites for accessibility related services and built an
            API to bring everything together into one platform. The app includes
            personalized dashboards and an interactive map.
            <div>
              <span
                v-for="tag in ['react', 'javascript', 'html', 'css', 'nodejs']"
                :key="`${tag}4`"
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
  }
};
</script>

<style scoped>
#portfolio {
  background: #fafafa;
}

.portfolio__list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.portfolio__card {
  background: #fff;
  box-shadow: 0 2px 8px 0 hsla(0, 0%, 0%, 0.1);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem;
}

.portfolio__card .title {
  margin: 0;
}
.portfolio__card .position {
  text-transform: uppercase;
  font-weight: bold;
  color: var(--primary);
  font-size: 0.9rem;
  letter-spacing: 1px;
  margin-bottom: 1rem;
  display: block;
}
</style>
