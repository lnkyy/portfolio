<template>

    <Head>
        <Title>Compétences</Title>
    </Head>
    <Header></Header>
    <navBar></navBar>
    <main id="comp-main" class="main">
        <div class="container-list-competences">
            <div v-for="competence in listComp" class="container-competence">
                <div class="cinquante">
                    <p class="idComp texteBrut">#00{{ competence.idCompetence }}</p>
                    <h2 class="titre-h3">{{ competence.nom }}</h2>
                    <div class="container-tile-comp">
                        <div v-for="keyword in competence.objectif" class="tile-comp">
                            <p class="texteBrut">{{ keyword}}</p>
                        </div>
                    </div>
                    <p class="texteCompDescri">{{ competence.description }}</p>
                </div>
                <div class="container-img-comp">
                    <NuxtImg :src="`${competence.img.src}`" :alt="`${competence.img.alt}`" :placeholder="[50, 25, 75, 5]"
                        fit="inside" loading="lazy" />
                </div>
            </div>
        </div>
    </main>
    <Footer></Footer>
</template>
<script setup>
    import '~/assets/competences.css'
    import comp from '~/static/data/competences_iut.json'


    import Header from '../components/header.vue'
    import navBar from '../components/navBar.vue';
    import Footer from '../components/footer.vue';

    let listComp = ref(comp);

</script>


