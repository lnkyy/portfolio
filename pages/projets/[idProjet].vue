<template>

  <Head>
    <Title>Projets</Title>
  </Head>
  <Header></Header>
  <navBar></navBar>
  <main id="projet-id" class="main">
    <div class="container-detail">
      <div class="retour-container">
        <NuxtLink id="retour" class="savoir-plus" to="/projets">
          <NuxtImg src="/images/svg/fleche_retour.svg" alt="retour en arrière" :placeholder="[50, 25, 75, 5]"
            fit="inside" loading="lazy" id="retour-img" />
        </NuxtLink>
      </div>
      <div class="container-detail-top">
        <div class="container-detail-projet gauche">
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
        <div class="container-detail-projet droite">
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
            <h3 class="titre-h3">Langages utilisés (%)</h3>
            <div class="list-slider">
              <div v-for="p in projet.technos" class="container-slider-technos">
                <div class="container-titre-technos">
                  <NuxtImg :src="`${p.icon}`" :alt="`${p.alt}`" :placeholder="[50, 25, 75, 5]" fit="inside"
                    loading="lazy" class="logo-techno" />
                  <span>{{ p.titre }}</span>
                </div>
                <label :for="`${p.titre}`" :id="`label-${p.titre}`" class="slider-technos">
                  <input :id="`${p.titre}`" class="slider" :value="`${p.pourcentage}`" max="100" min="0" type="range"
                    disabled>
                  <span class="span-techno">{{ p.pourcentage }}%</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="retour-container lien-projet" v-if="projet.lienProjet !== '' ">
        <NuxtLink class="savoir-plus" :to="`${projet.lienProjet}`" target="_blank">Accéder au code source</NuxtLink>
      </div>
      <div v-else class="retour-container lien-projet">
        <p class="savoir-plus pointeur-normal">le code n'est pas stocké</p>
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