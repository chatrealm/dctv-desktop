<style>
    @import 'style.scss'
</style>

<template>
    <div>
        <h1>{{ message }}</h1>
        We are using node {{ process.versions.node }},
        Chrome {{ process.versions.chrome }},
        and Electron {{ process.versions.electron }}.
    </div>
</template>

<script>
    export default { 
        data () {
            return {
                message: "Hello World-Loader!"
            }
        }
    }
</script>