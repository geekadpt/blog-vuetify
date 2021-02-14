<template>
    <v-container>
        <v-row>
        <v-col cols="12">
            <v-card
                color="blue-grey darken-1"
                :style="{backgroundImage: 'url('+ app_config.img_api +')', backgroundSize: 'cover',backgroundRepeat:'no-repeat'}"
                dark
                :loading="isUpdating"
                :height="height"
            >
                <template v-slot:progress>
                    <v-progress-linear
                        absolute
                        color="blue lighten-1"
                        height="4"
                        indeterminate
                    ></v-progress-linear>
                </template>
<!--                <v-img-->
<!--                    height="200"-->
<!--                    :src="app_config.img_api"-->
<!--                    :lazy-src="app_config.img_lazy_api"-->
<!--                >-->
                    <v-row
                    >
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
                                            <v-icon>mdi-folder-upload</v-icon>
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
                                <h2 class="headline">{{ user.nickname }}</h2>
                                <span class="text--lighten-1">{{ user.introduction }}</span>
                            </v-col>
                        </v-row>
                    </v-row>
                <v-form>
                    <v-container>
                        <v-row>
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
                            <v-col
                                cols="12"
                            >
                                <v-file-input
                                    v-model="profile.avatar"
                                    label="上传头像"
                                    multiple
                                    prepend-icon="mdi-image"
                                >
                                    <template v-slot:selection="{ text }">
                                        <v-chip
                                            small
                                            label
                                            color="primary"
                                        >
                                            {{ text }}
                                        </v-chip>
                                    </template>
                                </v-file-input>
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
        </v-col>
    </v-row>
    </v-container>
</template>

<script>
    import { EventBus } from '../event-bus.js';
    export default {
        data () {
            return {
                autoUpdate: true,
                isUpdating: false,
                profile:{
                    nickname:'',
                    introduction: '',
                    avatar:null,
                },
                height:window.innerHeight-82,
            }
        },
        methods: {
            updateMyInfo(){
                this.isUpdating = true;
                if(this.profile.avatar === null || this.profile.avatar.length === 0){
                    this.$store.dispatch('updateMyInfo',{
                        nickname:this.profile.nickname,
                        introduction: this.profile.introduction,
                        avatar:this.$store.getters.getUploadImage
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
                }else{
                    var formdata = new FormData();
                    formdata.append('file', this.profile.avatar[0]);
                    formdata.append('type', 'avatar');
                    this.$store.dispatch('uploadImage',formdata);
                    this.$watch(this.$store.getters.getUploadImageStatus, function () {
                        if (this.$store.getters.getUploadImageStatus()  === 2) {
                            this.$store.dispatch('updateMyInfo',{
                                nickname:this.profile.nickname,
                                introduction: this.profile.introduction,
                                avatar:this.$store.getters.getUploadImage
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
                            this.$store.dispatch('initUploadImageStatus');
                        }
                        if (this.$store.getters.getUploadImageStatus()  === 3) {
                            EventBus.$emit('open-message', {
                                text: this.$store.getters.getUploadImageErrors,
                                type: 'error'
                            });
                            this.profile.avatar = null;
                            this.isUpdating = false;
                            this.$store.dispatch('initArticlesPublishStatus');
                        }
                    });
                }
            }
        },
        computed:{
            user(){
                return this.$store.getters.getMyInfo;
            },
            app_config(){
                return this.$store.getters.getApp;
            },
        },
        created() {
            this.$store.dispatch('openOverlay');
            this.$watch(
                function () { // 第一个函数就是处理你要监听的属性，只要将其return出去就行
                    return this.$store.getters.getMyInfoStatus();
                },
                function (old, valold) {
                    if(this.$store.getters.getMyInfoStatus() == 2 ){
                        this.$nextTick(function(){
                            /*现在数据已经渲染完毕*/
                            this.$store.dispatch('closeOverlay');
                        })
                    }
                }
            )
            var my_info = this.$store.getters.getMyInfo;
            this.profile.nickname = my_info.nickname;
            this.profile.introduction = my_info.introduction;
        },mounted() {
            this.$store.dispatch('closeOverlay');
        }
    }
</script>
