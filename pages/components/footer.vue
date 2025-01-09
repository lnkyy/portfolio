<template>
    <hr class="separateur">
    <footer>
        <div id="container-footer">
            <div class="footer-ul-container">
                <p>Pages</p>
                <ul>
                    <li><NuxtLink to="/">Accueil</NuxtLink></li>
                    <li><NuxtLink to="/projets">Projets</NuxtLink></li>
                    <li><NuxtLink to="/about">A propos</NuxtLink></li>
                    <li><NuxtLink to="/competences">Compétences</NuxtLink></li>
                </ul>
            </div>
            <div class="footer-ul-container">
                <p>References</p>
                <ul>
                    <li><NuxtLink to="https://nuxt.com">Nuxt</NuxtLink></li>
                    <li><NuxtLink to="https://grafikart.fr">Grafikart</NuxtLink></li>
                    <li><NuxtLink to="https://lucide.dev/icons/">Lucide</NuxtLink></li>
                    <li><NuxtLink to="https://github.com/lnkyy">Github</NuxtLink></li>
                </ul>
            </div>
        </div>
    </footer>
</template>
<script setup>
    import '~/assets/footer.css';
</script>