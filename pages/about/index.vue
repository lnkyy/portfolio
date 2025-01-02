<template>
    <Head>
        <Title>à propos</Title>
    </Head>
    <Header></Header>
    <navBar></navBar>
    <main class="main" id="about">
        <div>
            <h1>à propos</h1>
        </div>
        <div class="about-block block-info" id="pokeball-div-container">
                <Pokeball></Pokeball>
        </div>
    </main>
    <Footer></Footer>
</template>
<script setup>
    import '~/assets/about.css';

    import Header from '../components/header.vue'
    import navBar from '../components/navBar.vue';
    import Footer from '../components/footer.vue';
    import Pokeball from '../components/pokeball.vue';

</script>
