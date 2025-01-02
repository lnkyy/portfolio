<template>
    <Head>
        <Title>Acceuil</Title>
    </Head>
    <Header></Header>
    <navBar></navBar>
    <main id="accueil">
        <div class="acceuil-block">
            <div class="un-tier intro">
                <NuxtImg 
                    src="/images/Marius.jpg"
                    alt="image de ma tête"
                    :placeholder="[50, 25, 75, 5]"
                    fit="inside"
                    id="container-pp"
                    />
            </div>
            <p class="separateur-vertical" id="acceuil-sep"></p>
            <div class="deux-tier intro" id="container-texte">
                <div id="container-intro">
                    <p>{{ texteIntro }}</p>
                </div>
                <div id="about-container">
                    <NuxtLink to="/about" class="savoir-plus">En savoir plus</NuxtLink>
                </div>
            </div>
        </div>
        <div class="acceuil-block column">
            <div class="block-cent">
                <p>Au cours de mon apprentissage, j'ai pu réaliser pas mal de projet, en voici quelques uns:</p>
            </div>
            <div class="block-cent">
                <div class="container-tiles">
                    <ProjetTile v-for="projet in projets" :projet="projet"></ProjetTile>
                </div>
                <div id="comp-container">
                    <NuxtLink to="/projets" class="savoir-plus">Mes projets</NuxtLink>
                </div>
            </div>
        </div>
    </main>
    <Footer></Footer>
</template>
<script setup>
    import texteIntroJson from '~/static/data/texteIntro.json';
    import projetsJson from '~/static/data/projets.json'; 

    import '~/assets/acceuil.css';

    import Header from './components/header.vue'
    import navBar from './components/navBar.vue';
    import Footer from './components/footer.vue';
    import ProjetTile from './components/projetTile.vue';

    let texteIntro = texteIntroJson.texte;
    let projets = ref(projetsJson);

    

</script>
