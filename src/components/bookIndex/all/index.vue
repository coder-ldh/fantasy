<template>
  <div id="willPlaying">
    <loading v-if="isLoading"></loading>
    <scroller v-else>
      <ul>
        <li class="box" v-for="item in comingList" :key="item.id">
          <div class="img">
            <img :src="item.BookImageUrl | imgFormat('128.180')" alt>
          </div>
          <div class="info">
            <h2>
              {{ item.BookName }}
              <!-- <img src="../../assets/max.png" alt> -->
            </h2>
            <p>
              影评：
              <span>{{ item.BookIntro!==0?item.BookIntro:'暂未上映' }}</span>
            </p>
            <p>作者: {{ item.BookAuthor }}</p>
            <p>{{ item.BookIntro!==''?item.BookIntro:'暂无消息' }}</p>
          </div>
          <div class="buy">
            <button>点赞</button>
          </div>
        </li>
      </ul>
    </scroller>
  </div>
</template>

<script>
export default {
  name: "willPlaing",
  data() {
    return {
      comingList: [],
      isLoading: true,
      cityId: -1 // 优化数据请求
    };
  },
  activated() {
    this.isLoading = true;
    // 获取数据
    this.axios.get("http://localhost:9090/book/list").then(res => {
      if (res.status === 200) {
        this.comingList = res.data.data;
        // 将loading取消
        this.isLoading = false;
        // 将当前id 复制给 优化id
      }
    });
  }
};
</script>

<style lang="scss" scoped>
#willPlaying {
  flex: 1;
  height: 100%;
  padding: 0 10px;
  ul {
    padding-top: 80px;
    padding-bottom: 60px;
    overflow: auto;
  }
  .box {
    display: flex;
    // height: 1px;
    align-self: center;
    margin: 15px 0;
  }
  .img {
    width: 64px;
    height: 90px;
    img {
      width: 100%;
      height: auto;
    }
  }
  .info {
    flex: 1;
    margin-left: 10px;
    position: relative;
    h2 {
      width: 150px;
      margin-bottom: 15px;
      font-weight: 500;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      img {
        position: absolute;
        top: 0;
        right: 10px;
        width: 50px;
      }
    }
    p {
      width: 200px;
      margin: 10px 0;
      font-size: 12px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      span {
        color: coral;
      }
    }
  }
  .buy {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    button {
      border: 0;
      width: 47px;
      height: 28px;
      color: #fff;
      border-radius: 4px;
      background-color: red;
    }
  }
}
</style>
