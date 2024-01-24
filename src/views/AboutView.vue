<template>
  <div class="construction-page">
    <div class="construction-content">
      <h1>Em Construção</h1>
      <p>Esta página está em construção. Estamos trabalhando para torná-la ainda melhor.</p>
      <!-- <img src="@/assets/construction.gif" alt="Em construção" /> -->
    </div>
  </div>
</template>

<style scoped>
.construction-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0; /* Cor de fundo da página em construção */
}

.construction-content {
  text-align: center;
  max-width: 600px;
}

h1 {
  font-size: 36px;
  color: #333; /* Cor do título */
}

p {
  font-size: 18px;
  color: #555; /* Cor do texto */
  margin-bottom: 20px;
}

img {
  width: 100%;
  max-width: 400px;
  border-radius: 10px; /* Borda arredondada para a imagem */
}
</style>


<!-- 
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
     <h3>Vídeos</h3> 
    <div class="video-container">
      <h2>{{ videoTitle }}</h2>
      <video ref="videoPlayer" :controls="videoOptions.controls" @play="onPlay" @pause="onPause" @ended="onEnded">
        <source :src="videoOptions.sources[0].src" :type="videoOptions.sources[0].type">
        Seu navegador não suporta o elemento de vídeo.
      </video>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      videoOptions: {
        autoplay: false,
        controls: true,
        sources: [
          {
            src: '/assets/videos/Episodio 01.mp4',
            type: 'video/mp4',
          },
        ],
      },
      videoTitle: '', // Variável para armazenar o título do vídeo
    };
  },
  methods: {
    onPlay() {
      console.log('Video playing');
    },
    onPause() {
      console.log('Video paused');
    },
    onEnded() {
      console.log('Video ended');
    },
    extractVideoTitle() {
      // Remova a extensão do nome do arquivo para obter o título
      const fileNameWithoutExtension = this.videoOptions.sources[0].src.split('/').pop().split('.').slice(0, -1).join('.');
      // Você pode adicionar mais lógica aqui para formatar o título conforme necessário
      return fileNameWithoutExtension;
    },
  },
  computed: {
    videoFileName() {
      // Obtém o nome do arquivo do caminho do vídeo
      return this.videoOptions.sources[0].src.split('/').pop();
    },
  },
  mounted() {
    // Extraia o nome do arquivo do caminho do vídeo e defina como título
    this.videoTitle = this.extractVideoTitle();
  },
};
</script>

<style scoped>
h1 {
  margin-bottom: 20px;
  /* font-size: 1.5em; */
}

h3 {
  margin: 40px 0 0;
}

.video-container {
  max-width: 80%;  
  margin: auto;
  text-align: center;
}

video {
  width: 100%;
  height: auto;
  border-radius: 10px;
  /* Borda arredondada */
}

/* Adicione estilos para o título conforme necessário */
h2 {
  color: #272626; /* Cor do título do vídeo */
  font-size: 1.5em; /* Tamanho da fonte do título do vídeo */
  margin-bottom: 10px;
}
</style> -->

