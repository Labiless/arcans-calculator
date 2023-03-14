<script>
    import { userInput } from "../components/utils/writable";
    import { wordValue, dateValue, sumNumberPos } from "../components/utils/arcaneCalculator";

    import Title from "../components/atoms/Title/Title.svelte";
    import Text from "../components/atoms/Text/Text.svelte";
    import Button from "../components/atoms/Button/Button.svelte";
    import Link from "../components/atoms/Link/Link.svelte";
    import ArcanInput from "../components/molecules/ArcanInput/ArcanInput.svelte";

    $: isName = $userInput?.name?.length >= 3;
    $: isSurname = $userInput?.surname?.length >= 3;
    $: isBirthplace = $userInput?.birthplace?.length >= 3;
    $: isBirthday = $userInput?.birthday?.length === 8;

    $: carattere = wordValue( `${$userInput?.name || ""}${$userInput?.surname || ""}` );
    $: destino = wordValue( $userInput?.birthplace || "") + dateValue($userInput?.birthday || ""); 

    $: console.log("carattere",carattere);
    $: console.log("destino", destino);

    // $: console.log($userInput);

    const carattereInput = [
        {
            type: "text",
            placeholder: "Scrivi il tuo nome",
            dispatcher: "name"
        },
        {
            type: "text",
            placeholder: "Scrivi il tuo cognome",
            dispatcher: "surname"
        },
    ];
    const destinoInput = [
        {
            type: "text",
            placeholder: "Scrivi il tuo luogo di nascita",
            dispatcher: "birthplace"
        },
        {
            type: "date",
            placeholder: "Inserisci la tua data di nascita",
            dispatcher: "birthday"
        },
    ];
    $: arcanoInput = [
        {
            type: "result",
            text: "Carattere",
            value: carattere > 22 ? sumNumberPos(carattere) : carattere 
        },
        {
            type: "result",
            text: "Destino",
            value: destino > 22 ? sumNumberPos(destino) : destino 
        },
    ];
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
            <Button href="#description" text="Calcola ora" />
            <Link text="Acquista i Tarocchi" />
        </div>
    </div>

    <!--description-->
    <div id="description" class="description">
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
        <Button href="#carattere" text="Next" />
    </div>

    <!--input carattere-->
    <ArcanInput
        id="carattere"
        number="1"
        title="Carattere"
        text="L’Arcano Maggiore corrispondente al proprio carattere con 
        le relative virtù e punti deboli. Si calcola sommando il numero corrispondente ad ogni lettera di nome e cognome."
        inputData={carattereInput}
        href="#destino"
        dispatch="carattere"
        activeButton={isName && isSurname}
    />

    <!--input destino-->
    <ArcanInput
        id="destino"
        number="2"
        title="Destino"
        text="L’Arcano del Destino rappresentante la fortuna e i pericoli nella vita. Si calcola 
        sommando il numero corrispondente ad ogni lettera del luogo di nascita e i numeri della data di nascita."
        inputData={destinoInput}
        href="#arcano"
        activeButton={isName && isSurname && isBirthplace && isBirthday}
    />

    <!--input arcano-->
    <ArcanInput
        id="arcano"
        number="3"
        title="Arcano degli Arcani"
        text="E’ l’Arcano che consente di modificare il proprio carattere e plasmare il destino. Si calcola sommando tra loro l’Arcano del Carattere e l’Arcano del Destino."
        inputData={arcanoInput}   
        buttonText="Completa i tuoi Arcani" 
        activeButton={
        isName && isSurname 
        && isBirthplace && isBirthday
        && carattere > 0 && destino > 0
        }
    />
</div>

<style lang="less">
    @import "../../src/Home.less";
</style>
