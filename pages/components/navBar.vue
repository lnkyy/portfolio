<template>
  <nav>
    <NuxtLink id="home" class="menu tooltip" to="/">
      <NuxtImg src="/images/svg/house.svg" alt="image maison" fit="inside" id="home-text" loading="lazy"
        class="nav-img" />Accueil<span class="tooltiptext">Accueil
      </span>
    </NuxtLink>
    <NuxtLink id="a-propos" class="menu tooltip" to="/about">
      <NuxtImg src="/images/svg/users-round.svg" alt="image personne" fit="inside" id="about-text" loading="lazy"
        class="nav-img" />A
      propos<span class="tooltiptext">A propos</span>
    </NuxtLink>
    <NuxtLink id="projets" class="menu tooltip" to="/projets">
      <NuxtImg src="/images/svg/notebook-pen.svg" alt="image cahier de note" fit="inside" id="about-text" loading="lazy"
        class="nav-img" />
      Projets<span class="tooltiptext">Projets</span>
    </NuxtLink>
    <NuxtLink id="comp" class="menu tooltip" to="/competences">
      <NuxtImg src="/images/svg/comp.svg" alt="image chapeau remise diplome" fit="inside" id="about-text" loading="lazy"
        class="nav-img" />
      Compétences<span class="tooltiptext">Compétences</span>
    </NuxtLink>
  </nav>
</template>
<script setup>
  import '~/assets/navBar.css';
  
  onMounted( () => {
    let pageActiveList = document.getElementsByClassName("router-link-active");
    let pageActive = pageActiveList[0];

    if (pageActive !== undefined) {
      if (pageActive.id == "home") {
        pageActive.classList.add("pageActiveAbout");
      }   
      else if(pageActive.id == "a-propos")
      {
        pageActive.classList.add("pageActiveAbout");
      }
      else if(pageActive.id == "projets")
      {
        pageActive.classList.add("pageActiveProjet");
      }
      else
      {
        pageActive.classList.add("pageActiveComp");
      }
    } 
  })
  

</script>