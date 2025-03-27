<template>
    <div class="container">
      <h2>Lista de Usuarios</h2>
      <button @click="fetchUsers">Cargar Usuarios</button>
      <div v-if="mensaje" class="mensaje">{{ mensaje }}</div>
      <ul v-if="usuarios.length">
        <li v-for="usuario in usuarios" :key="usuario._id">
          <strong>{{ usuario.nombre }}</strong> - {{ usuario.edad }} años
        </li>
      </ul>
      <p v-else>No hay usuarios disponibles.</p>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        usuarios: [],
        mensaje: "",
      };
    },
    methods: {
      async fetchUsers() {
        try {
          const response = await axios.get("http://localhost:5000/api/users");
          this.usuarios = response.data;
          this.mensaje = "";
        } catch (error) {
          console.error("Error al obtener usuarios:", error);
          this.mensaje = "Error al cargar los usuarios.";
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 500px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  button {
    background-color: #42b983;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    margin-bottom: 10px;
  }
  button:hover {
    background-color: #369c72;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    padding: 8px;
    border-bottom: 1px solid #ddd;
  }
  .mensaje {
    color: red;
  }
  </style>
  