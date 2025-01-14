<template>
    <hr class="separateur">
    <footer>
        <div id="container-footer">
            <div class="footer-ul-container">
                <p class="texteBrut">Pages</p>
                <ul>
                    <li>
                        <NuxtLink to="/">Accueil</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about">A propos</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/projets">Projets</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/competences">Compétences</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/lore">Le lore</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/info">Informations légales</NuxtLink>
                    </li>
                </ul>
            </div>
            <div class="footer-ul-container">
                <p class="texteBrut">References</p>
                <ul>
                    <li>
                        <NuxtLink to="https://nuxt.com">Nuxt</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="https://grafikart.fr">Grafikart</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="https://lucide.dev/icons/">Lucide</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="https://github.com/lnkyy">Github</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="https://dribbble.com">Dribble</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="https://uiverse.io">Uiverse</NuxtLink>
                    </li>
                </ul>
            </div>
            <div class="footer-ul-container">
                <p class="texteBrut">Réseaux</p>
                <ul>
                    <li>
                        <NuxtLink to="https://www.linkedin.com/in/marius-moreau-499ab9268" target="_blank">Linkedin
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="https://github.com/lnkyy/" target="_blank">Github
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="https://www.instagram.com/marius.mro/" target="_blank">Instagram
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>
<script setup>
    import '~/assets/footer.css';
</script>