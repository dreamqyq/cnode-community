<script lang="tsx">
import { Component, Mixins } from "vue-property-decorator";
import Loading from "@/mixins/Loading.ts";

@Component
export default class Article extends Mixins(Loading) {
  protected render() {
    return (
      <div class="article-wrap">
        <img src={this.imgLoading} alt="loading" v-show={this.isLoading} />
        <article v-show={this.isLoading}>1</article>
      </div>
    );
  }
}
</script>
