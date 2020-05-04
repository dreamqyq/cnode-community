<template>
  <div class="home">
    <Header />
    <PostList></PostList>
  </div>
</template>

<script>
import Header from "@/components/Header";
import PostList from "@/components/PostList";

export default {
  name: "Home",
  components: {
    Header,
    PostList
  }
};
</script>
