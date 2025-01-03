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
                            loading="lazy"
                            />
                    </div>
                    <p class="separateur-vertical" id="acceuil-sep"></p>
                    <div class="deux-tier intro" id="container-texte">
                        <p>{{ texteIntro }}</p>
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
                    loading="lazy"
                    />
            </div>
        </div>
        <!--<p>{{ complement }}</p>-->
        <div  class=" block-info about-block column">
            <div class="cent">
                <div>
                    <label for="radioEtudes" class="labelReseaux">
                        <input type="radio" v-model="aboutRadio" value="Etudes" id="radioEtudes" name="aboutRadio">
                        <span>Etudes</span>
                    </label>
                    <label for="radioReseaux" class="labelReseaux">
                        <input type="radio" v-model="aboutRadio" value="Reseaux" id="radioReseaux" name="aboutRadio">
                        <span>Réseaux</span>
                    </label>
                </div>
                <hr class="separateur-plat"/>
            </div>
            <div v-if="aboutRadio === 'Etudes'">
                <p>{{aboutRadio}}</p>
            </div>
            <div v-if="aboutRadio === 'Reseaux'" class="container-tiles-reseaux">
                <h2 class="block-gauche">Mes Réseaux</h2>
                <div class="container-tiles">
                    <div v-for="reseau in reseaux" class="tile-reseau">
                        <NuxtLink :to="reseau.lien" class="tile-reseau-lien">
                            <NuxtImg
                                :src="reseau.logo"
                                :alt="`Logo de ${reseau.nom}`"
                                class="img-reseau"
                                loading="lazy"
                            />
                            <p>{{ reseau.nom }}</p>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div> 
    </main>
    <Footer></Footer>
</template>
<script setup>
    import '~/assets/about.css';
    import texteIntroJson from '~/static/data/texteIntro.json';
    import listeReseaux from '~/static/data/listeReseaux.json';

    import Header from '../components/header.vue'
    import navBar from '../components/navBar.vue';
    import Footer from '../components/footer.vue';
    import Pokeball from '../components/pokeball.vue';

    let texteIntro = texteIntroJson.description;
    let complement = texteIntroJson.complement;
    let reseaux= ref(listeReseaux);
    let aboutRadio = ref('');



</script>
