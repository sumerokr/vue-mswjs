<template>
  <div class="hello">
    <div v-if="user">
      {{ user }}
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HelloWorld",
  data() {
    return {
      user: null,
    };
  },
  methods: {
    async getUser() {
      const response = await axios.get("/user");
      this.user = response.data;
    },
  },
  created() {
    this.getUser();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
