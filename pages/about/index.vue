<template>
    <Head>
        <Title>à propos</Title>
    </Head>
    <Header></Header>
    <navBar></navBar>
    <div >
        <div>
            <h1>à propos</h1>
        </div>
        <div class="acceuil-block" id="pokeball-div-container">
                <Pokeball></Pokeball>
        </div>
    </div>
    <Footer></Footer>
</template>
<script setup>
    import Header from '../components/header.vue'
    import navBar from '../components/navBar.vue';
    import Footer from '../components/footer.vue';
    import Pokeball from '../components/pokeball.vue';

</script>
