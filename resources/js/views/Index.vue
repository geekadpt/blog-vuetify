<template>
        <v-row class="px-md-12"
               dense
               ref="index"
        >
            <v-col
                cols="12"
                md="9"
                class="scroll-anchor"
            >
                <template>
                    <div v-for="(item, i) in articles"
                         :key="i"
                    >
                    <v-card  class="my-4">
                            <v-row dense>
                                    <v-col
                                        cols="12"
                                        class="hidden-md-only col-md-4 ma-0 pa-0"
                                    >


                                        <v-img
                                            :src="item.thumb+item.id"
                                            lazy-src="https://picsum.photos/10/6?image=20"
                                            aspect-ratio="1"
                                            class="grey lighten-2 align-end white--text"
                                            max-height="250"
                                        >
                                            <v-card-title class="hidden-md-and-up">
                                                <div class="text-one-line">
                                                    {{item.title}}
                                                </div>
                                            </v-card-title>
                                            <template v-slot:placeholder>
                                                <v-row
                                                    class="fill-height ma-0"
                                                    align="center"
                                                    justify="center"
                                                >
                                                    <v-progress-circular
                                                        indeterminate
                                                        color="grey lighten-5"
                                                    ></v-progress-circular>
                                                </v-row>
                                            </template>
                                        </v-img>
<!--                                        <v-img-->
<!--                                            class="white&#45;&#45;text align-end"-->
<!--                                            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"-->
<!--                                        >-->
<!--                                            <v-card-title class="hidden-md-and-up">-->
<!--                                                <div class="text-one-line">-->
<!--                                                    Top 10 Australian beaches-->
<!--                                                </div>-->
<!--                                            </v-card-title>-->
<!--                                        </v-img>-->
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        class="col-md-8"
                                    >
                                        <router-link tag="span" :to="{name:'文章详情',params: {id:item.id}}"   >
                                        <v-card-title>
                                            <v-icon
                                                large
                                                left
                                            >
                                                mdi-twitter
                                            </v-icon>
                                            <span class="title font-weight-light text-one-line">{{item.title}}</span>
                                        </v-card-title>

                                        <v-card-text>
                                            <div
                                            >
                                                <v-icon> mdi-folder </v-icon>
                                                    <v-chip
                                                        class="ma-1"
                                                        small
                                                    >
                                                    {{item.category.name}}
                                                    </v-chip>
                                                <span class="mr-1">·</span>
                                                <v-icon> mdi-tag-multiple </v-icon>
                                                <v-chip
                                                    class="ma-1"
                                                    small
                                                >
                                                    small chip
                                                </v-chip>
                                            </div>
                                            <div class="text-justify text-two-line mt-2" >
                                                {{item.excerpt}}
                                            </div>
                                        </v-card-text>
                                        </router-link>
                                        <v-card-actions>
                                            <v-list-item class="grow">
                                                <v-list-item-avatar color="grey darken-3">
                                                    <v-img
                                                        class="elevation-6"
                                                        alt=""
                                                        :src="item.user.avatar"
                                                    ></v-img>
                                                </v-list-item-avatar>

                                                <v-list-item-content>
                                                    <v-list-item-title>{{item.user.nickname}}</v-list-item-title>
                                                </v-list-item-content>

                                                <v-row
                                                    align="center"
                                                    justify="end"
                                                >
                                                    <v-icon class="mr-1">
                                                        mdi-clock
                                                    </v-icon>
                                                    <span class="subheading mr-2">{{item.created_at}}</span>
<!--                                                    <span class="mr-1">·</span>-->
<!--                                                    <v-icon class="mr-1">-->
<!--                                                        mdi-share-variant-->
<!--                                                    </v-icon>-->
<!--                                                    <span class="subheading">45</span>-->
                                                </v-row>
                                            </v-list-item>
                                        </v-card-actions>
                                    </v-col>
                            </v-row>
                    </v-card>
                    </div>
                    <div
                         v-if="nomore"
                         align="center"
                         justify="center"
                    >
                            <v-icon
                                large
                                left
                            >
                                mdi-twitter
                            </v-icon>
                            <span class="title font-weight-light text-one-line" >没有更多了!</span>
                    </div>
                    <v-card v-for="n in 10" v-if="skeleton_loader">
                        <v-skeleton-loader
                            class="my-4" max-height="300"
                            type="list-item-avatar, divider, list-item-three-line, card-heading, actions"
                        ></v-skeleton-loader>
                    </v-card>
                </template>
            </v-col>

            <v-col
                cols="12"
                md="3"
            >
                <v-card
                    class="my-4"
                    outlined
                    tile
                >
                    .col-12 .col-md-3
                </v-card>
            </v-col>
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
        </v-row>
</template>
<script>
    export default {
        name:'Index',
        data: () => ({
            offsetTop: 0,
            nomore:false,
            skeleton_loader:true
        }),
        methods: {
            addArticles (entries, observer) {
                // More information about these options
                // is located here: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
                if(this.$store.getters.getArticles == '')
                    return;
                if(this.$store.getters.getArticles.meta.current_page < this.$store.getters.getArticles.meta.last_page){
                    console.log(this.$store.getters.getArticles == '');
                    this.$store.dispatch('indexArticles',{
                        order:'hot',
                        page: this.$store.getters.getArticles.meta.current_page+1
                    });
                }else{
                    console.log('没有内容了！');
                    this.nomore = true;
                }
            },
            toTop(){
                this.$vuetify.goTo(this.$refs.index,{
                    duration: 300,
                    offset: 0,
                });
            },
        },
        computed:{
            articles(){
                return this.$store.getters.getArticles.data;
            },
        },
        created() {
            this.$store.dispatch('indexArticles',{
                order:'hot',
                page:1
            });
            this.$watch(
                function () { // 第一个函数就是处理你要监听的属性，只要将其return出去就行
                    return this.$store.getters.getArticlesLoadStatus();
                },
                function (old, valold) {
                    if(this.$store.getters.getArticlesLoadStatus() == 1){
                        this.skeleton_loader = true;
                    }else{
                        this.skeleton_loader = false;
                    }
                }
            )
        },
        mounted(){
            let _this = this;
            window.onscroll = function(){
                //变量scrollTop是滚动条滚动时，距离顶部的距离
                var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
                //变量windowHeight是可视区的高度
                var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
                //变量scrollHeight是滚动条的总高度
                var scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
                //滚动条到底部的条件
                if(scrollTop+windowHeight == scrollHeight){
                    //到了这个就可以进行业务逻辑加载后台数据了
                    _this.addArticles();
                }
            }
        },
    }
</script>
