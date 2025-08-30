<template>

    <div>
        <nav>
            <Navbar />
        </nav>

        <header>
            <headtext />
        </header>

        <section>
            <entername />
        </section>

    </div>

</template>

<script setup>
import headtext from '~/components/createBill/headtext.vue';
import entername from '~/components/createBill/entername.vue';

useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Bai+Jamjuree:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
    }
  ]
})
</script>

<style scoped>

    * {
        font-family: 'Bai Jamjuree', sans-serif;
    }
</style>