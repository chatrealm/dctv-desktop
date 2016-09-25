<template>
    <img class="live-channel" :src="imgSrc" :title="title" :alt="title" height="80" width="200" @click="channelClick()">
    &nbsp;
</template>

<script>
    export default {
        props: [ 'title', 'imgSrc', 'playerUrl' ],

        methods: {
            channelClick () {
                let win = new this.$electron.remote.BrowserWindow({ width: 1200, height: 675, useContentSize: true, autoHideMenuBar: true })
                win.on('close', () => {
                    win = null
                })
                win.loadURL(this.playerUrl)
                win.show()
            }
        }
    }
</script>