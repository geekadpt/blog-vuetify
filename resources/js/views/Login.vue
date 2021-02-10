<template>
    <div
        :style="{'background-image': 'url(' + require('../assets/register_bg_2.png') + ')'}"
    >
        <main>
            <section class="absolute w-full h-full">
                <div
                    class="absolute top-0 w-full h-full bg-gray-900"
                    style="background-size: 100%; background-repeat: no-repeat;"
                    :style="{'background-image': 'url(' + require('../assets/register_bg_2.png') + ')'}"
                ></div>
                <div class="container mx-auto px-4 h-full">
                    <div class="flex content-center items-center justify-center h-full">
                        <div class="w-full lg:w-4/12 px-4">
                            <div
                                class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0"
                            >
                                <div class="rounded-t mb-0 px-6 py-6">
                                    <div class="text-center mb-3">
                                        <h6 class="text-gray-600 text-sm font-bold">
                                            {{$t('m.login.oauth')}}
                                        </h6>
                                    </div>
                                    <div class="btn-wrapper text-center">
                                        <a href="/auth/github">
                                            <button
                                                class="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                                                type="button"
                                                style="transition: all 0.15s ease 0s;"
                                            >

                                                <img
                                                    alt="..."
                                                    class="w-5 mr-1"
                                                    src="../assets/github.svg"
                                                />Github</button
                                            >
                                        </a>
                                        <a href="/auth/weibo">
                                            <button
                                                class="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                                                type="button"
                                                style="transition: all 0.15s ease 0s;"
                                            >
                                                <img
                                                    alt="..."
                                                    class="w-5 mr-1"
                                                    src="../assets/weibo.png"
                                                />{{$t('m.login.weibo')}}
                                            </button>
                                        </a>
                                    </div>
                                    <hr class="mt-6 border-b-1 border-gray-400" />
                                </div>
                                <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                                    <div class="text-gray-500 text-center mb-3 font-bold">
                                        <small>{{$t('m.login.credential')}}</small>
                                    </div>
                                    <form>
                                        <div class="relative w-full mb-3">
                                            <label
                                                class="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                for="grid-password"
                                            >{{$t('m.login.phone')}}</label
                                            ><input
                                            type="text"
                                            class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                                            :placeholder="$t('m.login.phone')"
                                            style="transition: all 0.15s ease 0s;"
                                            v-model="loginForm.username"
                                        />
                                        </div>
                                        <div class="relative w-full mb-3">
                                            <label
                                                class="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                for="grid-password"
                                            >{{$t('m.login.password')}}</label
                                            ><input
                                            type="password"
                                            class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                                            :placeholder="$t('m.login.password')"
                                            style="transition: all 0.15s ease 0s;"
                                            v-model="loginForm.password"
                                        />
                                        </div>
                                        <div>
                                            <label class="inline-flex items-center cursor-pointer"
                                            ><input
                                                id="customCheckLogin"
                                                type="checkbox"
                                                class="form-checkbox text-gray-800 ml-1 w-5 h-5"
                                                style="transition: all 0.15s ease 0s;"
                                            /><span class="ml-2 text-sm font-semibold text-gray-700"
                                            >{{$t('m.login.remember')}}</span
                                            ></label
                                            >
                                        </div>
                                        <div class="text-center mt-6">
                                            <button
                                                class="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                                                type="button"
                                                style="transition: all 0.15s ease 0s;"
                                                @click="login"
                                            >
                                                {{$t('m.login.login')}}
                                            </button>
                                        </div>
                                    </form>
                                    <div class="flex flex-wrap mt-6">
                                        <div class="w-1/2">
                                            <a href="#pablo" class="text-gray-300"
                                            ><small>{{$t('m.login.forgot')}}</small></a
                                            >
                                        </div>
                                        <router-link :to="{ name:'Register' }"  tag="span" class="w-1/2 text-right">
                                            <a href="#pablo" class="text-gray-300"
                                            ><small>{{$t('m.login.register')}}</small></a
                                            >
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>
<script>
    import { EventBus } from '../event-bus.js';
    export default {
        data: () => ({
            loginForm:{
                username:'',
                password:'',
            }
        }),
        methods:{
            login(){
                this.$store.dispatch('login', {
                    username: this.loginForm.username,
                    password: this.loginForm.password,
                });
                this.$watch(this.$store.getters.getLoginStatus, function () {
                    if (this.$store.getters.getLoginStatus() === 2) {
                        this.$store.dispatch('getMyInfo');
                        this.$watch(this.$store.getters.getMyInfoStatus, function () {
                            if (this.$store.getters.getMyInfoStatus() === 2) {
                                this.$router.push({name:'Desktop'});
                            }
                            if (this.$store.getters.getMyInfoStatus() === 3) {
                                EventBus.$emit('open-message', {
                                    text: this.$store.getters.getLoginErrors
                                });
                            }
                        });

                    }
                    if (this.$store.getters.getLoginStatus() === 3) {
                        EventBus.$emit('open-message', {
                            text: this.$store.getters.getLoginErrors
                        });
                    }
                });
            }
        }
    }
</script>
