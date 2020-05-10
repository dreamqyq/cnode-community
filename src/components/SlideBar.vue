<script lang="tsx">
import { Component, Mixins } from "vue-property-decorator";
import { UserInfoEntity } from "@/types/responseEntity";
import { emptyUserInfo } from "@/types/factoryMethods";
import { getUserInfo } from "@/api";
import VForMixin from "@/mixins/VForMixin";

@Component
export default class SlideBar extends Mixins(VForMixin) {
  protected render() {
    return (
      <div class="author-info">
        <div class="author-summary">
          <div class="top-bar">作者</div>
          <div class="content">
            <router-link
              to={{
                name: "UserInfo",
                params: {
                  name: this.userInfo.loginname
                }
              }}
            >
              <img
                src={this.userInfo.avatar_url}
                alt={this.userInfo.loginname}
              />
            </router-link>
            <div class="detail">
              <router-link
                to={{
                  name: "UserInfo",
                  params: {
                    name: this.userInfo.loginname
                  }
                }}
              >
                <span>{this.userInfo.loginname}</span>
              </router-link>
              <p>积分 {this.userInfo.score}</p>
            </div>
          </div>
        </div>
        <div class="recent_topics">
          <div class="top-bar">作者最近主题</div>
          <ul>{this.mapListAndReturnElement(this.topicListLimit5)}</ul>
        </div>
        <div class="recent_replies">
          <div class="top-bar">作者最近回复</div>
          <ul>{this.mapListAndReturnElement(this.replyListLimit5)}</ul>
        </div>
      </div>
    );
  }

  private loginName = "";
  private userInfo: UserInfoEntity = emptyUserInfo();

  public async mounted() {
    this.loginName = this.$route.params.loginName;
    this.userInfo = await getUserInfo(this.loginName);
  }
  public get topicListLimit5() {
    return this.userInfo.recent_topics.slice(0, 5);
  }
  public get replyListLimit5() {
    return this.userInfo.recent_replies.slice(0, 5);
  }
}
</script>

<style lang="scss" scoped>
.author-info {
  width: 328px;
  margin-top: 0;
  .author-summary,
  .recent_replies,
  .recent_topics {
    background-color: #fff;
  }
  .author-summary {
    .content {
      display: flex;
      align-items: center;
      .detail {
        a {
          color: #0a6ebd;
          display: inline-block;
          margin-bottom: 10px;
        }
      }
    }
  }
}
li {
  padding: 3px 0;
}
.recent_replies ul,
.recent_topics ul {
  margin-top: 0;
  margin-bottom: 0;
  list-style: none;
  padding-left: 14px;
}

ul a {
  font-size: 12px;
  text-decoration: none;
  color: #778087;
}

.top-bar {
  padding: 10px;
  background-color: #f6f6f6;
  height: 16px;
  font-size: 12px;
  margin-top: 10px;
}

img {
  height: 48px;
  width: 48px;
  border-radius: 3px;
  margin: 10px;
}

.loginname {
  width: 100px;
  float: right;
  margin-top: 22px;
  margin-right: 159px;
  font-size: 14px;
}

.loginname a {
  text-decoration: none;
  color: #778087;
}

.author-summary .top-bar {
  margin-top: 0;
}
</style>
