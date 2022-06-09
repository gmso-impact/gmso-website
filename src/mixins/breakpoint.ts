import debounce from "lodash/debounce";
import { mapGetters, mapActions, mapMutations } from "vuex";

const breakpoint = {
  mounted() {
    const checkCurrentSize = () => {
      this.setBreakpoint();
    };
    window.addEventListener("resize", debounce(checkCurrentSize, 200));
    this.setBreakpoint();
  },
  computed: {
    ...mapGetters({
      getBreakpoints: "getBreakpoints",
      getWidth: "getWidth",
    }),
  },
  methods: {
    ...mapActions({ setBreakpoint: "setBreakpoint" }),
  },
};

export default breakpoint;
