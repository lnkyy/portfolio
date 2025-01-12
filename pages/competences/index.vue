<template>

    <Head>
        <Title>Compétences</Title>
    </Head>
    <Header></Header>
    <navBar></navBar>
    <main id="comp-main" class="main">
        <div class="container-list-competences">
            <div v-for="competence in listComp" class="container-competence">
                <p>{{ competence }}</p>
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


