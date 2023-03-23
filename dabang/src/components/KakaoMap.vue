<template>
  <div>
    <!-- <h2>카카오 맵 보기</h2> -->
    <div id="map">
      <div class="rollingbanner">
        <div class="title">속보 ></div>
        <div class="wrap">
          <ul>
            <li>
              <a href="https://www.mk.co.kr/news/realestate"
                >한달 새 건설 부동산 대출 연체 9천억 껑충…새마을금고 이대로
                괜찮나</a
              >
            </li>
            <li class="next">
              <a href="https://www.mk.co.kr/news/realestate"
                >미분양이 10만가구 될거라면서…위기는 없다는 원희룡</a
              >
            </li>
            <li class="current">
              <a href="https://www.mk.co.kr/news/realestate"
                >롯데건설, 하이엔드 실버타운 ‘VL르웨스트’...23일까지 청약 접수
              </a>
            </li>
            <li>
              <a href="https://www.mk.co.kr/news/realestate"
                >효성중공업, ‘해링턴 플레이스 다산파크’ 분양</a
              >
            </li>
            <li class="prev">
              <a href="https://www.mk.co.kr/news/realestate"
                >세입자 주소 몰래 옮긴 뒤 서류상 빈집으로 억대 대출 받아 챙긴
                일당</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scope>
#map {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: fixed;
}
$font-color: rgb(160, 202, 255);
// $font-color: black;
.rollingbanner {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  width: 530px;
  height: 60px;
  padding: 9px 25px 8px 9px;
  border: 1px solid rgba(12, 18, 28, 0.92);
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 12px 25px 0px;
  // background-color: rgba(39, 44, 52, 0.92);
  background-color: rgba(39, 44, 52, 0.92);
  position: absolute;
  right: 465px;
  bottom: 30px;
  z-index: 300;
  overflow: hidden;
}

/* 타이틀 */
.rollingbanner > .title {
  font-weight: bold;
  float: left;
  padding-right: 10px;
  color: $font-color;
}
/* 롤링 배너 */
.rollingbanner > .wrap {
  position: relative;
  width: 85%;
  height: 50%;
  box-sizing: border-box;
  overflow: hidden;
}
.rollingbanner ul {
  list-style: none;
}
.rollingbanner li {
  position: absolute;
  top: -36px;
  left: 0;
}
/* 이전, 현재, 다음 롤링 배너 표시 */
.rollingbanner li.prev {
  top: 36px;
  transition: top 0.5s ease;
}
.rollingbanner li.current {
  top: 0;
  transition: top 0.5s ease;
}
.rollingbanner li.next {
  top: -36px;
}
.rollingbanner a {
  display: block;
  display: -webkit-box;
  text-decoration: none;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: $font-color !important;
}
/* 반대 방향으로 진행 */
.rollingbanner.reverse li.prev {
  top: -36px;
  transition: top 0.5s ease;
}
.rollingbanner.reverse li.next {
  top: 36px;
}
</style>

