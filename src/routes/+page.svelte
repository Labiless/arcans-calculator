<script>
    import Title from "../components/atoms/Title/Title.svelte";
    import Text from "../components/atoms/Text/Text.svelte";
    import Button from "../components/atoms/Button/Button.svelte";
    import Link from "../components/atoms/Link/Link.svelte";
    import ArcanInput from "../components/molecules/ArcanInput/ArcanInput.svelte";

    const carattereInput = [
        {
            type: "text",
            placeholder: "Scrivi il tuo nome",
        },
        {
            type: "text",
            placeholder: "Scrivi il tuo cognome",
        },
    ];

    const destinoInput = [
        {
            type: "text",
            placeholder: "Scrivi il tuo luogo di nascita",
        },
        {
            type: "date",
            placeholder: "Inserisci la tua data di nascita",
        },
    ];
</script>

<div class="main-content">
    <!--intro-->
    <div class="intro">
        <Title text="Arcans Generator" align="left" />
        <div>
            <Text
                text="Uno strumento per calcolare i tuoi arcani"
                align="right"
            />
            <Button text="Calcola ora" />
            <Link text="Acquista i Tarocchi" />
        </div>
    </div>

    <!--description-->
    <div class="description">
        <Text
            text="Conoscere i propri Arcani aiuterà a chiarire aspetti di sè stessi 
        e offrirà interessanti spunti di riflessione sul proprio percorso di crescita."
            align="left"
            margin="2"
        />
        <Text
            text="Questo gioco serve a calcolare l’Arcano Maggiore corrispondente al proprio carattere con le relative virtù e punti deboli."
            align="left"
            margin="2"
        />
        <Button text="Next" />
    </div>

    <!--input carattere-->
    <ArcanInput
        number="1"
        title="Carattere"
        text="L’Arcano Maggiore corrispondente al proprio carattere con 
        le relative virtù e punti deboli. Si calcola sommando il numero corrispondente ad ogni lettera di nome e cognome."
        inputData={carattereInput}
    />

    <!--input destino-->
    <ArcanInput
        number="2"
        title="Destino"
        text="L’Arcano del Destino rappresentante la fortuna e i pericoli nella vita. Si calcola 
        sommando il numero corrispondente ad ogni lettera del luogo di nascita e i numeri della data di nascita."
        inputData={destinoInput}
    />
</div>

<style lang="less">
    @import "../../src/Home.less";
</style>
