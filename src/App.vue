<template>
  <v-app id="inspire">
    <v-card class="overflow-hidden">
      <v-app-bar
        absolute
        color="#fcb69f"
        dark
        shrink-on-scroll
        src="https://picsum.photos/1920/1080?random"
        scroll-target="#scrolling-techniques-2"
      >
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
          ></v-img>
        </template>
  
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-tabs align-with-title>
          <v-tab to="/">Home</v-tab>
          <v-tab to="/work">Work</v-tab>
          <v-tab to="/contact">Contact</v-tab>
        
        </v-tabs>
  
        <v-spacer></v-spacer>
  
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
  
        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>
  
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>
      <v-sheet
        id="scrolling-techniques-2"
        class="overflow-y-auto"
        max-height="600"
      >
        <v-container style="height: 20000px; margin-top: 20%">
          <router-view></router-view>
        </v-container>
      </v-sheet>
    </v-card>
  </v-app>
</template>


<script>
  export default {
    data: () => ({
      collapseOnScroll: true,
    }),
  }
</script>




