<template>
  <nav>
    <router-link to="/">Músicas</router-link> |
    <router-link to="/filmes">Filmes e Desenhos</router-link> |
    <router-link to="/pai">José Maria</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #b0c1d1;
	background-color: #bf23a0d6; /* Defina a cor chumbo desejada */
  width: 100%;
	min-height: 100vh; /* Altura máxima da tela */
}

nav {
  background-color: #610052; /* Cor de fundo da navegação */
  padding: 20px 0; /* Espaçamento interno na parte superior e inferior */
}

nav a {
  font-weight: bold;
  color: #fff; /* Cor do texto dos links */
  text-decoration: none; /* Remover sublinhado nos links */
  margin-right: 20px; /* Espaçamento à direita entre os links */
  transition: color 0.3s ease; /* Transição suave na mudança de cor */
}

nav a:hover {
  color: #e9fd10; /* Cor dos links ao passar o mouse */
}

nav a.router-link-exact-active {
  color: #42b983; /* Cor do link ativo */
}
</style>
