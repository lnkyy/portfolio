<template>
    <nav>
        <NuxtLink id="home" class="menu tooltip" to="/">Acceuil<span class="tooltiptext">Accueil</span></NuxtLink>
        <NuxtLink id="projets" class="menu tooltip" to="/projets">Projets<span class="tooltiptext">Projets</span></NuxtLink>
        <NuxtLink id="a-propos" class="menu tooltip" to="/about">A propos<span class="tooltiptext">A propos</span></NuxtLink>
        <NuxtLink id="comp" class="menu tooltip" to="/competences">Compétences<span class="tooltiptext">Compétences</span></NuxtLink>
    </nav>
</template>
<script setup>
  import '~/assets/navBar.css';

</script>