<template>
    <img :src="imgSrc" :title="title" :alt="title" height="80" width="200">
    &nbsp;
</template>

<script>
    export default {
        props: [ 'title', 'imgSrc' ]
    }
</script>