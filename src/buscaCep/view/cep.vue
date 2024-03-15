<template>
  <dialog-form :controller="controller" />
</template>

<script setup>
import { cepControllerImpl } from "../di/di";
import DialogForm from "../components/dialog-form.vue";

const controller = cepControllerImpl();
console.log(controller);
</script>

<style></style>
