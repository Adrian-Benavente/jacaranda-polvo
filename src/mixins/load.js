const PageLoadProgress = {
  created() {
    let perfData = window.performance.timing;
    let estimatedTime = Math.abs(
      perfData.loadEventEnd - perfData.navigationStart
    );
    this.loadTime = Math.round((estimatedTime / 1000) % 60) * 100;
    this.doProgress();
  },
  methods: {
    doProgress() {
      let step = this.loadTime / 100;
      this.interval = setInterval(() => {
        this.loadingPercent++;
      }, step);
    },
  },
  computed: {
    loaded() {
      return this.loadingPercent + "%";
    },
  },
  watch: {
    loadingPercent(val) {
      if (val >= 100) {
        this.completed = true;
        setTimeout(() => (this.remove = true), 700);
        clearInterval(this.interval);
      }
    },
  },
  data() {
    return {
      completed: false,
      remove: false,
      loadingPercent: 0,
      loadTime: 0,
      interval: null,
    };
  },
};
export default PageLoadProgress;
