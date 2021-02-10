<template>
  <v-menu
    bottom
    left
    min-width="200"
    offset-y
    origin="top right"
    transition="scale-transition"
  >
    <template v-slot:activator="{ attrs, on }">
      <v-btn
        class="ml-2"
        min-width="0"
        text
        v-bind="attrs"
        v-on="on"
      >
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </template>

    <v-list
      :tile="false"
      flat
      nav
    >
      <template v-for="(p, i) in profile">
        <v-divider
          v-if="p.divider"
          :key="`divider-${i}`"
          class="mb-2 mt-2"
        />

        <v-list-item
          v-else
          :key="`item-${i}`"
          to="/"
          @click="func(i)"
        >
          <v-list-item-title v-text="p.title" />
        </v-list-item>
      </template>
    </v-list>
  </v-menu>
</template>

<script>
  import {EventBus} from "../../../event-bus";

  export default {
    name: 'DefaultAccount',

    data: () => ({
      profile: [
        { title: 'Profile' },
        { title: 'Settings' },
        { divider: true },
        { title: 'Log out' },
      ],
    }),methods:{
        func(i){
            console.log(i);
            switch (i) {
                case 1:break;
                case 2:break;
                case 3:
                    this.$store.dispatch('logout');
                    this.$watch(this.$store.getters.getLogoutStatus, function () {
                        if (this.$store.getters.getLogoutStatus() === 2) {
                            this.$router.push({name:'Index'});
                        }
                        if (this.$store.getters.getLogoutStatus() === 3) {
                            EventBus.$emit('open-message', {
                                text: this.$store.getters.getLogoutErrors
                            });
                        }
                    });
            }
        }
      }
  }
</script>
