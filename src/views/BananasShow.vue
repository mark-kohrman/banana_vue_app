<template>
  <div class="bananas-show">
      <h1> Your Banana </h1>

      <h2>  Country: {{ banana.country }} </h2>
      <p>  Company: {{ banana.company }} </p>
      <p>  Price: {{ banana.price }} </p>




    </div>
   

</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      banana: [],
    };
  },
  created: function () {
    console.log("showing the banana!!!!");
    axios.get(`/api/bananas/${this.$route.params.id}`).then((response) => {
      this.banana = response.data;
    });
  },
  methods: {},
};
</script>
