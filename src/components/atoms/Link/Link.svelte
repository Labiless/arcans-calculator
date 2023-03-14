<script>
    export let href = "";
    export let text = "i'm a link";
</script>

<style lang="less">
    @import "./Link.less";
</style>

<a href={href}>{text}</a>