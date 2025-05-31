<template>
  <v-row>
      <v-col 
        cols="12" 
        md="9"
      >
      <v-timeline :dense="$vuetify.breakpoint.smAndDown">
        <v-timeline-item color="purple lighten-2" fill-dot right>
          <v-card>
            <v-card-title class="purple lighten-2">
              <v-icon dark size="42" class="mr-4">mdi-magnify</v-icon>
              <h2 class="text-h4 white--text font-weight-light">
                Startathon - A 24 hour Hackathon
              </h2>
            </v-card-title>
            <v-container>
              <v-row>
                <v-col cols="12" md="15">
                  Organised and participated in a 24 hour Hackathon. Made a static website for the same.
                  In the startathon, collaborated with a group of five members to ideate and create a
                  project Drisha and started working on that project.
                </v-col>
                <v-col class="hidden-sm-and-down text-right" md="2">
                  <v-icon size="64">mdi-calendar-text</v-icon>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-timeline-item>

        <v-timeline-item color="amber lighten-1" fill-dot left small>
          <v-card>
            <v-card-title class="amber lighten-1 justify-end">
              <h2 class="text-h4 mr-4 white--text font-weight-light"> Flux- National Level IT Fest</h2>
              <v-icon dark size="42">mdi-home-outline</v-icon>
            </v-card-title>
            <v-container>
              <v-row>
                <v-col cols="12" md="8">
                Flux is a national level IT Fest organised by the computer association Samagraha. It consisted of gaming events like TechnoInnovation and BGMI. Was innolved in the PR and event management of the event.
                </v-col>
                <v-col cols="12" md="4">
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-timeline-item>

        <v-timeline-item color="cyan lighten-1" fill-dot right>
          <v-card>
            <v-card-title class="cyan lighten-1">
              <v-icon class="mr-4" dark size="42">mdi-email-outline</v-icon>
              <h2 class="text-h4 white--text font-wight-light">Code of Deception</h2>
            </v-card-title>
            <v-container>
              <v-row>
                <v-col cols="12" md="8">
                  Runner up in the IT Event- Code of Deception. The event included it quiz, presentation anad data analysis.
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-timeline-item>

        <v-timeline-item color="red lighten-1" fill-dot left small>
          <v-card>
            <v-card-title class="red lighten-1 justify-end">
              <h2 class="text-h4 mr-4 white--text font-weight-light">Phaseshift- 2024</h2>
              <v-icon dark size="42">mdi-account-multiple-outline</v-icon>
            </v-card-title>
            <v-container>
              <v-row>
                <v-col class="hidden-sm-and-down" md="2">
                  <v-icon size="64">mdi-server-network</v-icon>
                </v-col>
                <v-col cols="12" md="10">
                    Phaseshift is an cryptography-encoding and decoding investigation event. Parctipated and won as runner up in the same event.
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-timeline-item>

        <v-timeline-item color="green lighten-1" fill-dot right>
          <v-card>
            <v-card-title class="green lighten-1">
              <v-icon class="mr-4" dark size="42">mdi-phone-in-talk</v-icon>
              <h2 class="text-h4 white--text font-weight-light">Internship in OnTrack</h2>
            </v-card-title>
            <v-container>
              <v-row>
                <v-col>
                    Interning in OnTrack as front end developer introduced me to technologies like Vuejs and Vuetify. I also got an oppurtunity to learn about github, vuetlanes and extensions in github.  
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-col>
  </v-row>
</template>