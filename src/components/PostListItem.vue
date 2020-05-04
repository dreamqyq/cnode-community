<script lang="tsx">
import { Component, Prop, Vue } from "vue-property-decorator";
import { formatDate } from "@/utils/utils";
import { topicListItem } from "@/type";

@Component
export default class PostListItem extends Vue {
  @Prop(Object)
  public readonly topicDetail!: topicListItem;

  protected render() {
    return (
      <div class="topicItem">
        <img src={this.topicDetail.avatarUrl} alt="avatar" />
        <div class="center">
          <span class="count">
            <span>{this.topicDetail.replyCount}</span> /{" "}
            <span>{this.topicDetail.visitCount}</span>
          </span>
          <span class="tab">{this.topicDetail.tab}</span>
          <span class="title">{this.topicDetail.title}</span>
        </div>
        <span class="time">{formatDate(this.topicDetail.lastReplyAt)}</span>
      </div>
    );
  }

  public mounted() {
    this.initData();
  }

  public initData() {
    console.log(1);
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
      margin: 0 5px;
      width: 50px;
      text-align: center;
      background: #eee;
    }
  }
}
</style>
