<template>
  <div class="contai">
    <section class="page_404">
      <div class="container">
        <div class="row" style="width: 40% !important; top: 160px !important">
          <div class="col-sm-12">
            <div class="col-sm-10 col-sm-offset-1 text-center">
              <div class="four_zero_four_bg">
                <h1 class="text-center">404</h1>
              </div>

              <div class="contant_box_404">
                <h3 class="h3">아직 제작 중에 있습니다.</h3>

                <p>더욱 멋진 서비스로 찾아 뵙겠습니다.</p>
                <a
                  class="link_404"
                  href="mailto:pdyme1207@gmail.com?body=안녕하세요.%0D%0A취미이자 직업이 개발인 박도영Dev 입니다.%0D%0A방문 해 주셔서 감사합니다."
                  >Contact US</a
                >
                <a style="margin: 10px"></a>
                <a href="/map" class="link_404">Go to Home</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <div class="error">
    <KakaoMap />
  </div>
</template>

<script>
import KakaoMap from "./KakaoMap.vue";
export default {
  components: {
    KakaoMap,
  },
};
</script>

<style lang="scss" scope>
.error {
  display: none;
}
.row {
  width: 40%;
}

.contai {
  width: 100%;
  height: 100vh;
  position: relative;
}

/*======================
    404 page
=======================*/

.page_404 {
  background: #fff;
  font-family: "Arvo", serif;
}

.page_404 img {
  width: 100%;
}

.four_zero_four_bg {
  background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
  height: 400px;
  background-position: center;
}

.four_zero_four_bg h1 {
  font-size: 80px;
}

.four_zero_four_bg h3 {
  font-size: 80px;
}

.link_404 {
  color: #fff !important;
  padding: 10px 20px;
  background: #326cf9;
  margin: 20px 0;
  display: inline-block;
  text-decoration: none;
  transition: all 0.2s;

  &:hover {
    border-radius: 5px;
    background: #39ac31;
  }
}
.col-sm-12 {
  width: 100%;
}
.contant_box_404 {
  margin-top: -30px;
  line-height: 30px;
}
</style>
