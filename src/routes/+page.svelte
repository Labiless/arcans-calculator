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

    const arcanoInput = [
        {
            type: "result",
            text: "Carattere",
            value: "10"
        },
        {
            type: "result",
            text: "Destino",
            value: "12"
        },
    ]
</script>

<div class="main-content">
    <!--intro-->
    <div class="intro">
        <Title text="Arcans Calculator" align="left" />
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

    <!--input destino-->
    <ArcanInput
        number="3"
        title="Arcano degli Arcani"
        text="E’ l’Arcano che consente di modificare il proprio carattere e plasmare il destino. Si calcola sommando tra loro l’Arcano del Carattere e l’Arcano del Destino."
        inputData={arcanoInput}   
        buttonText="Complleta i tuoi Arcani" 
    />
</div>

<style lang="less">
    @import "../../src/Home.less";
</style>
