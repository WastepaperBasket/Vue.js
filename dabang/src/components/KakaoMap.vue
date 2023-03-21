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

      var circle = new window.kakao.maps.Circle({
        center: new window.kakao.maps.LatLng(
          36.36029148553544,
          127.3939355385042
        ), // 원의 중심좌표 입니다
        radius: 250, // 미터 단위의 원의 반지름입니다
        strokeWeight: 1, // 선의 두께입니다
        strokeColor: "#ffc200", // 선의 색깔입니다
        strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        strokeStyle: "solid", // 선의 스타일 입니다
        fillColor: "#ffc200", // 채우기 색깔입니다
        fillOpacity: 0.7, // 채우기 불투명도 입니다
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
        strokeColor: "#ffc200", // 선의 색깔입니다
        strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        strokeStyle: "solid", // 선의 스타일 입니다
        fillColor: "#ffc200", // 채우기 색깔입니다
        fillOpacity: 0.7, // 채우기 불투명도 입니다
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
        strokeColor: "#ffc200", // 선의 색깔입니다
        strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        strokeStyle: "solid", // 선의 스타일 입니다
        fillColor: "#ffc200", // 채우기 색깔입니다
        fillOpacity: 0.7, // 채우기 불투명도 입니다
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
        strokeColor: "#ffc200", // 선의 색깔입니다
        strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        strokeStyle: "solid", // 선의 스타일 입니다
        fillColor: "#ffc200", // 채우기 색깔입니다
        fillOpacity: 0.8, // 채우기 불투명도 입니다
      });
      // 지도에 원을 표시합니다
      circle4.setMap(this.map);
      // 다각형을 구성하는 좌표 배열입니다. 이 좌표들을 이어서 다각형을 표시합니다
      var polygonPath = [
        new window.kakao.maps.LatLng(36.357037696475956, 127.39818068749042),
        new window.kakao.maps.LatLng(36.34814542117717, 127.40553238313936),
        new window.kakao.maps.LatLng(36.340177162803606, 127.39533239939566),
        new window.kakao.maps.LatLng(36.348600324481296, 127.39889524754035),
      ];
      // 지도에 표시할 다각형을 생성합니다
      var polygon = new window.kakao.maps.Polygon({
        path: polygonPath, // 그려질 다각형의 좌표 배열입니다
        strokeWeight: 1, // 선의 두께입니다
        strokeColor: "#ff8868", // 선의 색깔입니다
        strokeOpacity: 0.8, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        strokeStyle: "solid", // 선의 스타일입니다
        fillColor: "#ff8868", // 채우기 색깔입니다
        fillOpacity: 0.7, // 채우기 불투명도 입니다
      });

      // 지도에 다각형을 표시합니다
      polygon.setMap(this.map);

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
