<template>
    <div>

        <nav>
            <Navbar />
        </nav>

        <div>
            <slide />
        </div>

        <div>
            <menuui />
        </div>

        <div>
            <about />
        </div>

    </div>
</template>

<script setup>
import slide from '~/components/main/slide.vue';
import Navbar from '~/components/navbar.vue';
import menuui from '~/components/main/menuui.vue';
import about from '~/components/about.vue';


useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Bai+Jamjuree:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
    }
  ]
})
</script>

<style>
    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        font-family: 'Bai Jamjuree', sans-serif;
    }
</style>