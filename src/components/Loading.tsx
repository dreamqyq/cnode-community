import { Component, Emit, Vue } from "vue-property-decorator";

@Component
export default class Loading extends Vue {
  public isLoading = false;
  public imgLoading = require("@/assets/loading.gif");

  protected render() {
    return <img src={this.imgLoading} alt="loading" v-show={this.isLoading} />;
  }

  public showLoading() {
    this.changeLoadingStatus(true);
  }

  public closeLoading() {
    this.changeLoadingStatus(false);
  }

  @Emit("changeLoadingStatus")
  changeLoadingStatus(isLoading: boolean) {
    this.isLoading = isLoading;
    return isLoading;
  }
}
