<template>
    <div class="project-tile">
        <div>
            <NuxtImg 
                    :src="projet.images"
                    :alt="projet.alt"
                    :placeholder="[50, 25, 75, 5]"
                    fit="inside"
                    class="projet-tile-img"
                    />
        </div>
        <div class="container-lien">
            <Lien :titre="projet.titre" :lien="`projets/${projet.idProjet}`"></Lien>
        </div>
    </div>
</template>
<script setup>
    import Lien from './lien.vue'

    defineProps({
        projet:Object
    });

</script>
<style>
    .container-lien
    {
        height: 50px;
    }
</style>