import { Component, Vue } from "vue-property-decorator";

@Component
export default class Loading extends Vue {
  public isLoading = false;
  public imgLoading = require("@/assets/loading.gif");

  protected render() {
    return <img src={this.imgLoading} alt="loading" v-show={this.isLoading} />;
  }

  public showLoading() {
    this.isLoading = true;
    this.$emit("changeLoadingStatus", this.isLoading);
  }

  public closeLoading() {
    this.isLoading = false;
    this.$emit("changeLoadingStatus", this.isLoading);
  }
}
