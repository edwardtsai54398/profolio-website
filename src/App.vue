<template>
  <div class="linear-gray-bg"></div>
  <globeBg :dark-mode="store.state.theme === 'dark'" />
  <TopNav
    to-id
    center="center"
  >
    <template #logo>
      <div class="social-wrapper">
        <a
          href="https://github.com/edwardtsai54398"
          target="_blank"
          class="social-logo"
        ><font-awesome-icon icon="fa-brands fa-github" /></a>
        <a
          href="https://www.linkedin.com/in/chung-hua-tsai-598ba022b/"
          target="_blank"
          class="social-logo"
        ><font-awesome-icon icon="fa-brands fa-linkedin" /></a>
      </div>
      <ham
        v-model="isMobileMenuOpen"
        :devide-num="2"
        open-style="cross"
      />
    </template>
    <template #function>
      <label
        class="theme-toggle theme_wrapper"
        title="Toggle theme"
        style="position: relative;"
      >
        <span class="toggle_border"></span>
        <input
          type="checkbox"
          v-model="themeDark"
          @change="changeTheme"
        />
        <span class="theme-toggle-sr">Toggle theme</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          width="20px"
          height="20px"
          fill="currentColor"
          stroke-linecap="round"
          class="theme-toggle__classic"
          viewBox="0 0 32 32"
        >
          <clipPath id="theme-toggle__classic__cutout">
            <path d="M0-5h30a1 1 0 0 0 9 13v24H0Z" />
          </clipPath>
          <g clip-path="url(#theme-toggle__classic__cutout)">
            <circle
              cx="16"
              cy="16"
              r="9.34"
            />
            <g
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path d="M16 5.5v-4" />
              <path d="M16 30.5v-4" />
              <path d="M1.5 16h4" />
              <path d="M26.5 16h4" />
              <path d="m23.4 8.6 2.8-2.8" />
              <path d="m5.7 26.3 2.9-2.9" />
              <path d="m5.8 5.8 2.8 2.8" />
              <path d="m23.4 23.4 2.9 2.9" />
            </g>
          </g>
        </svg>
      </label>
    </template>
  </TopNav>
  <mobileMenu
    :menu="navList"
    v-model="isMobileMenuOpen"
    to-id
  ></mobileMenu>
  <div
    class="home"
    ref="main"
  >
    <section
      class="intro_section"
      id="intro"
    >
      <div class="intro_img">
        <div class="noise_overlay"></div>
        <img
          src="../src/assets/images/banner-profile-removebg.png"
          alt=""
        >
      </div>
      <div class="intro_wrapper">
        <h2>Hi, I' m <span>Edward Tsai.</span></h2>
        <p>I' m a Front-end developer<br> base in Taipei.</p>
      </div>
      <mouseScroll />
    </section>
    <section
      class="about_section"
      id="about"
    >
      <h3>ABOUT ME</h3>
      <div class="wrapper">
        <article class="about_intro">
          <p>
            I specialize in developing of websites and web applications, playing a important role in their overall success. Feel
            free to explore examples of my work in the Projects section.
          </p>
          <p>
            I'm actively seeking job opportunities where I can both contribute and developing professionally. If you have a
            fitting
            opportunity that aligns with my skills and experience, please don't hesitate to reach out to me.
          </p>
        </article>
        <div class="skill_wrapper">
          <h4>Skill</h4>
          <div class="skill_tags_wrapper">
            <span class="skill_tag"># HTML</span>
            <span class="skill_tag"># Scss</span>
            <span class="skill_tag"># Vue.js</span>
            <span class="skill_tag"># Javascript</span>
            <span class="skill_tag"># git</span>
            <span class="skill_tag"># Vuex</span>
            <span class="skill_tag"># Bootstrap</span>
            <span class="skill_tag"># D3.js</span>
            <span class="skill_tag"># Axios</span>
          </div>
        </div>
      </div>
    </section>
    <section
      class="project_section"
      id="project"
    >
      <h3>PROJECT</h3>
      <div class="projects_wrapper_prime">
        <ProjectCard
          title="Vote for Taiwan"
          :img="voteImg"
          code-link="https://github.com/edwardtsai54398/F2Evotefortw2024"
          demo-link="https://edwardtsai54398.github.io/F2Evotefortw2024/#/"
        >
          I utilized D3.js to convert geographical data into SVG path information, combined
          with Vue.js to render maps of various administrative regions.
        </ProjectCard>
        <ProjectCard
          title="Fresh Drop"
          :img="freshDropImg"
          code-link="https://github.com/edwardtsai54398/fresh_drop/tree/dev"
          demo-link="https://tibamef2e.com/chd102/g2/"
        >
          Fresh Drop is a side project conceptualized as an e-commerce platform for ingredient ordering.
        </ProjectCard>
      </div>
      <div class="projects_wrapper_others">
        <div class="card_col">
          <ProjectCard
            title="Aster-select"
            :img="asterImg"
            code-link="https://github.com/edwardtsai54398/ASTER_tableware-select-shop"
            demo-link="https://edwardtsai54398.github.io/ASTER_tableware-select-shop/"
          >
            ASTER-select is a demo-website of an e-commerce platform of tableware selection shop.
          </ProjectCard>
        </div>
      </div>
    </section>
    <section
      class="contact_section"
      id="contact"
    >
      <h3>Contact to Me</h3>
      <div class="contact_wrapper">
        <span class="mail">donkeycoder.ET@gmail.com</span>
        <div class="social-wrapper">
          <a
            href="https://github.com/edwardtsai54398"
            target="_blank"
            class="social-logo"
          ><font-awesome-icon icon="fa-brands fa-github" /></a>
          <a
            href="https://www.linkedin.com/in/chung-hua-tsai-598ba022b/"
            target="_blank"
            class="social-logo"
          ><font-awesome-icon icon="fa-brands fa-linkedin" /></a>
        </div>
      </div>
    </section>

  </div>

