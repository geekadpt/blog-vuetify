<template>
    <v-row justify="center">
        <v-dialog
            v-model="routerGuard"
            max-width="290"
        >
            <v-card>
                <v-card-title class="headline">
                    是否立刻重新登录？
                </v-card-title>

                <v-card-text>
                    身份验证信息已过期，请保存重要数据后重新登陆！
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                        color="green darken-1"
                        text
                        @click="close"
                    >
                        关闭
                    </v-btn>

                    <v-btn
                        color="green darken-1"
                        text
                        @click="jump"
                    >
                        登录
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
    import { EventBus } from '../event-bus';
    export default {
        name: "RouterGuard",
        methods:{
            jump(){
                this.$router.push({path:'/login'});
            },
            close(){
                this.$store.dispatch('closeRouterGuard')
            }
        },computed:{
            routerGuard(){
                return this.$store.getters.getRouterGuardStatus
            }
        }
    }
</script>
