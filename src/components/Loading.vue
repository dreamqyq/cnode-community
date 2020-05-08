<script lang="tsx">
import { Component, Emit, Vue } from "vue-property-decorator";

@Component
export default class Loading extends Vue {
  public isLoading = false;
  public imgLoading = require("@/assets/loading.gif");

  protected render() {
    return (
      <div class="mask" v-show={this.isLoading}>
        <img src={this.imgLoading} alt="loading" />
      </div>
    );
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
</script>
<style lang="scss" scoped>
@import "~@/style";
.mask {
  @include flexCenter;
  height: 80vh;
  width: 100vw;
}
</style>
