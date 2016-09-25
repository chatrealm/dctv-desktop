<style>
    @import 'style.scss'
</style>

<template>
    <div>
        <live-channel v-for="ch in channels"
                      :title="ch.friendlyalias"
                      :img-src="ch.imageasset"
                      :player-url="playerUrl(ch.channel)">
        </live-channel>
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

        methods: {
            playerUrl (chNum) {
                if (chNum === 0) {
                    return "http://diamondclub.tv/player/stream.php?stream=ingest.diamondclub.tv/hls2/dctv&hls=http://ingest.diamondclub.tv/hls2/dctv.m3u8&apc=91ba3705eaed74dc9e6377d8ed0177b1&hidelogo=yes"
                }
                return `http://diamondclub.tv/video.php?channel=${chNum}`
            }
        },

        ready () {
            // Get assigned channels from DCTV api
            this.$http.get('http://diamondclub.tv/api/channelsv2.php')
                .then(response => { return response.json() })
                .then(body => {
                    this.channels = body.assignedchannels
                    this.channels.unshift({
                        "friendlyalias": "DCTV 24/7",
                        "imageasset": "https://dl.dropboxusercontent.com/u/18589646/dctv247.jpg",
                        "channel": 0
                    })
                })
        }
    }
</script>