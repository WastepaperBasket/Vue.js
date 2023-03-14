<p align="center">
  <img src="https://user-images.githubusercontent.com/110442250/216780918-a8117630-975f-4804-85f4-a2336f636e35.png" height="250">
  <h2 align="center">Progressive Web App & 셋팅</h2>
  <p align="center">모바일 앱처럼 만들 수 있음!<p>

  </p>
</p>





### 우리가 만든 웹 사이트도 앱으로 발행가능!! 

>**PWA를 사용하시면 웹사이트를 그대로 모바일앱처럼** 쓸 수 있게 만들 수 있습니다. <br>
실상은 "웹페이지 홈화면에 바로가기 추가"를 고상한 말로 표현해놓은 건데 <br>
일반 유저는 앱이라고 생각할듯 <br>
**웹브라우저 주소창이 제거된 상태**로 보여주니까요. <br>
그대로 앱처럼 쓸 수 없을까?  <br>
라고 등장한게 **PWA등장** <br>
사실 브라우저로 뜨는거임

- ***manifest.json***
- ***service-worker.js***

> PWA 제공하는 라이브러리가 있음!

```
vue add pwa 
```
하게되면 registerServiceWorker.js가 생긴다. <BR>
그렇다면 우리가 프로젝트 build할때 <BR>
자동으로 manifest.json <BR>
service-worker.js 두개가 생김


***manifest.json***

- 앱정보 담는 파일
- 색상 아이콘 등등


***service-worker.js***
 - 실제 모바일 앱은 인터넷 없어도 사용가능
-  고안해서 나온게 이 파일임!

1. 웹 페이지 구동에 필요한 <BR>
html css js img 하드에 저장해놓음

2. 하드에 있으면 그거 써주세요 라는거임 <BR>

### 조건 
 - manifest.json 내용 잘 있고  
 - service-worker.js 이것도 있고
 - http://로 시작하면 

### ***끝!***


### PWA 설정바꾸기??

EX_ index.html은 하드저장 안하려면 ...

***vue.config.js***

```
module.exports = {
  pwa: {
    name: '님 앱이름',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    workboxOptions: {
      exclude: [/\.map$/, /manifest\.json$/, 'index.html']
    }
  }
}
```
추가 설정은 workbox라는 라이브러리 <BR>
혹은 vue pwa 검색필요



play store 등록 가능한  실제 apk 파일은?? <br>
-[vue 공식 홈페이지](https://vuejs.org/#introduction)





