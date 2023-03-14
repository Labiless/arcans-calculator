<script>
    export let text = "";
    export let href = "";
    export let isActive = true;

    const onclick = (e) => {
        if(!isActive) e.preventDefault();
    }


</script>

<a {href} on:click={onclick} class:active={isActive} >{text}</a>

<style lang="less">
    @import "./Button.less";
</style>
