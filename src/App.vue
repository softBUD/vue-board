<template>
	<TheHeader></TheHeader>
	<TheMain></TheMain>
	<AppAlert></AppAlert>
</template>

<script setup>
import TheHeader from '@/layouts/TheHeader.vue';
import TheMain from '@/layouts/TheMain.vue';
import AppAlert from './components/app/AppAlert.vue';
// import { useAlert } from './composables/alert';

// const { alerts } = useAlert();
</script>

<style></style>
