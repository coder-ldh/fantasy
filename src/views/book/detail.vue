<template>
  <div id="detail">
    <Header title="详情">
      <i class="back" @touchstart="handleTOBack"></i>
    </Header>
    <div class="content">
      <!-- 影片介绍 -->
      <div class="content-detail">
        <div
          class="content-bg"
          :style="{ 'background-image' : 'url('+ 'http://img2.imgtn.bdimg.com/it/u=1884987646,3498928628&fm=26&gp=0.jpg'.replace(/w\.h/,'148.208') +')' }"
        ></div>
        <div class="content-filter"></div>
        <div class="content-info">
          <div class="detail-list-img">
            <img :src="'http://img2.imgtn.bdimg.com/it/u=1884987646,3498928628&fm=26&gp=0.jpg'.replace(/w\.h/,'108.150')">
          </div>
          <div class="detail-list-info">
            <h2>{{ book.BookName }}</h2>
            <p>{{ book.BookAuthor }}</p>
            <!-- <p>{{ book.sc }}</p>
            <p>{{ book.cat }}</p>
            <p>{{ book.fra }} / {{ book.dur }}分钟</p> -->
            <!-- <p>{{ book.BookIntro }}</p> -->
          </div>
        </div>
      </div>
      <!-- 介绍 -->
      <div class="introduce">
        <p>简介 :</p>
        <p>{{ book.BookIntro }}</p>
      </div>
      <!-- 图片展示 -->
      <div class="swiper-container" ref="detail_player">
        <ul class="swiper-wrapper">
          <li class="swiper-slide" v-for="(list,index) in book.photos" :key="index">
              <img
                :src="list | imgFormat('140.127')"
              >
          </li>
       
     
        
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header";
import BScroll from "better-scroll";
export default {
  name: "detail",
  data() {
    return {
      book: {}
    };
  },
  props: ["bookId"],
  components: {
    Header
  },
  mounted() {
    // 这种方式也可以传递id过来，在组件中使用 $route 会使之与其对应路由形成高度耦合，从而使组件只能在某些特定的 URL 上使用，限制了其灵活性。
    // console.log(this.movieId)
    // 接受到id ,可以将详情页数据获取
    this.axios
      .get("http://localhost:9090/book/detail/" + this.$route.params.bookId)
      .then(res => {
        // console.log(res.data.data.detailMovie);
        if (res.status === 200) {
          this.book = res.data.data;
          this.$nextTick(() => {
            new BScroll(this.$refs.detail_player, {
              scrollX: true,
              probeType: 1
            });
          });
        }
      });
  },
  methods: {
    handleTOBack() {
      //   console.log('ok')
      // window.location.href(-1)
      // 返回上一级的api
      this.$router.back();
    }
  }
};
</script>

<style lang="scss" scoped>
#detail {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  z-index: 100;
  background-color: #fff;

  .back {
    border-left: 10px solid transparent;
    height: 0px;
    border-right: 10px solid #fff;
    border-bottom: 8px solid transparent;
    border-top: 8px solid transparent;
    position: absolute;
    top: 10px;
    left: 5px;
  }
  .content {
    flex: 1;
    overflow: auto;
    margin-bottom: 50px;
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    // 影片介绍
    .content-detail {
      position: relative;
      width: 100%;
      height: 200px;
      overflow: hidden;
      .content-bg {
        width: 100%;
        height: 200px;
        background: 0 40%;
        -webkit-filter: blur(20px);
        filter: blur(20px);
        background-size: cover;
        position: absolute;
        left: 0;
        top: 0;
      }
      .content-filter {
        width: 100%;
        height: 100%;
        background-color: #40454d;
        opacity: 0.55;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
      }
      .content-info {
        display: flex;
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 2;
        .detail-list-img {
          width: 108px;
          height: 150px;
          border: 1px solid #f0f2f3;
          margin: 20px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .detail-list-info {
          margin-top: 20px;
          h2 {
            font-size: 20px;
            color: #fff;
            font-weight: 400;
            line-height: 40px;
          }
          p {
            color: #fff;
            line-height: 20px;
            font-size: 14px;
            color: #ccc;
          }
        }
      }
    }
    .introduce {
      margin: 10px;
      p {
        font-size: 18px;
        //   margin-top:5px;
        line-height: 20px;
      }
    }
    .swiper-container {
      width: 100%;
      height: 100px;
      overflow: hidden;
      .swiper-wrapper {
        // width: 100%;
        width: 1768px;
        display: flex;
        flex: 1;
      }
      li {
        width: 140px;
        height: 127px;
        margin: 0 20px;
        flex-shrink: 0;
        box-shadow: 3px 3px 10px 3px #ddd;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
