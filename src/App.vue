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
          <router-view name="main" />
          <router-view name="slideBar" />
        </main>
        <Footer />
      </div>
    );
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #e1e1e1;
  display: flex;
  flex-direction: column;
  height: 100vh;
  text-align: center;
  main {
    display: flex;
    flex: 1;
    overflow: auto;
  }
}
a {
  text-decoration: none;
}
.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding: 45px;
}

@media (max-width: 767px) {
  .markdown-body {
    padding: 15px;
  }
}
</style>
