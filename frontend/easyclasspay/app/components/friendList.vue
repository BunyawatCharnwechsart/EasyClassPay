<template>
    <div v-for="(user, index) in usersData" :key="index">
        <ul class="flex flex-col">
            <li class="font-bold"> {{ user.username }} </li>
            <li class="text-gray-500"> {{ user.email }} </li>
        </ul>
    </div>
</template>

<script setup>

defineProps({
    usersData: {
        type: Array,
        required: true
    }
});

</script>