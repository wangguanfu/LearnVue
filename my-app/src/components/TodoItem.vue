<template>
    <li class="item">
        <input type="checkbox" v-model="checked">
        <slot name='item' v-bind="{checked}"></slot>

           <!-- <template v-slot:item="itemProps">
                        <span :style="{fontSize: '20px',color:itemProps.checked ? 'red':'blue'}">{{item}}</span>
            </template> -->
    </li>
</template>


<script>
export default {
    props: ['item'],
    data(){
        return {
            checked :false
        }
    }
}
</script>

<style scope>
    .item {
        color: red
    }
</style>