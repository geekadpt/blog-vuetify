<template>
    <div class="text-center">
        <v-snackbar
                v-model="snackbar"
                :timeout="timeout"
        >
            {{ text }}
            <v-btn
                    color="blue"
                    text
                    @click="snackbar = false"
            >
                Close
            </v-btn>
        </v-snackbar>
    </div>
</template>


<script>
    import {EventBus} from '../event-bus.js';
    export default {
        data: () => ({
            snackbar: false,
            text: '',
            timeout: 4000,
        }),
        mounted() {
            EventBus.$on('open-message', function (data) {
                this.text = data.text.toString();
                this.snackbar = true;
            }.bind(this));
        }
    }
</script>