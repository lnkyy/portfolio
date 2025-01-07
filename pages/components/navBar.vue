<template>
    <nav>
        <NuxtLink id="home" class="menu tooltip" to="/">Accueil<span class="tooltiptext">Accueil</span></NuxtLink>
        <NuxtLink id="a-propos" class="menu tooltip" to="/about">A propos<span class="tooltiptext">A propos</span></NuxtLink>
        <NuxtLink id="projets" class="menu tooltip" to="/projets">Projets<span class="tooltiptext">Projets</span></NuxtLink>
        <NuxtLink id="comp" class="menu tooltip" to="/competences">Compétences<span class="tooltiptext">Compétences</span></NuxtLink>
    </nav>
</template>
<script setup>
  import '~/assets/navBar.css';
  
  onMounted( () => {
    let pageActiveList = document.getElementsByClassName("router-link-active");
    let boutonHome = document.getElementById("homeAccueil");
    let pageActive;

    if(pageActiveList[0] === boutonHome)
    {
      pageActive = pageActiveList[1]
      pageActive.classList.add("pageActiveHome");
    }
    else
    {
      pageActive = pageActiveList[0]
      if(pageActive !== undefined){   
        if(pageActive.id === "a-propos")
        {
          pageActive.classList.add("pageActiveAbout");
        }
        else if(pageActive.id === "projets")
        {
          pageActive.classList.add("pageActiveProjet");
        }
        else
        {
          pageActive.classList.add("pageActiveProjet");
        }
      } 
    }

    

  })
  

</script>