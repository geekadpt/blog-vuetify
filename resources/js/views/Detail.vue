<template>
    <v-container>
        <v-row justify="space-around">
            <v-card>
                <v-img
                    height="250px"
                    src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
                >
                    <v-row
                        class=" ma-0"
                        align="center"
                        justify="center"
                    >
                        <span  class="white--text mt-8">
                            John Doe John DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn Doe
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
                                src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
                            >
                        </v-avatar>
                        <span class="mx-3">
                            John Doe
                        </span>

                        <span class="mr-1">·</span>
                        <v-icon>mdi-book-open-blank-variant  </v-icon>
                        <span class="subheading mr-2">本文共100次阅读</span>



                        <span class="mr-1">·</span>
                        <v-icon class="mr-1">
                            mdi-calendar-month
                        </v-icon>
                        <span class="subheading mr-2">2021-2-12</span>


                    </v-row>
                </v-img>

                <template>
                    <v-md-editor
                        mode="preview"
                        v-model="text"
                        height="500px"
                        :disabled-menus="[]"
                        @upload-image="handleUploadImage"
                    />
                </template>

            </v-card>
        </v-row>
    </v-container>
</template>
<script>
    export default {
        data: () => ({
            text: '',
            messages: [
                {
                    from: 'You',
                    message: `Sure, I'll see you later.`,
                    time: '10:42am',
                    color: 'deep-purple lighten-1',
                },
                {
                    from: 'John Doe',
                    message: 'Yeah, sure. Does 1:00pm work?',
                    time: '10:37am',
                    color: 'green',
                },
                {
                    from: 'You',
                    message: 'Did you still want to grab lunch today?',
                    time: '9:47am',
                    color: 'deep-purple lighten-1',
                },
            ],
        }),
        methods: {
            handleUploadImage(event, insertImage, files) {
                // Get the files and upload them to the file server, then insert the corresponding content into the editor
                console.log(files);

                // Here is just an example
                insertImage({
                    url:
                        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1269952892,3525182336&fm=26&gp=0.jpg',
                    desc: 'desc',
                    // width: 'auto',
                    // height: 'auto',
                });
            },
        },
    }
</script>
