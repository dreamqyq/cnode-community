<script lang="tsx">
import { Component, Prop, Vue } from "vue-property-decorator";
import { formatDate, formatTabName } from "@/utils/utils";
import { TopicListItem } from "@/types/type";

@Component
export default class PostListItem extends Vue {
  @Prop(Object)
  public readonly topicDetail!: TopicListItem;

  protected render() {
    return (
      <div class="topicItem">
        <img src={this.topicDetail.avatarUrl} alt="avatar" />
        <div class="center">
          <span class="count">
            <span>{this.topicDetail.replyCount}</span> /
            <span>{this.topicDetail.visitCount}</span>
          </span>
          <span class={["tab", { top: this.topicDetail.top }]}>
            {formatTabName(this.topicDetail)}
          </span>
          <router-link
            class="topicItemLink"
            to={{ name: "Article", params: { id: this.topicDetail.id } }}
          >
            <span class="title">{this.topicDetail.title}</span>
          </router-link>
        </div>
        <span class="time">{formatDate(this.topicDetail.lastReplyAt)}</span>
      </div>
    );
  }
}
</script>

<style lang="scss" scoped>
.topicItem {
  box-sizing: border-box;
  width: 100%;
  text-align: left;
  display: flex;
  align-content: center;
  padding: 10px;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  margin: 5px 0;
  img {
    width: 30px;
  }
  span {
    line-height: 30px;
  }
  .center {
    flex: 1;
    padding: 0 10px;
    span.count {
      padding: 0 5px;
      display: inline-block;
      width: 68px;
      text-align: center;
      font-size: 12px;
      span:first-child {
        color: #9e78c0;
        font-weight: bold;
      }
      span:last-child {
        color: gray;
      }
    }
    span.tab {
      display: inline-block;
      color: gray;
      margin: 0 10px 0 5px;
      font-size: 14px;
      width: 40px;
      text-align: center;
      background: #eee;
      border-radius: 5px;
      &.top {
        background: #80bd01;
        color: #fff;
      }
    }
    .topicItemLink {
      color: #333;
      &:visited {
        color: #888;
      }
      span.title {
      }
    }
  }
}
</style>
