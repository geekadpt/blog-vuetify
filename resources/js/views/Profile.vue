<template>
    <v-card
        color="blue-grey darken-1"
        dark
        :loading="isUpdating"
        style="height: 100%"
    >
        <template v-slot:progress>
            <v-progress-linear
                absolute
                color="green lighten-3"
                height="4"
                indeterminate
            ></v-progress-linear>
        </template>
        <v-img
            height="200"
            src="https://cdn.vuetifyjs.com/images/cards/dark-beach.jpg"
        >
            <v-row>
                <v-col
                    class="text-right"
                    cols="12"
                >
                    <v-menu
                        bottom
                        left
                        transition="slide-y-transition"
                    >
                        <template v-slot:activator="{ on }">
                            <v-btn
                                icon
                                v-on="on"
                            >
                                <v-icon>mdi-dots-vertical</v-icon>
                            </v-btn>
                        </template>
                        <v-list>
                            <v-list-item @click="updateMyInfo">
                                <v-list-item-action>
                                    <v-icon>mdi-settings</v-icon>
                                </v-list-item-action>
                                <v-list-item-content>
                                    <v-list-item-title>{{$t('m.profile.update_button')}}</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </v-col>
                <v-row
                    class="pa-4"
                    align="center"
                    justify="center"
                >
                    <v-col class="text-center">
                        <h3 class="headline">{{ user.nickname }}</h3>
                        <span class="grey--text text--lighten-1">{{ user.introduction }}</span>
                    </v-col>
                </v-row>
            </v-row>
        </v-img>
        <v-form>
            <v-container>
                <v-row>
                    <v-col
                        cols="12"
                    >
                        <v-text-field
                            v-model="profile.username"
                            filled
                            color="blue-grey lighten-2"
                            :label="$t('m.profile.username_label')"
                        >
                        </v-text-field>
                    </v-col>
                    <v-col
                        cols="12"
                    >
                        <v-text-field
                            v-model="profile.nickname"
                            filled
                            color="blue-grey lighten-2"
                            :label="$t('m.profile.nickname_label')"
                        >
                        </v-text-field>
                    </v-col>
                    <v-col
                        cols="12"
                    >
                        <v-text-field
                            v-model="profile.introduction"
                            filled
                            color="blue-grey lighten-2"
                            :label="$t('m.profile.introduction_label')"
                        >
                        </v-text-field>
                    </v-col>

                </v-row>
            </v-container>
        </v-form>
        <v-divider></v-divider>
        <v-card-actions>
            <v-switch
                v-model="autoUpdate"
                disabled
                class="mt-0"
                color="green lighten-2"
                hide-details
                label="Auto Update"
            ></v-switch>
            <v-spacer></v-spacer>
            <v-btn
                :loading="isUpdating"
                color="blue-grey darken-3"
                depressed
                @click="updateMyInfo"
            >
                <v-icon left>mdi-update</v-icon>
                {{$t('m.profile.update_button')}}
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    import { EventBus } from '../event-bus.js';
    export default {
        data () {
            return {
                autoUpdate: true,
                isUpdating: false,
                profile:{
                    username:'',
                    nickname:'',
                    introduction: '',
                }
            }
        },
        methods: {
            updateMyInfo(){
                this.isUpdating = true;
                console.log(this.profile.password_origin);
                this.$store.dispatch('updateMyInfo',{
                    username:this.profile.username,
                    nickname:this.profile.nickname,
                    introduction: this.profile.introduction
                });
                this.$watch(this.$store.getters.getUpdateMyInfoStatus, function () {
                    if (this.$store.getters.getUpdateMyInfoStatus() === 2) {
                        EventBus.$emit('open-message', {
                            text: this.$t('m.profile.update_success')
                        });
                        this.$store.dispatch('getMyInfo');
                        this.isUpdating = false;
                    }
                    if (this.$store.getters.getUpdateMyInfoStatus() === 3) {
                        EventBus.$emit('open-message', {
                            text: this.$store.getters.getUpdateMyInfoErrors
                        });
                        this.isUpdating = false;
                    }
                });
            }
        },
        computed:{
            user(){
                return this.$store.getters.getMyInfo;
            },
        },
        created() {
            var my_info = this.$store.getters.getMyInfo;
            this.profile.nickname = my_info.nickname;
            this.profile.username = my_info.username;
            this.profile.introduction = my_info.introduction;
        }
    }
</script>
