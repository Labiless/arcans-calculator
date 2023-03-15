<script>
    import { onMount } from "svelte";

    import { calculatedResults } from "../../components/utils/writable";
    import { getTarot } from "../../components/utils/getTarot";
    import Header from "../../components/molecules/Header/Header.svelte";
    import DisplayTarot from "../../components/molecules/DisplayTarot/DisplayTarot.svelte";

    onMount(() => {
        console.log($calculatedResults);
        document.querySelector("html").style.overflowY = "auto";
    })
</script>

<div class="main-content">
    <Header href="/" text="Restart" show={true} />

    <DisplayTarot
        title="Carattere"
        subtitle="Il tuo arcano del"
        tarotData={getTarot($calculatedResults.carattere)}
    />

    <DisplayTarot
        title="Destino"
        subtitle="Il tuo arcano del"
        tarotData={getTarot($calculatedResults.destino)}
    />

    <DisplayTarot
        title="Arcano degli Arcani"
        subtitle="Il tuo"
        tarotData={getTarot($calculatedResults.arcano)}
    />
</div>

<style lang="less">
    @import "./Result.less";
</style>
