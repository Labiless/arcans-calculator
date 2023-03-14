<script>
    import Title from "../../atoms/Title/Title.svelte";
    import Text from "../../atoms/Text/Text.svelte";
    import Button from "../../atoms/Button/Button.svelte";
    import InputText from "../../atoms/InputText/InputText.svelte";
    import InputDate from "../../atoms/InputDate/InputDate.svelte";
    import DisplayNumber from "../../atoms/DisplayNumber/DisplayNumber.svelte";


    export let number = 1;
    export let title = "Carattere";
    export let text = "";
    export let buttonText = "Next"
    export let inputData = [];

</script>

<style lang="less">
    @import "./ArcanInput.less";
</style>

<div class="arcan-input">

    <div class="header">
        <h2>{number}.</h2>
        <Title text={title} align="left" />
    </div>
    <Text text={text} align="left" />

    {#each inputData as { type, placeholder, text, value }}
        {#if type === "text"}
            <InputText placeholder={placeholder}/>
        {:else if type === "date"}
            <InputDate/>
        {:else if type === "result"}
            <DisplayNumber text={text} value={value}/>
        {/if}
	{/each}
    <Button isActive={false} text={buttonText} />
</div>