<script>
    import Button from "../../atoms/Button/Button.svelte";

    export let href = "";
    export let text = "Go Up";
    export let show = false;
    let scrollY;
    $: internalShow =  scrollY > 100;

</script>

<style lang="less">
    @import "./Header.less";
</style>

<svelte:window bind:scrollY={scrollY} />
<div class="header" class:show={show || internalShow}>
    <Button href={href} text={text} />
</div>

