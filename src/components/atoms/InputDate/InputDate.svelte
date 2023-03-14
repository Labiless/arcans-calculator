<script>
    import { onMount } from "svelte";
    import { createEventDispatcher } from "svelte";

    export let dispatcher = "dispatcher";
    export let placeholder = "*";

    const dispatch = createEventDispatcher();

    const dateTemplate = (
        d1 = placeholder,
        d2 = placeholder,
        m1 = placeholder,
        m2 = placeholder,
        y1 = placeholder,
        y2 = placeholder,
        y3 = placeholder,
        y4 = placeholder
    ) => `${d1}${d2}/${m1}${m2}/${y1}${y2}${y3}${y4}`;

    const onInput = (e) => {
        input.value = lastInput;

        let c = e.data;
        let isBackspace = e.inputType === "deleteContentBackward";

        if (
            (!isBackspace && inputValue.length === 8) ||
            (!isBackspace && !"1234567890".includes(c))
        )
            return false;

        inputValue = isBackspace ? inputValue.slice(0, -1) : (inputValue += c);
        console.log(inputValue);
        lastInput = dateTemplate(...inputValue.split(""));
        input.value = lastInput;
        dispatch("dispatch", {
            dispatcher,
            value: input.value,
        });
    };

    let input = null;
    let inputValue = "";
    let lastInput = dateTemplate();

    onMount(() => {
        input.value = lastInput;
    });
</script>

<input bind:this={input} on:input={onInput} type="text" />

<style lang="less">
    @import "./InputDate.less";
</style>
