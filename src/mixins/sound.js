const Sound = {
  data() {
    return {
      store: this.$store,
    };
  },
  methods: {
    playSound(triggerElement, section) {
      if (this.store.state.sound) {
        const audio = new Audio();
        if (triggerElement === "piramide") {
          audio.src = require(`@/assets/audio/${section}/piramide.mp3`);
        }
        if (triggerElement === "cine") {
          audio.src = require(`@/assets/audio/${section}/luna.mp3`);
        }
        if (triggerElement === "tv") {
          audio.src = require(`@/assets/audio/${section}/rayo.mp3`);
        }
        if (triggerElement === "albums") {
          audio.src = require(`@/assets/audio/${section}/cristales.mp3`);
        }
        if (triggerElement === "sesiones") {
          audio.src = require(`@/assets/audio/${section}/fuego.mp3`);
        }
        if (triggerElement === "teatro") {
          audio.src = require(`@/assets/audio/${section}/constelacion.mp3`);
        }
        if (triggerElement === "contenido") {
          audio.src = require(`@/assets/audio/${section}/agua.mp3`);
        }
        if (triggerElement === "contacto") {
          audio.src = require(`@/assets/audio/${section}/contacto.mp3`);
        }
        audio.play();
      }
    },
  },
};
export default Sound;
