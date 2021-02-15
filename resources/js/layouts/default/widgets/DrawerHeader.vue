<template>
  <v-list-item class="mb-0 justify-space-between pl-3">
    <v-list-item-avatar>
      <v-img
        :src="src"
      />
    </v-list-item-avatar>

    <v-list-item-content class="pl-3">
      <v-list-item-title class="text-h6">
        <strong class="mr-1 font-weight-black">{{app.title}}</strong>

<!--        <span class="primary&#45;&#45;text">FREE</span>-->
      </v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
  // Utilities
  //import { get } from 'vuex-pathify'
  import { APP_CONFIG } from '../../../config';
  export default {
    name: 'DefaultDrawerHeader',
      data () {
          return {
              //src: APP_CONFIG.CDN_URL + 'images/vmd.svg'
              src:"https://blog-vuetify.oss-cn-beijing.aliyuncs.com/app/images/app/vmd.svg"
          }
      },
    computed: {
        drawer(){
            return this.$store.getters.getVersion;
        },
        app(){
            return this.$store.getters.getApp;
        }
    },
  }
</script>
