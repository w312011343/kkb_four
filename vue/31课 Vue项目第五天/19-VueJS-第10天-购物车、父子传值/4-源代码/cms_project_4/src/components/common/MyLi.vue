<template>
    <li>
        <slot></slot>
        <div class="icon">
            <!-- slot其实是不存在的，所以不要设置他 -->
            <slot name="icon"></slot>
        </div>
    </li>
</template>
<script>
    export default {

        name:'my-li',
        data(){
            return {

            }
        }
    }
</script>
<style scoped>

.icon img {
    width: 100%;
}
 li{
    list-style: none;
    float: left;
    width: 33.333%;
    text-align: center;
}  

</style>