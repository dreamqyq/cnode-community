<script lang="tsx">
import { Component, Mixins, Watch } from "vue-property-decorator";
import Loading from "@/components/Loading.vue";
import ReplyBox from "@/components/ReplyBox.vue";
import LoadingMixin from "@/mixins/LoadingMixin";
import { getTopicDetail } from "@/api";
import { TopicDetailEntity } from "@/types/responseEntity";
import { emptyTopicDetailEntity } from "@/types/factoryMethods";
import { formatDate, formatTabName } from "@/utils/utils";

@Component({
  components: { Loading, ReplyBox }
})
export default class Article extends Mixins(LoadingMixin) {
  $refs!: {
    loading: Loading;
  };
  @Watch("$route")
  private onRouteChange() {
    this.initData();
  }

  protected render() {
    return (
      <div class="article-wrap">
        <loading
          ref="loading"
          onChangeLoadingStatus={this.changeLoadingStatus}
        />
        <article v-show={!this.isLoading}>
          <header>
            <h1>{this.topicDetail.title}</h1>
            <p>
              <span>• 发布于 {formatDate(this.topicDetail.create_at)}</span>
              <span>
                <router-link
                  class="link"
                  to={{
                    name: "UserInfo",
                    params: { loginName: this.topicDetail.author.loginname }
                  }}
                >
                  • 作者
                  {this.topicDetail.author.loginname}
                </router-link>
              </span>
              <span>{this.topicDetail.visit_count} 次浏览</span>
              <span>
                • 最后一次编辑 {formatDate(this.topicDetail.last_reply_at)}
              </span>
              <span>• 来自于 {formatTabName(this.topicDetail.tab, true)}</span>
            </p>
          </header>
          <main
            domPropsInnerHTML={this.topicDetail.content}
            class="markdown-body"
          >
            loading💤💤
          </main>
        </article>
        <reply-box
          replyList={this.topicDetail.replies}
          v-show={!this.isLoading}
        />
      </div>
    );
  }

  private topicId?: string;
  private topicDetail: TopicDetailEntity = emptyTopicDetailEntity();

  public mounted() {
    this.initData();
  }

  public async initData() {
    this.topicId = this.$route.params.id;
    this.$refs.loading.showLoading();
    this.topicDetail = await getTopicDetail(this.topicId);
    this.$refs.loading.closeLoading();
  }
}
</script>

<style lang="scss" scoped>
@import "~@/style";
.article-wrap {
  @include widthLimit(0.75);
  flex: 1;

  article {
    background: #fff;
    margin-bottom: 10px;
    header {
      padding: 15px;
      border-bottom: 1px solid #ccc;
      h1 {
        text-align: left;
        font-size: 22px;
        font-weight: bold;
        margin-bottom: 10px;
      }
      p > span {
        font-size: 12px;
        color: #838383;
        display: inline-block;
        margin: 0 5px;
        .link {
          color: #0c82df;
        }
      }
    }
    > main {
    }
  }
}
</style>
