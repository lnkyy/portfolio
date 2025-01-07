<template>
  <Head>
        <Title>Projets</Title>
    </Head>
    <Header></Header>
    <navBar></navBar>
    <main id="projet-id" class="main">

        

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
    </main>
    <Footer></Footer>
</template>
<script setup>
  import '~/assets/projet.css'

  import Header from '../components/header.vue'
  import navBar from '../components/navBar.vue';
  import Footer from '../components/footer.vue';

  import projets from '~/static/data/projets.json';
  const route = useRoute();

  let projet = ref();
  let id = [route.params.idProjet]

  //récupération du morceaux de JSon correspondant au projet
  projets.forEach( p => {
    if (p.idProjet == id)
    {
      projet = p;
    }
  });


</script>