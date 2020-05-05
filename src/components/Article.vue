<script lang="tsx">
import { Component, Mixins } from "vue-property-decorator";
import Loading from "@/components/Loading";
import LoadingMixin from "@/mixins/LoadingMixin";

@Component({
  components: { Loading }
})
export default class Article extends Mixins(LoadingMixin) {
  $refs!: {
    loading: Loading;
  };
  protected render() {
    return (
      <div class="article-wrap">
        <loading
          ref="loading"
          onChangeLoadingStatus={this.changeLoadingStatus}
        />
        <article v-show={this.isLoading}>1</article>
      </div>
    );
  }
}
</script>
