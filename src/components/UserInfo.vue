<script lang="tsx">
import { Component, Mixins } from "vue-property-decorator";
import Loading from "@/components/Loading.vue";
import { emptyUserInfo } from "@/types/factoryMethods";
import { getUserInfo } from "@/api";
import { UserInfoEntity } from "@/types/responseEntity";
import { formatDate } from "@/utils/utils";
import VForMixin from "@/mixins/VForMixin";

@Component({
  components: { Loading }
})
export default class UserInfo extends Mixins(Loading, VForMixin) {
  $refs!: { loading: Loading };
  protected render() {
    return (
      <div class="user-info-wrap">
        <loading
          ref="loading"
          onChangeLoadingStatus={this.changeLoadingStatus}
        />
        <div class="user-info" v-show={!this.isLoading}>
          <section>
            <img src={this.userInfo.avatar_url} alt={this.userInfo.loginname} />
            <span class="name">{this.userInfo.loginname}</span>
            <p>积分：{this.userInfo.score}</p>
            <p class="time">
              注册时间：
              {formatDate(this.userInfo.create_at)}
            </p>
          </section>
          <div class="replies">
            <p>回复的主题</p>
            <ul>
              {this.mapListAndReturnElement(this.userInfo.recent_replies)}
            </ul>
          </div>
          <div class="topics">
            <p>创建的主题</p>
            <ul>{this.mapListAndReturnElement(this.userInfo.recent_topics)}</ul>
          </div>
        </div>
      </div>
    );
  }

  private loginName = "";
  private userInfo: UserInfoEntity = emptyUserInfo();

  public mounted() {
    this.loginName = this.$route.params.loginName;
    this.initData();
  }

  public async initData() {
    this.$refs.loading.showLoading();
    this.userInfo = await getUserInfo(this.loginName);
    this.$refs.loading.closeLoading();
  }
}
</script>

<style lang="scss" scoped>
@import "~@/style";
.user-info-wrap {
  @include widthLimit;
  margin: 5px auto;
  flex: 1;
  .user-info {
    background: white;
    width: 100%;
    margin: 10px auto;
    section {
      padding: 12px;
      span.name {
        display: inline-block;
        margin: 10px;
        vertical-align: top;
      }
      p {
        margin: 5px 0;
        &.time {
          color: grey;
          font-size: 13px;
        }
      }
    }
    img {
      width: 40px;
    }
    li {
      list-style: none;
    }
    .replies,
    .topics {
      font-size: 13px;
      border-top: 10px #dddddd solid;
    }
    div > p {
      padding: 12px 0 12px 12px;
      background-color: rgba(212, 205, 205, 0.17);
      font-size: 0.75rem;
      margin: 0;
    }
    div > ul > li {
      padding: 4px 0 4px 30px;
      white-space: nowrap;
      font-size: 13px;
      text-overflow: ellipsis;
      overflow: hidden;
      line-height: 30px;
      vertical-align: middle;
      border-bottom: 1px solid #f0f5f8;
    }
    div > ul > li > a {
      color: #094e99;
      text-decoration: none;
    }
  }
}
</style>
