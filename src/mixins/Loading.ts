import { Component, Vue } from "vue-property-decorator";
@Component
export default class Loading extends Vue {
  public isLoading = false;
  public imgLoading = require("@/assets/loading.gif");
}
