<template>
    <v-container>
        <v-card
            outlined
            tile
        >
            <v-card-title>开发日志</v-card-title>
            <v-divider class="mx-4"></v-divider>
            <v-card-text>
                <div class="font-weight-bold ml-8 mb-2">
                    今天
                </div>

                <v-timeline
                    align-top
                    dense
                >
                    <v-timeline-item
                        v-for="message in app_config.logs"
                        :key="message.time"
                        :color="message.color"
                        small
                    >
                        <div>
                            <div class="font-weight-normal">
                                <strong>{{ message.from }}</strong> @{{ message.time }}
                            </div>
                            <div>{{ message.message }}</div>
                        </div>
                    </v-timeline-item>
                </v-timeline>
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
