<template>

        <!-- Stack the columns on mobile by making one full-width and the other half-width -->
        <v-row class="px-md-4" dense>

            <v-col
                cols="12"
                md="9"
            >
                <v-card
                    color="grey"
                    dark
                >
                    <div class="d-flex flex-no-wrap justify-space-between">
                        <div>
                            <v-card-title
                                class="headline"
                                v-text="item.title"
                            ></v-card-title>

                            <v-card-subtitle v-text="item.artist"></v-card-subtitle>

                            <v-card-actions>
                                <v-btn
                                    v-if="item.artist === 'Ellie Goulding'"
                                    class="ml-2 mt-3"
                                    fab
                                    icon
                                    height="40px"
                                    right
                                    width="40px"
                                >
                                    <v-icon>mdi-play</v-icon>
                                </v-btn>

                                <v-btn
                                    v-else
                                    class="ml-2 mt-5"
                                    outlined
                                    rounded
                                    small
                                >
                                    START RADIO
                                </v-btn>
                            </v-card-actions>
                        </div>

                        <v-avatar
                            class="ma-3"
                            size="125"
                            tile
                        >
                            <v-img :src="item.src"></v-img>
                        </v-avatar>
                    </div>
                </v-card>
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
