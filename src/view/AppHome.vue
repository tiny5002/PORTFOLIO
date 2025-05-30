<template>
  <v-container fluid>
    <v-row>
      <!-- Left Column: Personal Card + About Me -->
      <v-col 
        cols="12" 
        md="4"
      >
        <v-card>
          <v-img
            :src="cards[0].src"
            height="400"
            cover
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          />
          <v-card-title 
            class="black--text"
          >
            Twinkle Mehta
          </v-card-title>
        </v-card>

        <v-card 
          color="#26c6da" 
          dark 
          class="mt-4"
        >
          <v-card-title>
            <v-icon left>
              mdi-account
            </v-icon>
            About Me
          </v-card-title>
          <v-card-text>
            Hi! I am Twinkle Mehta, pursuing a BCA from Christ University.
            I’m a front-end developer with intermediate HTML, CSS, and JS skills.
          </v-card-text>
          <div class="social-links mb-2">
            <a
              v-for="(link, i) in social"
              :key="i"
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
            >
              <v-icon size="24px">{{ link.icon }}</v-icon>
            </a>
          </div>
          <v-card-actions>
            <v-avatar>
              <v-img :src="avatarSrc" />
            </v-avatar>
            <span class="ml-3">Twinkle Mehta</span>
          </v-card-actions>
        </v-card>
      </v-col>

      <!-- Middle Column: Languages + Technologies -->
      <v-col 
        cols="12" 
        md="4"
      >
        <!-- Languages -->
        <v-card 
          class="pa-4 mb-4" 
          outlined
        >
          <v-card-title>Languages</v-card-title>
          <v-card-text>
            <v-chip 
              class="ma-2" 
              outlined 
              color="success"
            >
              <v-icon left>
                mdi-translate
              </v-icon> English
            </v-chip>
            <v-chip 
              class="ma-2" 
              outlined 
              color="primary" 
              pill
            >
              Hindi 
              <v-icon 
                right
              >
                mdi-account-outline
              </v-icon>
            </v-chip>
            <v-chip 
              class="ma-2" 
              outlined 
              color="deep-purple accent-4"
            >
              Gujarati
            </v-chip>
            <v-chip 
              class="ma-2" 
              outlined
              color="indigo darken-3"
            >
              Bengali
            </v-chip>
          </v-card-text>
        </v-card>

        <!-- Technologies -->
        <v-card 
          class="pa-4" 
          outlined
        >
          <v-card-title>Technologies Learnt</v-card-title>
          <v-card-text>
            <v-btn
              v-for="tech in techStack"
              :key="tech.icon"
              depressed
              fab
              outlined
              x-large
              :color="tech.color"
              class="ma-2"
            >
              <font-awesome-icon 
                :icon="['fab', tech.icon]" 
                size="3x" 
              />
            </v-btn>
            <v-card-text class="black--text">
              <ul>
                <li 
                  v-for="(lang, index) in languages" 
                  :key="index"
                >
                  {{ lang.text }}
                </li>
              </ul>
            </v-card-text>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Right Column: Skills & Hobbies -->
      <v-col 
        cols="12" 
        md="4"
      >
        <v-card 
          class="pa-4" 
          outlined
        >
          <v-card-title>Skills & Hobbies</v-card-title>
          <v-row>
            <v-col 
              v-for="(hobby, i) in hobbies" 
              :key="i" 
              cols="12"
            >
              <v-card 
                :color="hobby.color" 
                :dark="hobby.dark" 
                flat 
                class="md-2"
              >
                <v-card-text>{{ hobby.text }}</v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>

      <!-- Bottom Row: Table -->
      <v-col cols="12">
        <v-data-table 
          :headers="headers" 
          :items="qualifications" 
          class="elevation-1"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faVuejs,
  faGithub,
  faLinkedinIn,
  faInstagram,
  faDiscord
} from '@fortawesome/free-brands-svg-icons'

library.add(faHtml5, faCss3Alt, faJs, faVuejs, faGithub, faLinkedinIn, faInstagram, faDiscord)

export default {
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      avatarSrc:
        'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light',
      social: [
        { icon: 'fab fa-github', url: '#' },
        { icon: 'fab fa-linkedin-in', url: '#' },
        { icon: 'fab fa-instagram', url: '#' },
        { icon: 'fab fa-discord', url: '#' }
      ],
      techStack: [
        { icon: 'html5', color: 'orange' },
        { icon: 'css3-alt', color: 'blue' },
        { icon: 'js', color: 'yellow darken-2' },
        { icon: 'vuejs', color: 'green darken-2' }
      ],
      headers: [
        { text: 'School', value: 'name' },
        { text: 'Qualification', value: 'qualification' },
        { text: 'Board/University', value: 'board' },
        { text: 'State & Country', value: 'state' },
        { text: 'Marks (%)', value: 'marks' },
        { text: 'Year/Month of pass', value: 'months' }
      ],
      qualifications: [
        {
          name: 'Shri Shikshayatan School',
          qualification: 'Class 10',
          board: 'CBSE',
          state: 'West Bengal, Kolkata',
          marks: '92%',
          months: '2020, May'
        },
        {
          name: 'Shri Shikshayatan School',
          qualification: 'Class 12',
          board: 'CBSE',
          state: 'West Bengal, Kolkata',
          marks: '90%',
          months: '2022, May'
        }
      ],
      cards: [
        {
          title: 'Twinkle Mehta',
          src: 'https://ik.imagekit.io/Twinkle27/IMG_20240730_142341-removebg-preview%20(1).png'
        }
      ],
      hobbies: [
        { text: 'Swimmer for 5 years and school level swimming champion', color: 'blue-grey', dark: true },
        { text: 'Drawings and paintings published in articles and magazines', color: 'brown', dark: true },
        { text: 'An avid fiction book reader: It Ends With Us, Mayanagri', color: 'indigo lighten-2', dark: true },
        { text: 'Played games like Valorant and Among Us', color: 'orange lighten-2', dark: false },
        { text: 'Loved travelling: Darjeeling, Puri, Ahmedabad, North India', color: 'red lighten-2', dark: true }
      ],
      languages: [
        { text: 'HTML' },
        { text: 'CSS' },
        { text: 'JAVASCRIPT' },
        { text: 'VUE JS' }
      ]
    }
  }
}
</script>

<style scoped>
.social-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 8px;
}
</style>