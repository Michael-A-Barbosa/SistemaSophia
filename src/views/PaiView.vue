<template>
	<div class="hello">
		<h1>Filmes</h1>
		<div class="video-container">
			<div v-for="(video, index) in videos" :key="index">
				<h2>
					{{ extractVideoTitle(video) }}
					<i class="fas fa-arrow-down"></i>
				</h2>
				<!-- Verificar se é um vídeo do YouTube -->
				<template v-if="video.type === 'youtube'">
					<iframe class="youtube-video" :src="video.src" frameborder="0" allowfullscreen></iframe>
				</template>
				<!-- Se não for um vídeo do YouTube, usar a tag <video> -->
				<template v-else>
					<video :ref="`videoPlayer-${index}`" :controls="videoOptions.controls" @play="onPlay" @pause="onPause"
						@ended="onEnded">
						<source :src="video.src" :type="video.type">
						Seu navegador não suporta o elemento de vídeo.
					</video>
				</template>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	// name: 'Filmes',
	// props: {
	// 	msg: String
	// },
	data() {
		return {
			videoOptions: {
				autoplay: false,
				controls: true,
			},
			videos: [
				{
					src: 'https://filemoon.sx/e/95exrgfw1emr', // Exemplo de URL de vídeo do YouTube
					type: 'youtube',
				},
				// {
				// 	src: 'https://superflixapi.top/tv/sportv',
				// 	type: 'youtube',
				// },
			],
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
			// Adicione lógica se desejar realizar alguma ação quando um vídeo terminar
		},
		extractVideoTitle(video) {
			const fileNameWithoutExtension = video.src.split('/').pop().split('.').slice(0, -1).join('.');
			return fileNameWithoutExtension;
		},
	},
	mounted() {
		// Inicializar os players de vídeo
		this.videos.forEach((video, index) => {
			if (video.type !== 'youtube') {
				const player = this.$refs[`videoPlayer-${index}`][0];
				player.src = video.src;
				player.type = video.type;
			}
		});
	},
};
</script>

<style scoped>

h1 {
	margin-top: 20px;
	margin-bottom: 20px;
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
	margin-top: 10px;
	margin-bottom: 20px;
}

.youtube-video {
	width: 100%;
	max-width: 100%;
	height: auto;
	border-radius: 10px;
	margin-top: 10px;
	margin-bottom: 20px;
	border: 10px solid rgba(255, 255, 255, 0.2); /* Adicione uma borda grossa com transparência */
	box-shadow: 0 0 20px rgba(255, 255, 255, 0.4); /* Adicione um efeito de sombra */
}

h2 {
	color: #272626;
	font-size: 1.5em;
	margin-bottom: 10px;
}
</style>
