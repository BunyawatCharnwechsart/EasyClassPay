<template>
    <div class="font-Bai-Jamjuree">
        <navbar />
        <Ads/>
        <cardmenu/>
        <tutorial/>
        <about/>
    </div>
</template>


<script setup>
import navbar from '../components/navbar.vue';
import Ads from '~/components/Ads.vue';
import cardmenu from '~/components/cardmenu.vue';
import tutorial from '~/components/tutorial.vue';
import about from '~/components/about.vue';
</script>