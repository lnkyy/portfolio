<template>
  <p class="lien-proj">{{ titre }} <NuxtLink class="lien" :to="`${lien}`">
          <NuxtImg
              src="/images/svg/lien.svg"
              alt="lien"
              class="lien-img"
          />
      </NuxtLink>
  </p>
</template>
<script setup>
  defineProps({
      titre:String,
      lien:String
  });
</script>
<style>

.lien-proj{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 5px;
}

.lien-img{
  width: 24px;
  height: 24px;
}

</style>