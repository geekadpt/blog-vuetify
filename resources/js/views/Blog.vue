<template>
    <v-container>
        <v-row ref="index">
            <v-col
                cols="12"
                md="9"
            >
                <template>
                    <v-container>
                        <v-row v-for="(item, i) in articles"
                               :key="i">
                            <v-col
                                cols="12"
                                class="col-md-4 px-0"
                            >
                                <template>
                                    <v-hover>
                                        <template v-slot:default="{ hover }">
                                            <v-card
                                                class="ma-0 pa-0"
                                            >
                                                <v-img
                                                    :src="app_config.img_api+'?'+item.id"
                                                    :lazy-src="app_config.img_lazy_api"
                                                    aspect-ratio="1"
                                                    class="grey lighten-2 align-end white--text"
                                                    height="245"
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
                                                        </v-row>>
                                                    </template>
                                                </v-img>
                                                <v-fade-transition>
                                                    <v-overlay
                                                        v-if="hover"
                                                        absolute
                                                        color="#036358"
                                                    >
                                                        <router-link tag="span" :to="{name:'文章详情',params: {id:item.id}}"   >
                                                            <v-btn>查看文章</v-btn>
                                                        </router-link>
                                                    </v-overlay>
                                                </v-fade-transition>
                                            </v-card>
                                        </template>
                                    </v-hover>
                                </template>
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
                                class="col-md-8 px-0"
                            >
                                <v-card  class="pa-0 ma-0" height="245">
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
                                        <v-divider></v-divider>
                                    </router-link>
                                    <v-card-text>
                                        <div
                                        >
                                            <v-icon> mdi-folder-multiple </v-icon>
                                            <v-chip
                                                class="ma-1"
                                                small
                                                @click="jumpCategory(item.category_id)"
                                            >
                                                {{item.category[0]}}
                                            </v-chip>
                                            <span class="mr-1">·</span>
                                            <v-icon> mdi-tag-multiple </v-icon>
                                            <span
                                                v-for="tag in item.tag"
                                            >
                                                        <v-chip
                                                            class="ma-1"
                                                            small
                                                            :color="tag.color"
                                                            @click="jumpTag(tag.id)"
                                                        >
                                                            {{tag.name}}
                                                        </v-chip>
                                                    </span>
                                        </div>
                                        <div class="text-justify text-two-line mt-2" >
                                            {{item.excerpt}}
                                        </div>
                                    </v-card-text>
                                    <v-spacer></v-spacer>
                                    <v-card-actions>
                                        <v-list-item class="grow px-2">
                                            <template>
                                                <div>
                                                    <v-menu
                                                        transition="scale-transition"
                                                        bottom
                                                        open-on-hover
                                                        :close-on-content-click="false"
                                                        :nudge-width="200"
                                                    >
                                                        <template v-slot:activator="{ on, attrs }">
                                                            <v-list-item-avatar color="grey"  v-bind="attrs"
                                                                                v-on="on">
                                                                <span v-if="!item.user.avatar" class="text--darken-1 headline ">{{item.user.nickname.substr(0,1)}}</span>
                                                                <v-img
                                                                    class="elevation-6"
                                                                    :alt="item.user.nickname.substr(0,1)"
                                                                    :src="item.user.avatar"
                                                                    v-if="item.user.avatar"
                                                                ></v-img>
                                                            </v-list-item-avatar>
                                                        </template>
                                                        <v-card>
                                                            <v-list>
                                                                <v-list-item>
                                                                    <v-list-item-avatar  color="grey">
                                                                        <span v-if="!item.user.avatar" class="text--darken-1 headline ">{{item.user.username.substr(0,1)}}</span>
                                                                        <v-img
                                                                            class="elevation-6"
                                                                            :alt="item.user.username.substr(0,1)"
                                                                            :src="item.user.avatar"
                                                                            v-if="item.user.avatar"
                                                                        ></v-img>
                                                                    </v-list-item-avatar>

                                                                    <v-list-item-content>
                                                                        <v-list-item-title>{{item.user.nickname}}</v-list-item-title>
                                                                        <v-list-item-subtitle class="text-one-line">{{item.user.introduction}}</v-list-item-subtitle>
                                                                    </v-list-item-content>

                                                                    <v-list-item-action>
                                                                        <v-btn
                                                                            :class="fav ? 'red--text' : ''"
                                                                            icon
                                                                            @click="fav = !fav"
                                                                        >
                                                                            <v-icon>mdi-heart</v-icon>
                                                                        </v-btn>
                                                                    </v-list-item-action>
                                                                </v-list-item>
                                                            </v-list>

                                                            <v-divider></v-divider>
                                                            <v-rating v-model="rating" class="mx-3">
                                                                <template v-slot:item="props">
                                                                    <v-icon
                                                                        :color="props.isFilled ? genColor(props.index) : 'grey lighten-1'"
                                                                        large
                                                                        @click="props.click"
                                                                    >
                                                                        {{ props.isFilled ? 'mdi-star-circle' : 'mdi-star-circle-outline' }}
                                                                    </v-icon>
                                                                </template>
                                                            </v-rating>
                                                            <!--                                                                    <v-list>-->
                                                            <!--                                                                        <v-list-item>-->
                                                            <!--                                                                            <v-list-item-action>-->
                                                            <!--                                                                                <v-switch-->
                                                            <!--                                                                                    v-model="message"-->
                                                            <!--                                                                                    color="purple"-->
                                                            <!--                                                                                ></v-switch>-->
                                                            <!--                                                                            </v-list-item-action>-->
                                                            <!--                                                                            <v-list-item-title>Enable messages</v-list-item-title>-->
                                                            <!--                                                                        </v-list-item>-->

                                                            <!--                                                                        <v-list-item>-->
                                                            <!--                                                                            <v-list-item-action>-->
                                                            <!--                                                                                <v-switch-->
                                                            <!--                                                                                    v-model="hints"-->
                                                            <!--                                                                                    color="purple"-->
                                                            <!--                                                                                ></v-switch>-->
                                                            <!--                                                                            </v-list-item-action>-->
                                                            <!--                                                                            <v-list-item-title>Enable hints</v-list-item-title>-->
                                                            <!--                                                                        </v-list-item>-->
                                                            <!--                                                                    </v-list>-->
                                                            <v-card-actions class="d-flex justify-space-between">
                                                                <v-btn
                                                                    text
                                                                >
                                                                    关注
                                                                </v-btn>
                                                                <v-btn
                                                                    color="primary"
                                                                    text
                                                                    @click="menu = false"
                                                                >
                                                                    查看主页
                                                                </v-btn>
                                                            </v-card-actions>
                                                        </v-card>
                                                    </v-menu>
                                                </div>
                                            </template>
                                            <v-list-item-content>
                                                <v-list-item-title>{{item.user.nickname}}</v-list-item-title>
                                            </v-list-item-content>
                                            <v-spacer></v-spacer>
                                            <div style="position: absolute;right: 0">
                                                <v-icon class="mr-1">
                                                    mdi-clock
                                                </v-icon>
                                                <span class="subheading mr-2">{{item.created_at}}</span>
                                                <!--                                                    <span class="mr-1">·</span>-->
                                                <!--                                                    <v-icon class="mr-1">-->
                                                <!--                                                        mdi-share-variant-->
                                                <!--                                                    </v-icon>-->
                                                <!--                                                    <span class="subheading">45</span>-->
                                            </div>
                                        </v-list-item>
                                    </v-card-actions>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-container>
                    <div
                         v-if="nomore"
                    >
                        <v-alert
                            color="cyan"
                            border="left"
                            elevation="2"
                            colored-border
                            icon="mdi-twitter"
                        >
                            很高兴你翻到这里，但是真的没有了...
                        </v-alert>
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
<!--                <v-card-->
<!--                    class="my-4"-->
<!--                    outlined-->
<!--                    tile-->
<!--                >-->
<!--                    <default-tag-cloud/>-->
<!--                </v-card>-->
                <default-description/>
                <default-tag-cloud-all/>
                <default-log/>
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
    </v-container>
