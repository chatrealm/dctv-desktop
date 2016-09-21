<style>
    @import 'style.scss'
</style>

<template>
    <div>
        <h1>{{ message }}</h1>
        We are using node {{ versions.node }},
        Chrome {{ versions.chrome }},
        and Electron {{ versions.electron }}.
    </div>
</template>

<script>
    export default { 
        data () {
            return {
                message: "Hello World-Loader!",
                versions: process.versions
            }
        }
    }
</script>