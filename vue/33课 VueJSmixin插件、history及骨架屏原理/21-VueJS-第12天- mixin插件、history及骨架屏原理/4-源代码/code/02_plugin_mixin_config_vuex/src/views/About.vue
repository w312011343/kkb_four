<template>
  <div class="about">
    {{ $store.getters.getNum }}
  </div>
</template>
<script>
    export default {
        created() {
            console.log('about组件');
        },
        name:'about'
    }
</script>
