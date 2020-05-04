<script lang="tsx">
import { Component, Vue } from "vue-property-decorator";
import { getTopicLists } from "@/api";
import { NavItem, topicListItem } from "@/type";
import PostListItem from "@/components/PostListItem.vue";

@Component({
  components: {
    PostListItem
  }
})
export default class PostList extends Vue {
  protected render() {
    return (
      <div class="post-list-wrap">
        <nav class="tips-nav">
          <ul>
            {this.tabLists.map(item => {
              return (
                <li>
                  <a href={item.url}>{item.txt}</a>
                </li>
              );
            })}
          </ul>
        </nav>
        <div class="post-list">
          {this.isLoading ? (
            <img src={this.imgLoading} alt="loading" />
          ) : (
            <ul class="lists">
              {this.topicLists.map(item => {
                return <post-list-item topicDetail={item} />;
              })}
            </ul>
          )}
        </div>
      </div>
    );
  }

  private isLoading = false;
  private imgLoading = require("@/assets/loading.gif");
  private topicLists: Array<topicListItem> = new Array<topicListItem>();
  private tabLists: Array<NavItem> = [
    {
      txt: "全部",
      url: "/"
    },
    {
      txt: "精华",
      url: "/"
    },
    {
      txt: "分享",
      url: "/"
    },
    {
      txt: "问答",
      url: "/"
    },
    {
      txt: "招聘",
      url: "/"
    }
  ];

  public mounted() {
    this.initData();
  }

  public async initData() {
    this.isLoading = true;
    await getTopicLists({
      limit: 40,
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
      this.isLoading = false;
    });
  }
}
</script>
<style lang="scss" scoped>
@import "~@/style";
.post-list-wrap {
  @include flexCenter;
  flex-direction: column;
  margin: 20px 0;
  .tips-nav {
    @include widthLimit;
    justify-content: flex-start;
    border: 1px solid;
    ul {
      display: flex;
      flex-direction: row;
      color: #80bd01;
    }
  }
  .post-list {
    @include contentWidth;
    justify-content: center;

    ul.lists {
      width: 100%;
    }
  }
}
</style>
