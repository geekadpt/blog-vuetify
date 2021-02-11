<template>

        <!-- Stack the columns on mobile by making one full-width and the other half-width -->
        <v-row class="px-md-12" dense>
            <v-col
                cols="12"
                md="9"
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
        </v-row>
</template>
<script>
    export default {
        name:'Index',
        data () {
            return {
                scroll:{},
                loading: false,
                infinite_box:{
                    maxHeight:'',
                    overflow: 'auto',
                },
                infinite_side:{
                    maxHeight:'',
                    overflow: 'auto',
                },
            }
        },
        computed:{
            articles(){
                return this.$store.getters.getArticles;
            },
        },
        created() {
            this.$store.dispatch('loadArticles',{
                order:'hot',
                page:1
            });
        }
    }
</script>
