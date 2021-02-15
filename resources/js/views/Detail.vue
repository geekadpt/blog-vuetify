<template>
    <v-container>
        <v-row ref="detail" >
            <v-col cols="12">
                <v-card>
                    <v-img
                        height="250px"
                        :src="app_config.img_api+'?'+article.id"
                        :lazy-src="app_config.img_lazy_api"
                    >
                        <v-row
                            class=" ma-0"
                            align="center"
                            justify="center"
                        >
                            <h2 class="white--text mt-8">
                                {{article.title}}
                            </h2>
                        </v-row>
                        <v-row
                            class="white--text mt-8"
                            align="center"
                            justify="center"
                        >
                            <v-avatar size="30" color="grey">
                                <span v-if="!article.user.avatar" class="text--darken-1 headline ">{{article.user.username.substr(0,1)}}</span>
                                <v-img
                                    class="elevation-6"
                                    :alt="article.user.username.substr(0,1)"
                                    :src="article.user.avatar"
                                    v-if="article.user.avatar"
                                ></v-img>
                            </v-avatar>
                            <span class="mx-3">
                            {{article.user.username}}
                        </span>

                            <span class="mr-1">·</span>
                            <v-icon right
                                    dark
                            >mdi-book-open-blank-variant  </v-icon>
                            <span class="subheading mr-2">本文共{{article.view_count}}次阅读</span>



                            <span class="mr-1">·</span>
                            <v-icon right
                                    dark class="mr-1">
                                mdi-calendar-month
                            </v-icon>
                            <span class="subheading mr-2">{{article.created_at}}</span>


                        </v-row>
                    </v-img>

                    <template>
                        <v-md-editor
                            mode="preview"
                            v-model="article.body"
                            height="100%"
                            :disabled-menus="[]"
                        />
                    </template>
                </v-card>
                <v-fab-transition>
                    <v-btn
                        color="pink"
                        dark
                        fixed
                        bottom
                        right
                        fab
                        @click="toTop()"
                    >
                        <v-icon>mdi-chevron-up</v-icon>
                    </v-btn>
                </v-fab-transition>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
    export default {
        name:'Detail',
        created() {
            this.$store.dispatch('openOverlay');
            this.$watch(
                function () { // 第一个函数就是处理你要监听的属性，只要将其return出去就行
                    return this.$store.getters.getArticleLoadStatus();
                },
                function (old, valold) {
                    if(this.$store.getters.getArticleLoadStatus() == 2 ){
                        this.$nextTick(function(){
                            /*现在数据已经渲染完毕*/
                            this.$store.dispatch('closeOverlay');
                        })
                    }
                }
            )
            this.$store.dispatch('loadArticle',{
                id : this.$route.params.id
            });
        },
        computed:{
            article(){
                return this.$store.getters.getArticle;
            },
            app_config(){
                return this.$store.getters.getApp;
            },
        },
        methods:{
            toTop(){
                this.$vuetify.goTo(this.$refs.detail,{
                    duration: 300,
                    offset: 0,
                });
            },
        },destroyed() {
            this.$store.dispatch('initArticleStatus');
        },mounted() {
            this.$store.dispatch('patchUpdateViewCount',{
                id:this.$route.params.id
            });
        }
    }
</script>
