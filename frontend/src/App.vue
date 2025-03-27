<template>
  <div>
    <h1>CRUD con Vue.js y Node.js</h1>
    <AddUser />
  </div>
</template>

<script>
import AddUser from "./components/AddUser.vue";

export default {
  components: {
    AddUser,
  },
};
</script>

<style>
h1 {
  text-align: center;
  color: #42b983;
}
</style>
