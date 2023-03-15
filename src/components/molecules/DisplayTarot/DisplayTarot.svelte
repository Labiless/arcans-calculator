<script>
    import Title from "../../atoms/Title/Title.svelte";
    import Text from "../../atoms/Text/Text.svelte";

    export let title = "Title";
    export let subtitle = "Text";
    export let tarotData = {
        name: "Il Bagatto",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        imgUrl: "le_stelle",
    };

    let { imgUrl, description } = tarotData;
    imgUrl = "../../../static/img/cards/" + imgUrl + ".png";
</script>

<div class="container">
    <Text text={subtitle} />
    <Title text={title} align="left" />
    <div>
        <img alt="tarot" src={imgUrl} />
        <Text text={description} />
    </div>
</div>

<style lang="less">
    @import "./DisplayTarot.less";
</style>