<script>
export default {
  name: "KakaoMap", // 컴포넌트 이름 지정
  data() {
    return {
      // map 객체 설정
      map: null,
    };
  },
  setup() {},
  created() {
    setTimeout(() => {
      console.log("this", this);
    }, 1000);
  },
  mounted() {
    // api 스크립트 소스 불러오기 및 지도 출력
    if (window.kakao && window.kakao.maps) {
      this.loadMap();
    } else {
      this.loadScript();
    }
  },
  unmounted() {},
  methods: {
    // api 불러오기
    //localhost : d6f7f63094ceaef6d6ee6e0a2d218dbd
    //server : 1914d03923dca3643125bf3c5ebc8d58
    loadScript() {
      const script = document.createElement("script");
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?appkey=d6f7f63094ceaef6d6ee6e0a2d218dbd&autoload=false";
      script.onload = () => window.kakao.maps.load(this.loadMap);

      document.head.appendChild(script);
    },
    // 맵 출력하기
    loadMap() {
      const container = document.getElementById("map");
      const options = {
        center: new window.kakao.maps.LatLng(
          36.3533618250382,
          127.40194425812012
        ),
        level: 5,
      };

      this.map = new window.kakao.maps.Map(container, options);
      this.loadMaker();
    },
    // 지정한 위치에 마커 불러오기
    loadMaker() {
      // var positions = [
      //   {
      //     title: "대전시청",
      //     latLng: new window.kakao.maps.LatLng(
      //       36.35027702448976,
      //       127.38500066299521
      //     ),
      //   },
      //   {
      //     title: "대전을지병원",
      //     latLng: new window.kakao.maps.LatLng(
      //       36.35517460013987,
      //       127.38228965540057
      //     ),
      //   },
      //   {
      //     title: "은하수 아파트",
      //     latLng: new window.kakao.maps.LatLng(
      //       36.34936169660278,
      //       127.3795653048989
      //     ),
      //   },
      //   {
      //     title: "한우리 아파트",
      //     latLng: new window.kakao.maps.LatLng(
      //       36.34493579099181,
      //       127.38833295042008
      //     ),
      //   },
      //   {
      //     title: "크로바 아파트",
      //     latLng: new window.kakao.maps.LatLng(
      //       36.35207834185769,
      //       127.39224534736223
      //     ),
      //   },
      //   {
      //     title: "목련 아파트",
      //     latLng: new window.kakao.maps.LatLng(
      //       36.34988141232062,
      //       127.39165503236295
      //     ),
      //   },
      //   {
      //     title: "한마루 아파트",
      //     latLng: new window.kakao.maps.LatLng(
      //       36.35461939162532,
      //       127.39232494131998
      //     ),
      //   },
      //   {
      //     title: "오피스텔",
      //     latLng: new window.kakao.maps.LatLng(
      //       36.352433228435906,
      //       127.38843702793032
      //     ),
      //   },
      //   {
      //     title: "녹원 아파트",
      //     latLng: new window.kakao.maps.LatLng(
      //       36.34773560129195,
      //       127.38081622967745
      //     ),
      //   },
      // ];
      // // 마커 이미지의 이미지 주소입니다
      // var imageSrc =
      //   "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

      // const markerPosition = new window.kakao.maps.LatLng(
      //   36.351229560970026,
      //   127.38723344758682
      // );

      var circle = new window.kakao.maps.Circle({
        center: new window.kakao.maps.LatLng(
          36.36029148553544,
          127.3939355385042
        ), // 원의 중심좌표 입니다
        radius: 250, // 미터 단위의 원의 반지름입니다
        strokeWeight: 1, // 선의 두께입니다
        strokeColor: "#5886f6", // 선의 색깔입니다
        strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        strokeStyle: "solid", // 선의 스타일 입니다
        fillColor: "#5886f6", // 채우기 색깔입니다
        fillOpacity: 0.5, // 채우기 불투명도 입니다
      });
      // 지도에 원을 표시합니다
      circle.setMap(this.map);

      var circle2 = new window.kakao.maps.Circle({
        center: new window.kakao.maps.LatLng(
          36.34209238528141,
          127.38700441102878
        ), // 원의 중심좌표 입니다
        radius: 250, // 미터 단위의 원의 반지름입니다
        strokeWeight: 1, // 선의 두께입니다
        strokeColor: "#5886f6", // 선의 색깔입니다
        strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        strokeStyle: "solid", // 선의 스타일 입니다
        fillColor: "#5886f6", // 채우기 색깔입니다
        fillOpacity: 0.5, // 채우기 불투명도 입니다
      });
      // 지도에 원을 표시합니다
      circle2.setMap(this.map);

      var circle3 = new window.kakao.maps.Circle({
        center: new window.kakao.maps.LatLng(
          36.35934032799949,
          127.37300676452114
        ), // 원의 중심좌표 입니다
        radius: 250, // 미터 단위의 원의 반지름입니다
        strokeWeight: 1, // 선의 두께입니다
        strokeColor: "#5886f6", // 선의 색깔입니다
        strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        strokeStyle: "solid", // 선의 스타일 입니다
        fillColor: "#5886f6", // 채우기 색깔입니다
        fillOpacity: 0.5, // 채우기 불투명도 입니다
      });
      // 지도에 원을 표시합니다
      circle3.setMap(this.map);

      var circle4 = new window.kakao.maps.Circle({
        center: new window.kakao.maps.LatLng(
          36.34473026381731,
          127.37652400870219
        ), // 원의 중심좌표 입니다
        radius: 250, // 미터 단위의 원의 반지름입니다
        strokeWeight: 1, // 선의 두께입니다
        strokeColor: "#5886f6", // 선의 색깔입니다
        strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        strokeStyle: "solid", // 선의 스타일 입니다
        fillColor: "#5886f6", // 채우기 색깔입니다
        fillOpacity: 0.5, // 채우기 불투명도 입니다
      });

      // 지도에 원을 표시합니다
      circle4.setMap(this.map);

      var circle5 = new window.kakao.maps.Circle({
        center: new window.kakao.maps.LatLng(
          36.354668577972575,
          127.39789009728092
        ), // 원의 중심좌표 입니다
        radius: 350, // 미터 단위의 원의 반지름입니다
        strokeWeight: 1, // 선의 두께입니다
        strokeColor: "#FFB3D0", // 선의 색깔입니다
        strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        strokeStyle: "solid", // 선의 스타일 입니다
        fillColor: "#FFB3D0", // 채우기 색깔입니다
        fillOpacity: 0.5, // 채우기 불투명도 입니다
      });

      // 지도에 원을 표시합니다
      circle5.setMap(this.map);

      var circle6 = new window.kakao.maps.Circle({
        center: new window.kakao.maps.LatLng(
          36.35188473370236,
          127.37822397321598
        ), // 원의 중심좌표 입니다
        radius: 350, // 미터 단위의 원의 반지름입니다
        strokeWeight: 1, // 선의 두께입니다
        strokeColor: "#FFB3D0", // 선의 색깔입니다
        strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        strokeStyle: "solid", // 선의 스타일 입니다
        fillColor: "#FFB3D0", // 채우기 색깔입니다
        fillOpacity: 0.5, // 채우기 불투명도 입니다
      });

      // 지도에 원을 표시합니다
      circle6.setMap(this.map);

      var circle7 = new window.kakao.maps.Circle({
        center: new window.kakao.maps.LatLng(
          36.351563047694164,
          127.38860538305067
        ), // 원의 중심좌표 입니다
        radius: 380, // 미터 단위의 원의 반지름입니다
        strokeWeight: 1, // 선의 두께입니다
        strokeColor: "#FFB3D0", // 선의 색깔입니다
        strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        strokeStyle: "solid", // 선의 스타일 입니다
        fillColor: "#FFB3D0", // 채우기 색깔입니다
        fillOpacity: 0.5, // 채우기 불투명도 입니다
      });

      // 지도에 원을 표시합니다
      circle7.setMap(this.map);

      var circle8 = new window.kakao.maps.Circle({
        center: new window.kakao.maps.LatLng(
          36.34555003329437,
          127.39748723181508
        ), // 원의 중심좌표 입니다
        radius: 450, // 미터 단위의 원의 반지름입니다
        strokeWeight: 1, // 선의 두께입니다
        strokeColor: "#FFB3D0", // 선의 색깔입니다
        strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        strokeStyle: "solid", // 선의 스타일 입니다
        fillColor: "#FFB3D0", // 채우기 색깔입니다
        fillOpacity: 0.5, // 채우기 불투명도 입니다
      });

      // 지도에 원을 표시합니다
      circle8.setMap(this.map);

      var circle9 = new window.kakao.maps.Circle({
        center: new window.kakao.maps.LatLng(
          36.36331130316951,
          127.3783238306551
        ), // 원의 중심좌표 입니다
        radius: 300, // 미터 단위의 원의 반지름입니다
        strokeWeight: 1, // 선의 두께입니다
        strokeColor: "#5886f6", // 선의 색깔입니다
        strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        strokeStyle: "solid", // 선의 스타일 입니다
        fillColor: "#5886f6", // 채우기 색깔입니다
        fillOpacity: 0.5, // 채우기 불투명도 입니다
      });

      // 지도에 원을 표시합니다
      circle9.setMap(this.map);

      var circle10 = new window.kakao.maps.Circle({
        center: new window.kakao.maps.LatLng(
          36.34773712364377,
          127.36737585139603
        ), // 원의 중심좌표 입니다
        radius: 500, // 미터 단위의 원의 반지름입니다
        strokeWeight: 1, // 선의 두께입니다
        strokeColor: "#D7FFBD", // 선의 색깔입니다
        strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        strokeStyle: "solid", // 선의 스타일 입니다
        fillColor: "#D7FFBD", // 채우기 색깔입니다
        fillOpacity: 0.5, // 채우기 불투명도 입니다
      });

      // 지도에 원을 표시합니다
      circle10.setMap(this.map);

      var circle11 = new window.kakao.maps.Circle({
        center: new window.kakao.maps.LatLng(
          36.36319694172279,
          127.4128640183453
        ), // 원의 중심좌표 입니다
        radius: 500, // 미터 단위의 원의 반지름입니다
        strokeWeight: 1, // 선의 두께입니다
        strokeColor: "#D7FFBD", // 선의 색깔입니다
        strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        strokeStyle: "solid", // 선의 스타일 입니다
        fillColor: "#D7FFBD", // 채우기 색깔입니다
        fillOpacity: 0.5, // 채우기 불투명도 입니다
      });

      // 지도에 원을 표시합니다
      circle11.setMap(this.map);

      var circle12 = new window.kakao.maps.Circle({
        center: new window.kakao.maps.LatLng(
          36.34664073358481,
          127.41594030186613
        ), // 원의 중심좌표 입니다
        radius: 450, // 미터 단위의 원의 반지름입니다
        strokeWeight: 1, // 선의 두께입니다
        strokeColor: "#FFB3D0", // 선의 색깔입니다
        strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        strokeStyle: "solid", // 선의 스타일 입니다
        fillColor: "#FFB3D0", // 채우기 색깔입니다
        fillOpacity: 0.5, // 채우기 불투명도 입니다
      });

      // 지도에 원을 표시합니다
      circle12.setMap(this.map);

      // 다각형을 구성하는 좌표 배열입니다. 이 좌표들을 이어서 다각형을 표시합니다
      // var polygonPath = [
      //   new window.kakao.maps.LatLng(36.357037696475956, 127.39818068749042),
      //   new window.kakao.maps.LatLng(36.34814542117717, 127.40553238313936),
      //   new window.kakao.maps.LatLng(36.340177162803606, 127.39533239939566),
      //   new window.kakao.maps.LatLng(36.348600324481296, 127.39889524754035),
      // ];
      // // 지도에 표시할 다각형을 생성합니다
      // var polygon = new window.kakao.maps.Polygon({
      //   path: polygonPath, // 그려질 다각형의 좌표 배열입니다
      //   strokeWeight: 1, // 선의 두께입니다
      //   strokeColor: "#ff8868", // 선의 색깔입니다
      //   strokeOpacity: 0.8, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
      //   strokeStyle: "solid", // 선의 스타일입니다
      //   fillColor: "#ff8868", // 채우기 색깔입니다
      //   fillOpacity: 0.7, // 채우기 불투명도 입니다
      // });

      // // 지도에 다각형을 표시합니다
      // polygon.setMap(this.map);

      // for (var i = 0; i < positions.length; i++) {
      //   // 마커 이미지의 이미지 크기 입니다
      //   var imageSize = new window.kakao.maps.Size(24, 35);

      //   // 마커 이미지를 생성합니다
      //   var markerImage = new window.kakao.maps.MarkerImage(
      //     imageSrc,
      //     imageSize
      //   );

      //   // 마커를 생성합니다
      //   var marker = new window.kakao.maps.Marker({
      //     map: this.map, // 마커를 표시할 지도
      //     position: positions[i].latLng, // 마커를 표시할 위치
      //     title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
      //     image: markerImage, // 마커 이미지
      //   });
      // }

      // marker.setMap(this.map);
    },
  },
};
var interval;
document.addEventListener("DOMContentLoaded", () => {
  // 롤링 초기화
  interval = window.setInterval(rollingCallback, 2000);

  //마우스 호버시 롤링이 멈추었다 벗어나면 다시 롤링이 되도록 처리
  document
    .querySelector(".rollingbanner")
    .addEventListener("mouseover", function () {
      window.clearInterval(interval);
    });
  document
    .querySelector(".rollingbanner")
    .addEventListener("mouseout", function () {
      interval = window.setInterval(rollingCallback, 2000);
    });
});

function rollingCallback() {
  //.prev 클래스 삭제
  document.querySelector(".rollingbanner .prev").classList.remove("prev");

  //.current -> .prev
  let current = document.querySelector(".rollingbanner .current");
  current.classList.remove("current");
  current.classList.add("prev");

  //.next -> .current
  let next = document.querySelector(".rollingbanner .next");
  //다음 목록 요소가 널인지 체크
  if (next.nextElementSibling == null) {
    document
      .querySelector(".rollingbanner ul li:first-child")
      .classList.add("next");
  } else {
    //목록 처음 요소를 다음 요소로 선택
    next.nextElementSibling.classList.add("next");
  }
  next.classList.remove("next");
  next.classList.add("current");
}
</script>
