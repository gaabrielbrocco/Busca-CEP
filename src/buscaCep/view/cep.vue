<template>
  <dialog :controller="controller" />
</template>

<script setup>
import { cepControllerImpl } from "../di/di";
import Dialog from "../components/dialog.vue";

const controller = cepControllerImpl();
console.log(controller);
</script>

<style></style>
