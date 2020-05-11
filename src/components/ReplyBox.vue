<script lang="tsx">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Reply } from "@/types/responseEntity";
import ReplyItem from "@/components/ReplyItem.vue";
@Component({
  components: { ReplyItem }
})
export default class ReplyBox extends Vue {
  @Prop(Array)
  public readonly replyList!: Reply[];
  protected render() {
    return (
      <div class="reply-box">
        <header>{this.replyList.length} 回复</header>
        <ul class="reply-list">
          {this.replyList.map((item, index) => {
            return <reply-item reply={item} index={index} />;
          })}
        </ul>
      </div>
    );
  }
}
</script>

<style lang="scss" scoped>
.reply-box {
  margin: 15px 0;
  background: #fff;
  border-radius: 10px 10px 0 0;

  header {
    padding: 10px;
    background-color: #f6f6f6;
    border-radius: 8px 8px 0 0;
    height: 16px;
    font-size: 14px;
    font-weight: bold;
    margin-top: 10px;
  }
}
</style>
