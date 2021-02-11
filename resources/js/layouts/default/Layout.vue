<template>
  <v-app>
    <default-bar />

    <default-drawer />

    <default-view />

    <default-footer />

<!--    <default-settings />-->

    <default-notification />
  </v-app>
</template>

<script>
  export default {
    name: 'DefaultLayout',

    components: {
      DefaultBar: () => import(
        /* webpackChunkName: "default-app-bar" */
        './AppBar'
      ),
      DefaultDrawer: () => import(
        /* webpackChunkName: "default-drawer" */
        './Drawer'
      ),
      DefaultFooter: () => import(
        /* webpackChunkName: "default-footer" */
        './Footer'
      ),
      // DefaultSettings: () => import(
      //   /* webpackChunkName: "default-settings" */
      //   './Settings'
      // ),
      DefaultView: () => import(
        /* webpackChunkName: "default-view" */
        './View'
      ),
      DefaultNotification: () => import(
          /* webpackChunkName: "default-view" */
        '../../components/Notification'
      ),
    },
      created() {
            //console.log(localStorage.getItem('Authorization'));
            if (this.$store.getters.getMyInfoStatus() === 0 && localStorage.getItem('Authorization')){
                this.$store.dispatch('getMyInfo');
            }
      }
  }
</script>
