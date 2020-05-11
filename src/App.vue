<script lang="tsx">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

@Component({
  components: { Header, Footer }
})
export default class App extends Vue {
  protected render() {
    return (
      <div id="app">
        <Header />
        <main>
          <div class="main-wrap">
            <router-view name="main" />
            <router-view name="slideBar" />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}
</script>

<style lang="scss">
@import "~@/style";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #e1e1e1;
  display: flex;
  flex-direction: column;
  height: 100vh;
  > main {
    display: flex;
    justify-content: center;
    flex: 1;
    > .main-wrap {
      @include widthLimit(1);
      display: flex;
      flex: 1;
      justify-content: space-between;
      padding-top: 10px;
    }
    overflow: auto;
  }
}
a {
  text-decoration: none;
}
.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 1400px;
  margin: 0 auto;
  padding: 45px;
  p {
    white-space: pre-wrap;
  }
}

@media (max-width: 767px) {
  .markdown-body {
    padding: 15px;
  }
}
</style>
