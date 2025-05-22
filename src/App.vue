<template>
  <v-app id="inspire">
    <v-card class="overflow-hidden">
      <!-- Responsive App Bar -->
      <v-app-bar
        absolute
        color="#fcb69f"
        dark
        shrink-on-scroll
        scroll-target="#scrolling-techniques-2"
        height="80"
        flat
      >
        <template #img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
            cover
          />
        </template>

        <v-app-bar-nav-icon class="d-sm-none" />

        <!-- Tabs in toolbar on larger screens -->
        <v-tabs
          class="d-none d-sm-flex"
          align-with-title
          grow
        >
          <v-tab to="/">Home</v-tab>
          <v-tab to="/about">About</v-tab>
          <v-tab to="/contact">Contact</v-tab>
          <v-tab to="/portfolio">Portfolio</v-tab>
        </v-tabs>

        <v-spacer />

        <!-- Icons -->
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

      <!-- Content Area -->
      <v-sheet
        id="scrolling-techniques-2"
        class="overflow-y-auto"
        max-height="calc(100vh - 80px)"
      >
        <v-container fluid class="mt-10 pa-10">
          <v-row>
            <v-col cols="12">
              <!-- Dynamic routed content -->
              <router-view />
            </v-col>
          </v-row>
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
};
</script>

<style scoped>
/* Optional styling to enhance mobile UX */
@media (max-width: 600px) {
  .v-tabs {
    overflow-x: auto;
  }
}
</style>