</template>
<script>
    export default {
        name:'Blog',
        components: {
            DefaultTagCloud: () => import(
                /* webpackChunkName: "default-tag-cloud" */
                './widgets/TagCloud'
                ),
            DefaultTagCloudAll: () => import(
                /* webpackChunkName: "default-tag-clouds" */
                './widgets/TagCloudAll'
                ),
            DefaultDescription: () => import(
                /* webpackChunkName: "default-app" */
                './widgets/Description'
                ),
            DefaultLog: () => import(
                /* webpackChunkName: "default-app" */
                './widgets/Log'
                ),
        },

        data: () => ({
            offsetTop: 0,
            skeleton_loader:false,

            fav: true,
            menu: false,
            message: false,
            hints: true,

            colors: ['green', 'purple', 'orange', 'indigo', 'red'],
            rating: 4.5,
        }),
        methods: {
            genColor (i) {
                return this.colors[i]
            },
            jumpTag(id){
                this.$router.push({path:'/tags/'+id+'/blog'});
            },
            jumpCategory(id){
                this.$router.push({path:'/categories/'+id+'/blog'});
            },
            addArticles () {
                this.skeleton_loader = true;
                if(this.$store.getters.getArticles == ''){
                    this.skeleton_loader = false;
                    return;
                }
                if(this.$store.getters.getArticles.meta.current_page < this.$store.getters.getArticles.meta.last_page){
                    if(this.$route.params.tag_id){
                        this.$store.dispatch('indexTagArticles',{
                            tag:this.$route.params.tag_id,
                            order:'hot',
                            page: this.$store.getters.getArticles.meta.current_page+1
                        });
                    }else if(this.$route.params.category_id){
                        this.$store.dispatch('indexCategoryArticles',{
                            category : this.$route.params.category_id,
                            order:'hot',
                            page: this.$store.getters.getArticles.meta.current_page+1
                        });
                    }else if(this.$route.params.blog_search){
                        this.$store.dispatch('indexCategoryArticles',{
                            search : this.$route.params.blog_search,
                            page: this.$store.getters.getArticles.meta.current_page+1
                        });
                    }
                    else{
                        this.$store.dispatch('indexArticles',{
                            order:'hot',
                            page: this.$store.getters.getArticles.meta.current_page+1
                        });
                    }
                }else{
                    this.skeleton_loader = false;
                    console.log('没有内容了！');
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
            nomore(){
                if(this.$store.getters.getArticles){
                    return (!(this.$store.getters.getArticles.meta.current_page < this.$store.getters.getArticles.meta.last_page));
                }else{
                    return true;
                }
            },
            articles(){
                return this.$store.getters.getArticles.data;
            },
            app_config(){
                return this.$store.getters.getApp;
            }
        },
        created() {
            this.$store.dispatch('openOverlay');
            this.skeleton_loader = true;
            this.$watch(
                function () { // 第一个函数就是处理你要监听的属性，只要将其return出去就行
                    return this.$store.getters.getArticlesLoadStatus();
                },
                function (old, valold) {
                    if(this.$store.getters.getArticlesLoadStatus() == 2){
                        this.$nextTick(function(){
                            this.skeleton_loader = false;
                            /*现在数据已经渲染完毕*/
                            this.$store.dispatch('closeOverlay');
                        })
                    }
                }
            )
            this.$store.dispatch('initArticlesStatus');
            if(this.$route.params.tag_id){
                this.$store.dispatch('indexTagArticles',{
                    tag:this.$route.params.tag_id,
                    order:'hot',
                    page:1
                });
            }else if(this.$route.params.category_id){
                this.$store.dispatch('indexCategoryArticles',{
                    category : this.$route.params.category_id,
                    order:'hot',
                    page:1
                });
            }
            else if(this.$route.params.blog_search){
                this.$store.dispatch('searchArticles',{
                    search : this.$route.params.blog_search,
                });
            }
            else{
                console.log('this.$store.getters.getArticles');
                this.$store.dispatch('indexArticles',{
                    order:'hot',
                    page:1
                });
            }
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
