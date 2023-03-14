<script>
    import { userInput } from "../../utils/writable"

    import Title from "../../atoms/Title/Title.svelte";
    import Text from "../../atoms/Text/Text.svelte";
    import Button from "../../atoms/Button/Button.svelte";
    import InputText from "../../atoms/InputText/InputText.svelte";
    import InputDate from "../../atoms/InputDate/InputDate.svelte";
    import DisplayNumber from "../../atoms/DisplayNumber/DisplayNumber.svelte";

    export let id = "";
    export let href = "";
    export let number = 1;
    export let title = "Carattere";
    export let text = "";
    export let buttonText = "Next"
    export let inputData = [];
    export let dispatch = "dispatch";

    (() => {
        inputData.forEach(data => {
            data.dispatcher ? $userInput[data.dispatcher] = null : null;
        })
    })();

    const onDispatch = (e) => {
        $userInput[e.detail.dispatcher] = e.detail.value;
    }

</script>

<style lang="less">
    @import "./ArcanInput.less";
</style>

<div id={id} class="arcan-input">

    <div class="header">
        <h2>{number}.</h2>
        <Title text={title} align="left" />
    </div>
    <Text text={text} align="left" />

    {#each inputData as { type, placeholder, text, value, dispatcher }}
        {#if type === "text"}
            <InputText on:dispatch={onDispatch} dispatcher={dispatcher} placeholder={placeholder}/>
        {:else if type === "date"}
            <InputDate on:dispatch={onDispatch} dispatch={dispatcher}/>
        {:else if type === "result"}
            <DisplayNumber text={text} value={value}/>
        {/if}
	{/each}
    <Button href={href} isActive={false} text={buttonText} />
</div>