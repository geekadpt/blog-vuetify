<template>
</template>
<script>
    //import {EventBus} from "../../../event-bus";

    export default {
        data: () => ({
        }),
        created() {
            this.$watch(this.$store.getters.getLoginStatus, function () {
                if (this.$store.getters.getLoginStatus() !== 2 && this.$store.getters.getLoginStatus() !==1) {
                    this.$router.push({name:'登录'});
                }
            });
        }
    }
</script>
