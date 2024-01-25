<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<div class="video-container">
			<div v-for="(video, index) in videos" :key="index">
				<h2>
					{{ extractVideoTitle(video) }}
					<i class="fas fa-arrow-down"></i>
				</h2>
				<!-- Verificar se é um vídeo do YouTube -->
				<template v-if="video.type === 'youtube'">
					<iframe width="560" height="315" :src="video.src" frameborder="0" allowfullscreen></iframe>
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
	name: 'HelloWorld',
	props: {
		msg: String
	},
	data() {
		return {
			videoOptions: {
				autoplay: false,
				controls: true,
			},
			videos: [
				{
					src: 'https://www.youtube.com/embed/Srga2h4e8Vw?si=lNsyq9fOtUSCQ75r', // Exemplo de URL de vídeo do YouTube
					type: 'youtube',
				},{
					src: '/assets/videos/Dancing.mp4',
					type: 'video/mp4',
				},
				//AQUI  Adicionar mais vídeos
				{
					src: '/assets/videos/Dance Monkey.mp4',
					type: 'video/mp4',
				},
				{
					src: '/assets/videos/Enemy.mp4',
					type: 'video/mp4',
				},
				{
					src: '/assets/videos/Midorya AMV.mp4',
					type: 'video/mp4',
				},
				{
					src: '/assets/videos/Midorya AMV2.mp4',
					type: 'video/mp4',
				},
				{
					src: '/assets/videos/Mockingbird.mp4',
					type: 'video/mp4',
				},
				{
					src: '/assets/videos/Nightcore.mp4',
					type: 'video/mp4',
				},
				{
					src: '/assets/videos/Oceans.mp4',
					type: 'video/mp4',
				},
				{
					src: '/assets/videos/Sky Full of Stars.mp4',
					type: 'video/mp4',
				},
				{
					src: '/assets/videos/Stay.mp4',
					type: 'video/mp4',
				},
				{
					src: '/assets/videos/Those Eyes.mp4',
					type: 'video/mp4',
				},
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

h2 {
	color: #272626;
	font-size: 1.5em;
	margin-bottom: 10px;
}
</style>
