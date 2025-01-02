<template>
    <Head>
        <Title>à propos</Title>
    </Head>
    <Header></Header>
    <navBar></navBar>
    <main class="main" id="about">
        <div class="about-container" >
            <div class="quatre-vingt">
                <div class="about-block  block-info">
                    <div class="un-tier intro">
                        <NuxtImg 
                            src="/images/Marius.jpg"
                            alt="image de ma tête"
                            :placeholder="[50, 25, 75, 5]"
                            fit="inside"
                            id="container-pp-about"
                            />
                    </div>
                    <p class="separateur-vertical" id="acceuil-sep"></p>
                    <div class="deux-tier intro" id="container-texte">
                        <p>{{ texteIntro }}</p>
                        <p>{{ complement }}</p>
                    </div>
                </div>
                <div id="pokeball-div-container" class="about-block block-info">
                    <Pokeball></Pokeball>
                </div>
            </div>
            <div class="vingt">
                <NuxtImg 
                    src="/images/moi_transparent.png"
                    alt="moi en dresseur de pokémon"
                    :placeholder="[50, 25, 75, 5]"
                    fit="inside"
                    id="moi-dresseur"
                    />
            </div>
        </div>
    </main>
    <Footer></Footer>
</template>
<script setup>
    import '~/assets/about.css';
    import texteIntroJson from '~/static/data/texteIntro.json';

    import Header from '../components/header.vue'
    import navBar from '../components/navBar.vue';
    import Footer from '../components/footer.vue';
    import Pokeball from '../components/pokeball.vue';

    let texteIntro = texteIntroJson.description;
    let complement = texteIntroJson.complement;

</script>
