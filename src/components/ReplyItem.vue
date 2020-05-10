<script lang="tsx">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Reply } from "@/types/responseEntity";
import { formatDate } from "@/utils/utils";

@Component
export default class ReplyItem extends Vue {
  @Prop(Object)
  public readonly reply!: Reply;
  @Prop(Number)
  public readonly index!: number;
  protected render() {
    return (
      <div
        class={["reply-item", this.reply.ups.length > 0 ? "good-reply" : ""]}
        id={this.reply.id}
      >
        <router-link to={this.reply.id} class="avatar-link">
          <img
            class="avatar"
            src={this.reply.author.avatar_url}
            alt={this.reply.author.loginname}
          />
          <span>{this.reply.author.loginname}</span>
        </router-link>
        <a class="floor" href={window.location.href}>
          {this.index + 1}楼 ·{formatDate(this.reply.create_at)}
        </a>
        {this.reply.ups.length > 0 ? (
          <span class="support">👍 {this.reply.ups.length}</span>
        ) : (
          ""
        )}
        <div
          class="content markdown-body"
          domPropsInnerHTML={this.reply.content}
        >
          loading💤💤
        </div>
      </div>
    );
  }
}
</script>

<style lang="scss" scoped>
.reply-item {
  padding: 0 10px;
  font-size: 12px;
  border-bottom: 1px solid #f0f0f0;
  position: relative;
  &.good-reply {
    background: #f4fcf0;
  }
  .avatar-link {
    color: #444;
    font-weight: bold;
  }
  img.avatar {
    width: 30px;
    height: 30px;
    position: relative;
    bottom: -15px;
    margin-right: 10px;
  }
  .content {
    padding: 0 10px 0 50px;
    margin-top: 10px;
  }
  .floor {
    display: inline-block;
    margin: 0 5px;
    font-size: 12px;
    color: #08c;
  }
  .support {
    position: absolute;
    top: 5px;
    right: 10px;
    font-size: 15px;
    color: grey;
    height: 20px;
    line-height: 20px;
  }
}
</style>
