import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Article from "@/components/Article.vue";
import PostList from "@/components/PostList.vue";
import UserInfo from "@/components/UserInfo.vue";
import SlideBar from "@/components/SlideBar.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Index",
    components: {
      main: PostList
    }
  },
  {
    path: "/topic/:id&loginName=:loginName",
    name: "Article",
    components: {
      main: Article,
      slideBar: SlideBar
    }
  },
  {
    path: "/user/:loginName",
    name: "UserInfo",
    components: {
      main: UserInfo
    }
  }
];

const router = new VueRouter({
  routes
});

export default router;
