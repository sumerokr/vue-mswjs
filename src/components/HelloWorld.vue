<template>
  <div class="hello">
    <div v-if="user">
      {{ user }}
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      user: null,
    };
  },
  methods: {
    async getUser() {
      const response = await fetch("/user").then((res) => res.json());
      this.user = response;
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
