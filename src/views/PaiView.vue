<template>
	<div class="hello">
		<div id="myModal" class="modal">
			<div class="modal-content">
				<div class="container-close">
					<span class="close" @click="redirectToRoot">&times;</span>
				</div>
				<h2>Digite a senha:</h2>
				<input type="password" v-model="password" class="modal-input">
				<button @click="checkPassword" class="modal-button">Enviar</button>
			</div>
		</div>
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
	data() {
		return {
			password: '',
			videoOptions: {
				autoplay: false,
				controls: true,
			},
			videos: [
				{
					src  : 'https://filemoon.sx/e/u4prasn5nanl', // Exemplo de URL de vídeo do YouTube
					type : 'youtube',
					name : 'Bons Companheiros',
				},
				{
					src  : 'https://filemoon.sx/e/djysbb7z7djt', // Exemplo de URL de vídeo do YouTube
					type : 'youtube',
					name : 'Aquaman 2: O reino perdido',
				},
				{
					src  : 'https://filemoon.sx/e/anhyh0572pts', // Exemplo de URL de vídeo do YouTube
					type : 'youtube',
					name : 'Lift: Roub o nas alturas',
				},
			],
		};
	},
	methods: {
		showModal() {
			const modal = document.getElementById('myModal');
			modal.style.display = 'block';
		},
		closeModal() {
			const modal = document.getElementById('myModal');
			modal.style.display = 'none';
		},
		checkPassword() {
			if (this.password === 'nego0809') {
				this.closeModal();
			} else {
				alert('Senha incorreta!');
			}
		},
		redirectToRoot() {
			window.location.href = './';
		},
		onPlay() {
			console.log('Video playing');
		},
		onPause() {
			console.log('Video paused');
		},
		onEnded() {
			console.log('Video ended');
		},
		extractVideoTitle(video) {
			const fileNameWithoutExtension = video.name ? video.name : video.src.split('/').pop().split('.').slice(0, -1).join('.');
			return fileNameWithoutExtension;
		},
	},
	mounted() {
		this.showModal();

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
	border: 10px solid rgba(255, 255, 255, 0.2);
	box-shadow: 0 0 20px rgba(255, 255, 255, 0.4);
}

h2 {
	color: #272626;
	font-size: 1.5em;
	margin-bottom: 10px;
}

.modal {
	display: none;
	position: fixed;
	z-index: 1;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
	background-color: #fefefe;
	margin: 15% auto;
	padding: 20px;
	border: 1px solid #888;
	border-radius: 10px;
	width: 80%;
}

container-close{
	display: flex;
	align-items: end;
}
.close {
	color: #aaa;
	font-size: 28px;
	font-weight: bold;
	cursor: pointer;
	float: right;
	/* Ajuste para ficar à direita */
}

.close:hover,
.close:focus {
	color: black;
	text-decoration: none;
}

.modal-input {
	width: 100%;
	padding: 12px 20px;
	margin: 8px 0;
	box-sizing: border-box;
	border: 1px solid #ccc;
	border-radius: 5px;
}

.modal-button {
	background-color: #4CAF50;
	color: white;
	padding: 14px 20px;
	margin: 8px 0;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	width: 100%;
}

.modal-button:hover {
	background-color: #45a049;
}
</style>
