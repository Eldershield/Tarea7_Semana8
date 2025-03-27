<template>
    <div class="container">
      <h2>Agregar Usuario</h2>
      <form @submit.prevent="addUser">
        <div>
          <label>Nombre:</label>
          <input type="text" v-model="nombre" required />
        </div>
        <div>
          <label>Edad:</label>
          <input type="text" v-model="edad" required />
        </div>
        <button type="submit">Guardar</button>
      </form>
  
      <div v-if="mensaje" class="mensaje">{{ mensaje }}</div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        nombre: "",
        edad: "",
        mensaje: "",
      };
    },
    methods: {
        async addUser() {
  try {
    const response = await axios.post("http://localhost:5000/api/users", {
      nombre: this.nombre,
      edad: this.edad,
    });

    console.log("Respuesta del servidor:", response.data); // <-- Ahora la variable se usa
    this.mensaje = "Usuario agregado correctamente.";
    this.nombre = "";
    this.edad = "";
  } catch (error) {
    console.error("Error al agregar usuario:", error);
    this.mensaje = "Error al agregar usuario.";
  }
}
    }
};
  </script>
  
  <style scoped>
  .container {
    max-width: 400px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  input {
    display: block;
    width: 100%;
    margin-bottom: 10px;
    padding: 8px;
  }
  button {
    background-color: #42b983;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
  }
  button:hover {
    background-color: #369c72;
  }
  .mensaje {
    margin-top: 10px;
    color: green;
  }
  </style>
  