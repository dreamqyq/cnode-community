<script lang="tsx">
import { Component, Vue } from "vue-property-decorator";
import { getTopicLists } from "@/api";
import { topicListItem } from "@/type";

@Component
export default class PostList extends Vue {
  protected render() {
    return (
      <div class="post-list-wrap">
        <nav class="tips-nav"></nav>
        <div class="post-list">
          {this.isLoading ? (
            <img src={this.imgLoading} alt="loading" />
          ) : (
            <ul class="lists">
              <li>1</li>
            </ul>
          )}
        </div>
      </div>
    );
  }

  private isLoading = false;
  private imgLoading = require("@/assets/loading.gif");
  private topicLists: Array<topicListItem> = new Array<topicListItem>();

  public mounted() {
    this.initData();
  }

  public async initData() {
    await getTopicLists({
      limit: 10,
      page: 1
    }).then(response => {
      response.map(item => {
        this.topicLists.push({
          avatarUrl: item.author.avatar_url,
          good: item.good,
          lastReplyAt: item["last_reply_at"],
          replyCount: item["reply_count"],
          tab: item.tab,
          title: item.title,
          top: item.top,
          visitCount: item.visit_count
        });
      });
    });
  }
}
</script>
<style lang="scss" scoped>
@import "~@/style";
.post-list-wrap {
  @include flexCenter;
  margin: 20px 0;
  .post-list {
    @include contentWidth;
    justify-content: center;
    border: 1px solid red;

    ul.lists {
      width: 100%;
    }
  }
}
</style>
