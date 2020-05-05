<script lang="tsx">
import { Component, Mixins } from "vue-property-decorator";
import { getTopicLists } from "@/api";
import { NavItem, TopicListItem } from "@/type";
import PostListItem from "@/components/PostListItem.vue";
import Loading from "@/components/Loading";
import LoadingMixin from "@/mixins/LoadingMixin";

@Component({
  components: {
    Loading,
    PostListItem
  }
})
export default class PostList extends Mixins(LoadingMixin) {
  $refs!: {
    loading: Loading;
  };

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
          <loading
            ref="loading"
            onChangeLoadingStatus={this.changeLoadingStatus}
          />
          <ul class="lists" v-show={!this.isLoading}>
            {this.topicLists.map(item => {
              return <post-list-item topicDetail={item} />;
            })}
          </ul>
        </div>
      </div>
    );
  }

  private topicLists: Array<TopicListItem> = new Array<TopicListItem>();
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
    this.$refs.loading.showLoading();
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
      this.$refs.loading.closeLoading();
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

    ul {
      display: flex;
      flex-direction: row;

      li {
        margin: 0 5px;

        a {
          color: #80bd01;
        }
      }
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
