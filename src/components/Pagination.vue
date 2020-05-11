<script lang="tsx">
import { Component, Emit, Vue } from "vue-property-decorator";

@Component
export default class Pagination extends Vue {
  private pageBtnList = [1, 2, 3, 4, 5];
  private currentPage = 1;
  private preFlag = false;

  protected render() {
    return (
      <div class="pagination">
        <button onClick={this.changePageHandler.bind(this, 1)}>首页</button>
        <button
          onClick={this.changePageHandler.bind(this, this.currentPage - 1)}
        >
          上一页
        </button>
        {this.preFlag ? <button class="pageBtn">......</button> : ""}
        {this.pageBtnList.map(page => {
          return (
            <button
              onClick={this.changePageHandler.bind(this, page)}
              class={[{ currentPage: page === this.currentPage }, "pageBtn"]}
            >
              {page}
            </button>
          );
        })}
        <button class="pageBtn">......</button>
        <button
          onClick={this.changePageHandler.bind(this, this.currentPage + 1)}
        >
          下一页
        </button>
      </div>
    );
  }

  public changePageHandler(page: number) {
    this.currentPage = page > 0 ? page : 1;
    this.preFlag = page > 4;
    if (page === this.pageBtnList[4]) {
      this.pageBtnList.shift(); //移除第一个元素
      this.pageBtnList.splice(4, 0, this.pageBtnList[3] + 1); //添加最后一个
    } else if (page === this.pageBtnList[0] && page !== 1) {
      //先在第一个位置加一个
      this.pageBtnList.unshift(this.pageBtnList[0] - 1);
      //移除最后一个数字
      this.pageBtnList.splice(5, 1);
    } else if (page === 1) {
      this.pageBtnList = [1, 2, 3, 4, 5];
    }
    this.pageHandler();
  }

  @Emit("pageHandler")
  pageHandler() {
    return this.currentPage;
  }
}
</script>

<style scoped lang="scss">
.pagination {
  margin-top: 5px;
  margin-bottom: 20px;
  background-color: white;
  padding: 6px 20px;
  border-radius: 5px;
  border: 1px solid #888888;
}

button {
  background-color: #fff;
  border: 1px solid #ddd;
  color: #778087;
  border-radius: 3px;
  outline: none;
  cursor: pointer;
  padding: 0 2px;
  width: 55px;
  height: 29px;
  margin: 0 2px;
}

.pageBtn {
  position: relative;
  bottom: 1px;
  width: 40px;
  margin: 0 4px;
}

.currentPage {
  color: white;
  background-color: #1f1b1b;
}
</style>
