import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Article from "@/components/Article.vue";
import PostList from "@/components/PostList.vue";

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
    path: "/topic/:id",
    name: "Article",
    components: {
      main: Article
    }
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
