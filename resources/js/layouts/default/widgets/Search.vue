<template>
  <v-text-field
    placeholder="Search"
    class="mr-16"
    color="secondary"
    hide-details
    style="max-width: 220px"
    v-model="content"
    @keyup.enter.native="search"
  >
    <template
      v-if="$vuetify.breakpoint.mdAndUp"
      v-slot:append-outer
    >
      <v-btn
        class="mt-n2 ml-n2"
        fab
        small
        elevation="2"
        height="44"
        width="44"
        @click="search"
      >
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </template>
  </v-text-field>
</template>

<script>
  import { EventBus } from '../../../event-bus.js';
  export default {
      name: 'DefaultSearch',
      data: () => ({
          content:'',
      }),
      methods:{
          search(){
              console.log(this.content)
              if(this.content) {
                  this.$router.push({path: '/blog/search/' + this.content});
              }
          }
      }
  }
</script>
