<template>
    <Head>
        <Title>Projets</Title>
    </Head>
    <Header></Header>
    <navBar></navBar>
    <main id="projet" class="main">
        <div v-for="projet in projets" class="container-projet">
            <div class="container-image-projet">
                <NuxtImg 
                    :src="projet.images"
                    :alt="projet.alt"
                    :placeholder="[50, 25, 75, 5]"
                    fit="inside"
                    class="image-projet"
                    />
            </div>
            <p class="separateur-vertical" id="sep-projet"></p>
            <div class="description-projet">
                <h2 class="titreProjet">{{ projet.titre }}</h2>
                <div>
                    <span class="texteBrut"><strong>Objectif : </strong>{{  projet.objectif }}</span>
                </div>
                <div class="container-description">
                    <p class="texteBrut" v-for="descr in projet.description">{{ descr.texte }}</p>
                </div>
                <div class="container-tile-tag">
                    <div v-for="tag in projet.tags" class="tile-tag">
                        <p>{{ tag }}</p>
                    </div>
                </div>
                <div class="container-more">
                    <NuxtLink :to="`projets/${projet.idProjet}`" class="savoir-plus">Voir plus</NuxtLink>
                </div>   
            </div>
        </div>
    </main>
    <Footer></Footer>
</template>
<script setup>
    import '~/assets/projet.css'

    import Header from '../components/header.vue'
    import navBar from '../components/navBar.vue';
    import Footer from '../components/footer.vue';

    import projets from '~/static/data/projets.json';


    /*
    
    <div class="container-tile-tag">
        <div v-for="role in projet.role" class="tile-tag">
            <p>{{ role }}</p>
        </div>
    </div>
    <div class="container-tile-tag">
        <div v-for="techno in projet.technos" class="tile-tag">
            <p>{{ techno.titre }}</p>
        </div>
    </div>
    
    */

</script>
