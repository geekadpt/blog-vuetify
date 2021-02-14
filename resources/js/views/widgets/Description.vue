<template>
    <v-container>
        <v-card
            outlined
            tile
        >
            <v-img
                :src="app_config.img_api"
                :lazy-src="app_config.img_lazy_api"
                height="200px"
            ></v-img>
            <v-card-title>{{app_config.title}}</v-card-title>
            <v-divider class="mx-4"></v-divider>
            <v-card-text>
                <div>{{app_config.description}}</div>
            </v-card-text>
        </v-card>
    </v-container>
</template>
<script>
    export default {
        data: () => ({

        }),
        computed:{
            app_config(){
                return this.$store.getters.getApp;
            },
        },
    }
</script>
