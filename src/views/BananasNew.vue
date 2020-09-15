<template>
  <div class="bananas-new">
    <form v-on:submit.prevent="submit()">
      <h1>Create a Banana Please:</h1>

      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>

      <div class="form-group">
        <label>Country:</label>
        <input type="text" class="form-control" v-model="newBananaCountry">
      </div>
      
      <div class="form-group">
        <label>Company:</label>
        <input type="text" class="form-control" v-model="newBananaCompany">
      </div>

      <div class="form-group">
        <label>Price:</label>
        <input type="text" class="form-control" v-model="newBananaPrice">
      </div>

      <input type="submit" class="btn btn-primary" value="Submit">

    </form>

  </div>
   

</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newBananaCountry: "",
      newBananaCompany: "",
      newBananaPrice: "",
      errors: [],
    };
  },
  created: function () {},
  methods: {
    submit: function () {
      var params = {
        country: this.newBananaCountry,
        company: this.newBananaCompany,
        price: this.newBananaPrice,
      };

      console.log(params);

      console.log("Creating a banana!!!!");

      axios
        .post("/api/bananas", params)
        .then((response) => {
          console.log("making a banana", response);
          this.$router.push("/bananas");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
