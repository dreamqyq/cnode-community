import { Component, Vue } from "vue-property-decorator";

@Component
export default class LoadingMixin extends Vue {
  public isLoading = false;

  public changeLoadingStatus(isLoading: boolean) {
    this.isLoading = isLoading;
  }
}
