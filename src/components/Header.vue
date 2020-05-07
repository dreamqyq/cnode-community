<script lang="tsx">
import { Component, Vue } from "vue-property-decorator";
import { NavItem } from "@/types/type";

@Component
export default class Header extends Vue {
  protected render() {
    return (
      <nav class="header">
        <div class="wrap">
          <router-link to="/">
            <img alt="logo" src={this.imgLogo} />
          </router-link>
          <ul class="right-nav">
            {this.navList.map(item => {
              return (
                <li>
                  <a href={item.url} class="navText">
                    {item.txt}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    );
  }
  private imgLogo = require("@/assets/logo.svg");
  private navList: Array<NavItem> = [
    {
      txt: "首页",
      url: "/"
    },
    {
      txt: "新手入门",
      url: "/"
    },
    {
      txt: "API",
      url: "/"
    },
    {
      txt: "关于",
      url: "/"
    },
    {
      txt: "注册",
      url: "/"
    },
    {
      txt: "登陆",
      url: "/"
    }
  ];
}
</script>

<style lang="scss" scoped>
@import "~@/style/index";
.header {
  background: rgb(60, 60, 60);
  @include flexCenter;
  min-width: 960px;
  .wrap {
    @include contentWidth;
    padding: 10px 0;
    justify-content: space-between;
    img {
      height: 30px;
    }
    a.navText {
      color: #fff;
    }
    ul.right-nav {
      @include flexCenter;
      li {
        padding: 0 15px;
      }
    }
  }
}
</style>
