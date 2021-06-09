let vm = Vue.createApp({
	data() {
		return {
			perspective: 100,
			rotateX: 0,
			rotateY: 0,
			rotateZ: 0,
		};
	},
	computed: {
		box() {
			return {
				transform: `
          perpective(${this.perspective}px)
          rotate(${this.rotateX}deg)
          rotate(${this.rotateY}deg)
          rotate(${this.rotateZ}deg)
        `,
			};
		},
	},
	methods: {
		reset() {
			this.perspective = 100;
			this.rotateX = 0;
			this.rotateY = 0;
			this.rotateZ = 0;
		},
	},
}).mount("#app");
