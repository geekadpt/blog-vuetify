<template>
    <v-container ref="detail">
        <v-row justify="space-around">
            <v-card width="100%">
                <v-img
                    height="250px"
                    :src="article.thumb"
                >
                    <v-row
                        class=" ma-0"
                        align="center"
                        justify="center"
                    >
                        <span  class="white--text mt-8">
                            {{article.title}}
                        </span>
                    </v-row>
                    <v-row
                            class="white--text mt-8"
                            align="center"
                            justify="center"
                    >
                        <v-avatar size="30">
                            <img
                                alt="user"
                                :src="article.user.avatar"
                            >
                        </v-avatar>
                        <span class="mx-3">
                            {{article.user.nickname}}
                        </span>

                        <span class="mr-1">·</span>
                        <v-icon>mdi-book-open-blank-variant  </v-icon>
                        <span class="subheading mr-2">{{article.view_count}}</span>



                        <span class="mr-1">·</span>
                        <v-icon class="mr-1">
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
        </v-row>
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
    </v-container>
</template>
<script>
    export default {
        data: () => ({
        }),
        created() {
            // this.$store.dispatch('patchUpdateViewCount',{
            //     art_id:this.$route.params.art_id
            // });
            this.$store.dispatch('loadArticle',{
                id : this.$route.params.id
            });
        },
        computed:{
            article(){
                return this.$store.getters.getArticle;
            },
        },
        methods:{
            toTop(){
                this.$vuetify.goTo(this.$refs.detail,{
                    duration: 300,
                    offset: 0,
                });
            },
        }
    }
</script>
