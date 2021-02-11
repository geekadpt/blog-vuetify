<template>

        <!-- Stack the columns on mobile by making one full-width and the other half-width -->
        <v-row class="px-md-12" dense>
            <v-col
                cols="12"
                md="9"
            >
                <template>
                    <v-card>
                            <v-row dense>
                                    <v-col
                                        cols="12"
                                        class="hidden-md-only col-md-4 ma-0 pa-0"
                                    >
                                        <v-img
                                            src="https://picsum.photos/500/300?image=15"
                                            lazy-src="https://picsum.photos/10/6?image=20"
                                            aspect-ratio="1"
                                            class="grey lighten-2 align-end white--text"
                                            max-height="250"
                                        >
                                            <v-card-title class="hidden-md-and-up">
                                                <div class="text-one-line">
                                                    Top 10 Australian beaches
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
                                            <span class="title font-weight-light text-one-line">Article Tittle</span>
                                        </v-card-title>
                                        <v-card-text>
                                            <div>
                                                <v-icon> mdi-folder </v-icon>
                                                <v-chip
                                                    class="ma-1"
                                                    small
                                                >
                                                    small chip
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
                                                "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well.Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well.Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."
                                            </div>
                                        </v-card-text>

                                        <v-card-actions>
                                            <v-list-item class="grow">
                                                <v-list-item-avatar color="grey darken-3">
                                                    <v-img
                                                        class="elevation-6"
                                                        alt=""
                                                        src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                                                    ></v-img>
                                                </v-list-item-avatar>

                                                <v-list-item-content>
                                                    <v-list-item-title>Evan You</v-list-item-title>
                                                </v-list-item-content>

                                                <v-row
                                                    align="center"
                                                    justify="end"
                                                >
                                                    <v-icon class="mr-1">
                                                        mdi-clock
                                                    </v-icon>
                                                    <span class="subheading mr-2">2021-2-11</span>
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
                </template>
            </v-col>

            <v-col
                cols="12"
                md="3"
            >
                <v-card
                    class="pa-2"
                    outlined
                    tile
                >
                    .col-6 .col-md-4
                </v-card>
            </v-col>
        </v-row>
</template>
<script>
    export default {
        data: () => ({
            items: [
                {
                    color: '#1F7087',
                    src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
                    title: 'Supermodel',
                    artist: 'Foster the People',
                },
                {
                    color: '#952175',
                    src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
                    title: 'Halcyon Days',
                    artist: 'Ellie Goulding',
                },
            ],
        }),
    }
</script>
