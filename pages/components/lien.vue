<template>
  <p class="lien-proj" :class="classP">{{ titre }} <NuxtLink class="lien" :to="`${lien}`">
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
      lien:String,
      classP:String
  });
</script>
<style>

.lien-proj{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 5px;
    color: black;
}

.lien-img{
  width: 24px;
  height: 24px;
}

</style>