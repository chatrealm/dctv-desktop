<style>
    @import 'style.scss'
</style>

<template>
    <div>
        <h1>Live Channels</h1>
        <live-channel v-for="ch in channels" :title="ch.friendlyalias" :img-src="ch.imageasset"></live-channel>
    </div>
</template>

<script>
    import LiveChannel from './components/LiveChannel.vue'

    export default {
        components: {
            LiveChannel
        },
        
        data () {
            return {
                channels: null
            }
        },

        ready () {
            // Get assigned channels from DCTV api
            this.$http.get('http://diamondclub.tv/api/channelsv2.php')
                .then(response => { return response.json() })
                .then(body => { this.channels = body.assignedchannels })
        }
    }
</script>