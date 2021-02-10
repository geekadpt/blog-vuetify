<template>
    <v-navigation-drawer
        id="default-drawer"
        v-model="drawer.drawer"
        :dark="personal.dark"
        :right="$vuetify.rtl"
        :src="drawer.drawerImage ? personal.images : ''"
        :mini-variant.sync="drawer.mini"
        mini-variant-width="80"
        app
        width="260"
    >
        <template
            v-if="drawer.drawerImage"
            #img="props"
        >
            <v-img
                :key="personal.images"
                :gradient="personal.gradient"
                v-bind="props"
            />
        </template>

        <div class="px-2">
            <default-drawer-header />

            <v-divider class="mx-3 mb-2" />

            <default-list :items="drawer.items" />
        </div>

        <template #append>
            <div class="pa-4 text-center">
                <v-btn
                    class="text-none mb-4"
                    color="white"
                    href="https://vuetifyjs.com"
                    small
                    text
                >
                    Documentation
                </v-btn>

                <v-btn
                    block
                    class="text-none"
                    color="secondary"
                    href="https://store.vuetifyjs.com/products/vuetify-material-dashboard-pro"
                >
                    <v-icon left>
                        mdi-package-up
                    </v-icon>

                    Upgrade to Pro
                </v-btn>
            </div>
        </template>

        <div class="pt-12" />
    </v-navigation-drawer>
</template>

<script>
  // Utilities
  //import { get, sync } from 'vuex-pathify'

  export default {
    name: 'DefaultDrawer',

    components: {
      DefaultDrawerHeader: () => import(
        /* webpackChunkName: "default-drawer-header" */
        './widgets/DrawerHeader'
      ),
      DefaultList: () => import(
        /* webpackChunkName: "default-list" */
        './List'
      ),
    },

    computed: {
        drawer(){
            return this.$store.getters.getDrawer;
        },
        personal(){
            return this.$store.getters.getPersonal;
        },
    },
  }
</script>

<style lang="sass">
#default-drawer
  .v-list-item
    margin-bottom: 8px

  .v-list-item::before,
  .v-list-item::after
    display: none

  .v-list-group__header__prepend-icon,
  .v-list-item__icon
    margin-top: 12px
    margin-bottom: 12px
    margin-left: 4px

  &.v-navigation-drawer--mini-variant
    .v-list-item
      justify-content: flex-start !important
</style>
