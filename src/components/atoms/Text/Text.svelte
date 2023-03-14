<script>
    export let text = "";
    export let align = "left";
    export let margin = "0";
</script>

<p class={align} class:margin-2={margin === "2"} >{text}</p>

<style lang="less">
    @import "./Text.less";
</style>
