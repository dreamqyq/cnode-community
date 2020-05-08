<script lang="tsx">
import { Component, Mixins } from "vue-property-decorator";
import Loading from "@/components/Loading";
import LoadingMixin from "@/mixins/LoadingMixin";
import { getTopicDetail } from "@/api";
import { TopicDetailEntity } from "@/types/responseEntity";
import { emptyTopicDetailEntity } from "@/types/factoryMethods";

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
        <article
          v-show={!this.isLoading}
          domPropsInnerHTML={this.topicDetail.content}
        ></article>
      </div>
    );
  }

  private topicId?: string;
  private topicDetail: TopicDetailEntity = emptyTopicDetailEntity();

  public mounted() {
    this.topicId = this.$route.params.id;
    this.initData();
  }

  public async initData() {
    this.$refs.loading.showLoading();
    this.topicDetail = await getTopicDetail(this.topicId);
    this.$refs.loading.closeLoading();
  }
}
</script>

<style>
@import url("~@/style/markdown-github.css");
</style>
