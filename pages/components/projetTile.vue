<template>
    <NuxtLink :to="`projets/${projet.idProjet}`">
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
                <p class="lien-proj" :class="classP">{{ projet.titre }}</p>
            </div>
        </div>
    </NuxtLink>
</template>
<script setup>

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