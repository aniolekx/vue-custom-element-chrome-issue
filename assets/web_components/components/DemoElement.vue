<template>
    <div :id="id">
        <slot>Default Slot Value</slot>
    </div>
</template>
<script>
    export default {
        props: {
            id: {},

        },
        data: function() {
            return {

            };
        },

        mounted() {
            console.log('DEFAULT SLOTS: ', this.$slots.default);
        }
    };
</script>
<style>
</style>