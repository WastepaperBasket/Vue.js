<template>
  <div>
    <!-- <h2>카카오 맵 보기</h2> -->
    <div id="map"></div>
  </div>
</template>
<style scope>
#map {
  width: 100%;
  height: 100vh;
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
  created() {},
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
          36.351229560970026,
          127.38723344758682
        ),
        level: 5,
      };

      this.map = new window.kakao.maps.Map(container, options);
      this.loadMaker();
    },
    // 지정한 위치에 마커 불러오기
    loadMaker() {
      var positions = [
        {
          title: "대전시청",
          latLng: new window.kakao.maps.LatLng(
            36.35027702448976,
            127.38500066299521
          ),
        },
        {
          title: "대전을지병원",
          latLng: new window.kakao.maps.LatLng(
            36.35517460013987,
            127.38228965540057
          ),
        },
        {
          title: "은하수 아파트",
          latLng: new window.kakao.maps.LatLng(
            36.34936169660278,
            127.3795653048989
          ),
        },
        {
          title: "한우리 아파트",
          latLng: new window.kakao.maps.LatLng(
            36.34493579099181,
            127.38833295042008
          ),
        },
        {
          title: "크로바 아파트",
          latLng: new window.kakao.maps.LatLng(
            36.35207834185769,
            127.39224534736223
          ),
        },
        {
          title: "목련 아파트",
          latLng: new window.kakao.maps.LatLng(
            36.34988141232062,
            127.39165503236295
          ),
        },
        {
          title: "한마루 아파트",
          latLng: new window.kakao.maps.LatLng(
            36.35461939162532,
            127.39232494131998
          ),
        },
        {
          title: "오피스텔",
          latLng: new window.kakao.maps.LatLng(
            36.352433228435906,
            127.38843702793032
          ),
        },
        {
          title: "녹원 아파트",
          latLng: new window.kakao.maps.LatLng(
            36.34773560129195,
            127.38081622967745
          ),
        },
      ];
      // 마커 이미지의 이미지 주소입니다
      var imageSrc =
        "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

      // const markerPosition = new window.kakao.maps.LatLng(
      //   36.351229560970026,
      //   127.38723344758682
      // );

      for (var i = 0; i < positions.length; i++) {
        // 마커 이미지의 이미지 크기 입니다
        var imageSize = new window.kakao.maps.Size(24, 35);

        // 마커 이미지를 생성합니다
        var markerImage = new window.kakao.maps.MarkerImage(
          imageSrc,
          imageSize
        );

        // 마커를 생성합니다
        var marker = new window.kakao.maps.Marker({
          map: this.map, // 마커를 표시할 지도
          position: positions[i].latLng, // 마커를 표시할 위치
          title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
          image: markerImage, // 마커 이미지
        });
      }

      marker.setMap(this.map);
    },
  },
};
</script>
