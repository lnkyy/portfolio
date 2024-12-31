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
            <p class="separateur-vertical"></p>
            <div class="deux-tier intro" id="container-texte">
                <p>{{ texteIntro }}</p>
            </div>
        </div>
        <div class="acceuil-block" id="pokeball-div-container">
            <Pokeball></Pokeball>
        </div>
        <div class="acceuil-block">
            <h1>Courte descri</h1>
            <p>avec moi dresseur + bouton pour accéder à la page (cliquer pour voir plus ou un truc du genre)</p>
        </div>
        <div class="acceuil-block">
            <h1>projet comme descri ou je c pas</h1>
        </div>
    </main>
    <Footer></Footer>
</template>
<script setup>
    import texteIntroJson from '~/static/data/texteIntro.json';
    import '~/assets/acceuil.css';

    import Header from './components/header.vue'
    import navBar from './components/navBar.vue';
    import Footer from './components/footer.vue';
    import Pokeball from './components/pokeball.vue';

    let texteIntro = texteIntroJson.texte;
    

</script>
