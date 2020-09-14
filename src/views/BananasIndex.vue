<template>
  <div class="home">
    <h1>Look at all these bananas!!!</h1>
    <div v-for="banana in bananas">
      <h2>{{ banana.country }}</h2>
      <p>{{ banana.company }}</p>
      <p>{{ banana.price }}</p>

    </div>
   

  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      bananas: [],
    };
  },
  created: function () {
    console.log("All the bananas!");
    axios.get("/api/bananas").then((response) => {
      this.bananas = response.data;
    });
  },
  methods: {},
};
</script>