</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TopNav from '@/components/public/TopNav.vue'
import ProjectCard from '@/components/project/ProjectCard.vue'
import ham from '@/components/public/hamburger.vue'
import mobileMenu from '@/components/public/mobileMenuDrawer.vue'
import voteImg from '@/assets/images/project-screen-vote.jpg'
import freshDropImg from '@/assets/images/project-screen-freshDrop.jpg'
import asterImg from '@/assets/images/project-screen-aster.jpg'
import navList from '@/utils/navList'
import globeBg from '@/components/three/globeBg.vue'
import mouseScroll from '@/components/public/mouseIcon.vue'

const store = useStore()

const themeDark = ref(false)
const changeTheme = () => {
  if (themeDark.value) {
    localStorage.setItem('theme', 'dark')
    store.commit('updateTheme', 'dark')
  } else {
    localStorage.setItem('theme', 'bright')
    store.commit('updateTheme', 'bright')
  }
  toggleDarkTheme(themeDark.value)
}

const toggleDarkTheme = (val) => {
  const htmlElement = document.querySelector('html')
  if (val) {
    htmlElement.classList.add('dark')
  } else {
    htmlElement.classList.remove('dark')
  }

}
onMounted(() => {
  if (localStorage.getItem('theme') === 'dark') {
    themeDark.value = true
  }
  toggleDarkTheme(themeDark.value)
})

const isMobileMenuOpen = ref(false)

//gsap
gsap.registerPlugin(ScrollTrigger);
const main = ref()
const y = 100
const duration = 1
const opacity = 0
onMounted(() => {
  gsap.from('#about h3', {
    scrollTrigger: {
      trigger: '#about',
      start: 'top 50%',
      toggleAction: 'play none none none'
    },
    opacity,
    y,
    duration
  })
  gsap.from('#about .wrapper', {
    scrollTrigger: {
      trigger: '#about',
      start: 'top 50%',
      toggleAction: 'play none none none'
    },
    opacity,
    y,
    duration,
    delay: 0.3
  })
  gsap.from('#project h3', {
    scrollTrigger: {
      trigger: '#project',
      start: 'top 50%',
      toggleAction: 'play none none none'
    },
    opacity,
    y,
    duration
  })
  gsap.from('#project .projects_wrapper_prime', {
    scrollTrigger: {
      trigger: '#project',
      start: 'top 50%',
      toggleAction: 'play none none none'
    },
    opacity,
    y,
    duration,
    delay: 0.2
  })
  gsap.from('#project .projects_wrapper_others', {
    scrollTrigger: {
      trigger: '#project',
      start: 'top 50%',
      toggleAction: 'play none none none'
    },
    opacity,
    y,
    duration,
    delay: duration - 0.2
  })
})
</script>


<style lang="scss">
@import "@/assets/scss/all.scss";

#app {
  width: 100%;
  overflow: hidden;
}
</style>
