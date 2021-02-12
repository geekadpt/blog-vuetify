<template>
    <v-app>
        <v-main>
            <v-container
                class="fill-height"
                fluid
            >
                <v-row
                    align="center"
                    justify="center"
                >
                    <template>
                        <v-card
                            class="col-md-4 col-12"
                            max-width="500"
                        >
                            <v-card-title class="title font-weight-regular justify-space-between">
                                <span>{{ currentTitle }}</span>
                                <v-avatar
                                    color="primary lighten-2"
                                    class="subheading white--text"
                                    size="24"
                                    v-text="step"
                                ></v-avatar>
                            </v-card-title>

                            <v-window v-model="step">
                                <v-window-item :value="1">
                                    <v-card-text>
                                        <v-text-field
                                            :label="$t('m.register.phone')"
                                            value=""
                                            v-model="registerForm.phone"
                                        ></v-text-field>
                                        <span class="caption grey--text text--darken-1">
                {{$t('m.register.explainPage1')}}
              </span>
                                    </v-card-text>
                                </v-window-item>
                                <v-window-item :value="2">
                                    <v-card-text>
                                        <v-img
                                            lazy-src="https://picsum.photos/id/11/10/6"
                                            max-height="50"
                                            max-width="150"
                                            :src="captcha"
                                        ></v-img>
                                        <v-text-field
                                            :label="$t('m.register.captcha')"
                                            type="password"
                                            v-model="registerForm.captcha"
                                        ></v-text-field>
                                        <span class="caption grey--text text--darken-1">
                {{$t('m.register.explainPage2')}}
              </span>
                                    </v-card-text>
                                </v-window-item>
                                <v-window-item :value="3">
                                    <v-card-text>
                                        <v-text-field
                                            :label="$t('m.register.code')"
                                            type="text"
                                            v-model="registerForm.verificationCode"
                                        ></v-text-field>
                                        <v-text-field
                                            :label="$t('m.register.username')"
                                            type="text"
                                            v-model="registerForm.username"
                                        ></v-text-field>
                                        <v-text-field
                                            :label="$t('m.register.password')"
                                            type="password"
                                            v-model="registerForm.password"
                                        ></v-text-field>
                                        <span class="caption grey--text text--darken-1">
                {{$t('m.register.explainPage3')}}
              </span>
                                    </v-card-text>
                                </v-window-item>
                                <v-window-item :value="4">
                                    <v-text-field
                                        style="visibility: hidden;height: 1px"
                                    ></v-text-field>
                                    <div class="pa-4 text-center">
                                        <v-img
                                            class="mb-4"
                                            contain
                                            height="128"
                                            src="https://cdn.vuetifyjs.com/images/logos/v.svg"
                                        ></v-img>
                                        <h3 class="title font-weight-light mb-2">Welcome to {{app.title}}</h3>
                                        <span class="caption grey--text text--darken-1">{{$t('m.register.explainPage4')}}</span>
                                    </div>
                                </v-window-item>
                            </v-window>

                            <v-divider></v-divider>

                            <v-card-actions>
                                <router-link :to="{ name:'登录' }">
                                    <v-btn
                                        v-show = "step === 1"
                                        color="primary"
                                        depressed
                                    >
                                        {{$t('m.register.login')}}
                                    </v-btn>
                                </router-link>
                                <v-btn
                                    :disabled="step !== 2"
                                    v-show = "step !== 1"
                                    text
                                    @click="--step"
                                >
                                    {{$t('m.register.previous')}}
                                </v-btn>
                                <v-spacer></v-spacer>
                                <v-btn
                                    :disabled="step === 4"
                                    v-show = "step !== 4"
                                    color="primary"
                                    depressed
                                    @click="next"
                                >
                                    {{$t('m.register.next')}}
                                </v-btn>
                                <router-link :to="{ name:'登录' }">
                                    <v-btn
                                        v-show = "step === 4"
                                        color="primary"
                                        depressed
                                    >
                                        {{$t('m.register.login')}}
                                    </v-btn>
                                </router-link>
                            </v-card-actions>
                        </v-card>
                    </template>
                </v-row>
            </v-container>
        </v-main>
        <notification></notification>
    </v-app>
</template>
<script>
    import { EventBus } from '../event-bus.js';
    import Notification from "../components/Notification";

    export default {
        components: {Notification},
        name: 'Reg',
        data: () => ({
            step: 1,
            registerForm:{
                phone: '',
                captcha:'',
                verificationCode: '',
                username:'',
                password:''
            }
        }),

        computed: {
            currentTitle () {
                switch (this.step) {
                    case 1: return this.$t('m.register.titlePage1');
                    case 2: return this.$t('m.register.titlePage2');
                    case 3: return this.$t('m.register.titlePage3');
                    case 4: return this.$t('m.register.titlePage4');
                }
            },
            captcha(){
                return  this.$store.getters.getCaptcha
            },
            app(){
                return this.$store.getters.getApp;
            },
        },
        methods:{
            next(){
                switch (this.step) {
                    case 1:
                        this.$store.dispatch('sendCaptchas',{
                            phone: this.registerForm.phone,
                        });
                        this.$watch(this.$store.getters.getCaptchasSendStatus, function () {
                            if (this.$store.getters.getCaptchasSendStatus() === 2) {
                                if(this.step === 1){
                                    ++this.step;
                                }
                            }
                            if (this.$store.getters.getCaptchasSendStatus() === 3) {
                                EventBus.$emit('open-message', {
                                    text: this.$store.getters.getCaptchasSendErrors
                                });
                            }
                        });
                        break;
                    case 2:
                        this.$store.dispatch('sendVerificationCodes', {
                            captcha_code:this.registerForm.captcha,
                            captcha_key:this.$store.getters.getCaptchaKey,
                        });
                        this.$watch(this.$store.getters.getVerificationCodesSendStatus, function () {
                            if (this.$store.getters.getVerificationCodesSendStatus() === 2) {
                                EventBus.$emit('open-message', {
                                    text: this.$t('m.register.codeSended')
                                });
                                if(this.step === 2){
                                    ++this.step;
                                }
                            }
                            if (this.$store.getters.getVerificationCodesSendStatus() === 3) {
                                EventBus.$emit('open-message', {
                                    text: this.$store.getters.getVerificationCodesSendErrors
                                });
                            }
                        });
                        break;
                    case 3:
                        this.$store.dispatch('register',{
                            username:this.registerForm.username,
                            password:this.registerForm.password,
                            verification_key: this.$store.getters.getVerificationKey,
                            verification_code:this.registerForm.verificationCode,
                        });
                        this.$watch(this.$store.getters.getRegisterStatus, function () {
                            if (this.$store.getters.getRegisterStatus() === 2) {
                                if(this.step === 3){
                                    ++this.step;
                                }
                            }
                            if (this.$store.getters.getRegisterStatus() === 3) {
                                EventBus.$emit('open-message', {
                                    text: this.$store.getters.getRegisterErrors
                                });
                            }
                        });
                        break;
                    case 4:
                        break;
                    default:
                        break;
                }
            }
        }
    }
</script>
