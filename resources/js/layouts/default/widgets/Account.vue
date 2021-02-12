
<template >
    <div class="px-2">
        <v-menu
            bottom
            left
            min-width="200"
            offset-y
            origin="top right"
            transition="scale-transition"
            v-if="user"
        >
            <template v-slot:activator="{ attrs, on }">
                <v-btn
                    class="ml-2"
                    min-width="0"
                    text
                    v-bind="attrs"
                    v-on="on"
                    v-if="!user.avatar"
                >
                    <span class="text--darken-1 headline ">{{user.nickname.substr(0,1)}}</span>
                </v-btn>
                <v-btn
                    class="mx-2"
                    fab
                    dark
                    small
                    color="dark"
                    v-if="user.avatar"
                >
                    <v-avatar
                        v-bind="attrs"
                        v-on="on"
                        text
                        size="34px"
                    >
                        <img
                            :src="user.avatar"
                            :alt="user.nickname.substr(0,1)"

                        >
                    </v-avatar>
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
        <router-link :to="{ name:'登录' }" v-if="!user">
                <v-btn
                    class="ml-2"
                    min-width="0"
                    text
                >
                    <v-icon dark>
                        mdi-account
                    </v-icon>
                </v-btn>
        </router-link>
    </div>
</template>
<script>
  import {EventBus} from "../../../event-bus";

  export default {
    name: 'DefaultAccount',

    data: () => ({
      profile: [
        { title: '个人资料' },
        { title: '发布文章' },
        { divider: true },
        { title: '退出登录' },
      ],
    }),computed:{
        user(){
            return this.$store.getters.getMyInfo;
        }
      }
      ,methods:{
        func(i){
            console.log(i);
            switch (i) {
                case 0:
                    this.$router.push({path:'/profile'});
                    break;
                case 1:
                    this.$router.push({path:'/publish'});
                    break;
                case 3:
                    console.log('sss');
                    this.$store.dispatch('logout');
                    this.$watch(this.$store.getters.getLogoutStatus, function () {
                        if (this.$store.getters.getLogoutStatus() === 2) {
                            this.$store.dispatch('clearLoginStatus');
                            // this.$router.push({name:'首页'});
                        }
                        if (this.$store.getters.getLogoutStatus() === 3) {
                            this.$store.dispatch('clearLoginStatus');
                            EventBus.$emit('open-message', {
                                text: this.$store.getters.getLogoutErrors
                            });
                        }
                    });
                    break;
                default:break;
            }
        }
      }
  }
</script>
