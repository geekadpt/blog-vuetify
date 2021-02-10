<template>
  <v-btn
    class="ml-3 mr-4"
    elevation="1"
    fab
    small
    @click="toggle()"
  >
    <v-icon>
      {{ mini ? 'mdi-format-list-bulleted' : 'mdi-dots-vertical' }}
    </v-icon>
  </v-btn>
</template>

<script>
  // Utilities
  //import { sync } from 'vuex-pathify'

  export default {
    name: 'DefaultDrawerToggle',

    computed: {
        mini(){
            return this.$store.getters.getDrawer.mini;
        },
    },
      methods:{
        toggle(){
            this.$store.dispatch("mini");
        }
      }
  }
</script>
