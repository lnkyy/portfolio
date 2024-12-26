<template>
    <Head>
        <Title>Acceuil</Title>
    </Head>
    <Header></Header>
    <navBar></navBar>
    <div id="accueil">
        <div>
            <h1>acceuil</h1>
        </div>
    </div>
    <Footer></Footer>
</template>
<script setup>
    import Header from './components/header.vue'
    import navBar from './components/navBar.vue';
    import Footer from './components/footer.vue';
</script>
<style>
    #accueil{
        background-color: #cba3ff;
    }
</style>

