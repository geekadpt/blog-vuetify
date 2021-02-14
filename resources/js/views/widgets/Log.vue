<template>
    <v-container>
        <v-card
            outlined
            tile
            height="350"
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
                        v-for="message in messages"
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
            messages: [
                {
                    from: '洛辛',
                    message: '新增日志卡片部件',
                    time: '5:42pm',
                    color: 'blue lighten-1',
                },
                {
                    from: '洛寻',
                    message: '新增网站介绍卡片部件',
                    time: '3:07pm',
                    color: 'green',
                },
                {
                    from: 'Locyin',
                    message: '搜索文章',
                    time: '9:47am',
                    color: 'deep-purple lighten-1',
                },
            ],
        }),
    }
</script>
