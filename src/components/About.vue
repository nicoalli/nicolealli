<template>
  <section id="about" class="section">
    <div class="section__content">
      <h2 id="about-title" class="section__title">About</h2>
      <div class="about__content">
        <div class="about__photo-wrapper">
          <img
            class="about__photo"
            :src="require('@/assets/images/me.jpg')"
            alt="selfie of me wearing a pink cap"
          />
        </div>
        <div class="about__text">
          <p>
            Hello! My name is Nicole Alli (she/her) and I am a Toronto-based
            developer who believes in building
            <strong> accessible and inclusive technologies </strong>. I started
            my coding journey at 12 years old building websites & mini-games
            with java.
          </p>

          <p>
            I have <strong> 3+ years experience </strong> as a web developer.
            Firm believer in an accessibility first approach and building
            software that understands user diversity. My education includes a
            degree from the University of Toronto with a double major in
            computer science and equity studies.
          </p>

          <p>
            I hope to find space where I can explore the intersection between
            technology and social justice issues, a space where I can actively
            challenge hierarchical & exclusionary practices that maintain
            inequality.
          </p>

          <p>
            If I'm not coding you can find me colouring, practicing yoga, cross
            stitching, or playing with my cat, Coco.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About"
};
</script>

<style scoped>
.about__content {
  display: flex;
  flex-wrap: wrap;
  margin: 4rem 0;
}

.about__photo-wrapper {
  position: relative;
  flex: 1;
  max-width: 30%;
}
.about__photo {
  box-shadow: -15px -15px 0 0 var(--secondary),
    15px 15px 0 0 var(--silverado-trail);
  max-width: 100%;
  object-fit: cover;
}

.about__text {
  flex: 2;
  padding: 1rem;
  margin-left: 1rem;
}
</style>
