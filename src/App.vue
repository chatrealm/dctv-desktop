<style>
    @import 'style.scss'
</style>

<template>
    <div>
        <h1>Live Channels</h1>
        <ul>
            <li v-for="ch in liveChannels">
                {{ ch.friendlyalias }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default { 
        data () {
            return {
                liveChannels: null
            }
        },

        ready () {
            // Get assigned channels from DCTV api
            this.$http.get('http://diamondclub.tv/api/channelsv2.php')
                .then(response => { return response.json() })
                .then(body => { this.liveChannels = body.assignedchannels })
        }
    }
</script>