import { Component, Vue } from "vue-property-decorator";

@Component
export default class LoadingMixin extends Vue {
  public isLoading = false;

  public changeLoadingStatus(isLoading: boolean) {
    console.log("我被执行了");
    this.isLoading = isLoading;
  }
}
