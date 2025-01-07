<template>

  <Head>
    <Title>Projets</Title>
  </Head>
  <Header></Header>
  <navBar></navBar>
  <main id="projet-id" class="main">
    <div class="container-detail">
      <div class="container-detail-projet">
        <h2 class="titre-detail-projet">{{ projet.titre }}</h2>
        <div class="container-tag-img-projet">
          <div class="container-role-tag">
            <div v-for="role in projet.role" class="role-tag">
              <p>{{ role }}</p>
            </div>
          </div>
          <div class="container-banner-projet">
            <NuxtImg :src="projet.banner.img" :alt="projet.banner.alt" :placeholder="[50, 25, 75, 5]" fit="inside"
              class="banner-projet" loading="lazy" />
          </div>
          <div class="container-projet-tile">
            <p>projets lié à ajouter sous forme de boucle une fois la page faites pour les JSON</p>
          </div>
        </div>
      </div>
      <div class="container-detail-projet">
        <div class="container-tile-tag">
          <div v-for="tag in projet.tags" class="tile-tag">
            <p>{{ tag }}</p>
          </div>
        </div>
        <div>
          <h3>Objectif</h3>
          <p class="texteBrut"> {{ projet.objectif }}</p>
        </div>
        <div>
          <h3>Description</h3>
          <p v-for="p in projet.description">{{ p.texte }}</p>
        </div>
        <div>
          <p>slider des technos</p>
          <p v-for="p in projet.technos" > {{ p.titre }} : {{ p.pourcentage }}</p>
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

  /*
  
  <div class="container-title">
        <h2>{{ projet.titre }}</h2>
      </div>
      <div class="projet-detail">
        <div>
          <span class="texteBrut"><strong>Objectif : </strong>{{ projet.objectif }}</span>
        </div>
        <div v-for=" descr in projet.description">
          <p class="texteBrut">{{ descr.texte }}</p>
        </div>
        <div class="container-tile-role">
          <h3 class="role" v-if="projet.role.length > 1">Mes rôles : </h3>
          <h3 v-if="projet.role.length == 1">Mon rôle</h3>

          <div v-for="role in projet.role" class="role-tag">
            <p>{{ role }}</p>
          </div>
        </div>
        <div class="container-tile-tag">
          <div v-for="techno in projet.technos" class="tile-tag">
            <p>{{ techno.titre }}</p>
          </div>
        </div>
      </div>
  
  */

</script>