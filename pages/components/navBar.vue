<template>
    <nav>
        <NuxtLink id="home" class="menu" to="/">Acceuil</NuxtLink>
        <NuxtLink id="projets" class="menu" to="/projets">Projets</NuxtLink>
        <NuxtLink id="a-propos" class="menu" to="/about">A propos</NuxtLink>
        <NuxtLink id="comp" class="menu" to="/competences">Compétences</NuxtLink>
    </nav>
</template>
<script setup>
  import '~/assets/navBar.css';

</script>