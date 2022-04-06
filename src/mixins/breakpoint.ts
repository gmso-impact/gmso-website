import debounce from "lodash/debounce";
import { mapGetters, mapActions, mapMutations } from "vuex";

const breakpoint = {
  mounted() {
    const checkCurrentSize = () => {
      this.setBreakpoint(window.innerWidth);
    };
    window.addEventListener("resize", debounce(checkCurrentSize, 200));
    checkCurrentSize();
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
