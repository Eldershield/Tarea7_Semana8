<template>
  <div>
    <h1>CRUD con Vue.js y Node.js</h1>
    <AddUser />
    <UserList />
  </div>
</template>

<script>
import AddUser from './components/AddUser.vue'; // Componente de agregar usuario
import UserList from './components/UserList.vue'; // Componente de lista de usuarios

export default {
  components: {
    AddUser,
    UserList,
  },
};
</script>

<style>
h1 {
  text-align: center;
  color: #42b983;
}
</style>
