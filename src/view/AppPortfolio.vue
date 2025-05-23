<!-- <template>
   <v-app>
    <v-container shows-arrows="hover">
    <v-carousel-item src="https://cdn.vuetifyjs.com/imagescards/docks.jpg" cover>
    </v-carousel-item>
    <v-carousel-item src="https://cdn.vuetifyjs.com/imagescards/docks.jpg" cover>
    </v-carousel-item>
    <v-carousel-item src="https://cdn.vuetifyjs.com/imagescards/docks.jpg" cover>
    </v-carousel-item>
    </v-container>
    </v-app>
</template>

<script>
export default{
    name: 'App'
},
</script> -->
<template>
  <v-data-table
    :headers="headers"
    :items="qualifications"
    class="elevation-1"
  >

  </v-data-table>
</template>
<script>
export default {
    data () {
      return {
        headers: [
          {
            text: 'qualifications',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Qualification', value: 'qualification' },
          { text: 'Board/University', value: 'board' },
          { text: 'State&Country', value: 'state'},
          { text: 'Marks(%)', value: 'marks' },
          { text: 'Year/Month of pass', value: 'months' },
        ],
        qualifications: [
          {
            name: 'Shri Shikshayatan School',
            qualification: 'Class 10',
            board: 'CBSE',
            state: 'West Bengal,Kolkata',
            marks: '92%',
            months: '2020, May'
          },
          {
            name: 'Shri Shikshayatan School',
            qualification: 'Class 10=2',
            board: 'CBSE',
            state: 'West Bengal,Kolkata',
            marks: '90%',
            months: '2022, May'
          },
        ],
      }
    },
};
</script>
