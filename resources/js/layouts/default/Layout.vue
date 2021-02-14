<template>
  <v-app>
    <default-bar />

    <default-drawer />

    <default-view />

    <default-footer />

<!--    <default-settings />-->

    <default-notification />

    <default-router-guard />

    <default-overlay />
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
          /* webpackChunkName: "default-notification" */
        '../../components/Notification'
      ),
      DefaultRouterGuard: () => import(
         /* webpackChunkName: "default-router-guard" */
         '../../components/RouterGuard'
      ),
      DefaultOverlay: () => import(
         /* webpackChunkName: "default-router-guard" */
         '../../components/Overlay'
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
