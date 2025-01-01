<template>
    <div class="project-tile">
        <div>
            <p>img</p>
        </div>
        <div>
            <p>{{ projet.titre }} <NuxtLink class="lien detail" :to="`/projets/${projet.idProjet}`"></NuxtLink></p>
        </div>
        <!--<p>{{ projet }}</p>-->
    </div>
</template>
<script setup>
    defineProps({
        projet:String
    });


</script>
