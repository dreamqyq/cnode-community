<script lang="tsx">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Footer extends Vue {
  protected render() {
    return (
      <footer>
        <p>
          &copy; 2020 Designed By Enoch Qin
          <a href="https://github.com/dreamqyq/cnode-community" target="_blank">
            源码链接 GitHub >>
          </a>
        </p>
      </footer>
    );
  }
}
</script>

<style lang="scss" scoped>
footer {
  text-align: center;
  background: #000;
  padding: 20px;
  color: #fff;
  font-weight: bold;

  a {
    display: inline-block;
    margin: 0 10px;
    color: #0c82df;
  }
}
</style>
