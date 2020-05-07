<script lang="tsx">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";

@Component({
  components: { Header }
})
export default class App extends Vue {
  protected render() {
    return (
      <div id="app">
        <Header />
        <main>
          <router-view name="main"></router-view>
          <router-view name="slideBar"></router-view>
        </main>
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
  text-align: center;
  color: #2c3e50;
}
a {
  text-decoration: none;
}
</style>
