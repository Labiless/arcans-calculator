<script>
    import { createEventDispatcher } from "svelte";

    export let placeholder = "";
    export let dispatcher = "";

    let input = null;
    const dispatch = createEventDispatcher();
    const oninput = () => {
        dispatch("dispatch", {
            dispatcher,
            value: input.value,
        });
    };
</script>

<input type="text" bind:this={input} on:input={oninput} {placeholder} />

<style lang="less">
    @import "./InputText.less";
</style>
