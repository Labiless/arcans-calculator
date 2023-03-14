<script>
    export let text = "";
    export let href = "";
    export let isActive = true;
</script>

<a {href} class:active={isActive} >{text}</a>

<style lang="less">
    @import "./Button.less";
</style>
