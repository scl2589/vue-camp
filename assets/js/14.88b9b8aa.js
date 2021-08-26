(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{466:function(t,e,r){t.exports=r.p+"assets/img/rendering-mode.c427bd4b.png"},467:function(t,e,r){t.exports=r.p+"assets/img/prefetching.b7676a33.gif"},554:function(t,e,r){"use strict";r.r(e);var a=r(34),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"유니버설-universal-모드란"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#유니버설-universal-모드란"}},[t._v("#")]),t._v(" 유니버설(Universal) 모드란?")]),t._v(" "),a("p",[t._v("이번 글에서는 Nuxt의 렌더링 모드 중 하나인 유니버설 모드의 개념과 동작 원리에 대해서 설명해보겠습니다.")]),t._v(" "),a("h2",{attrs:{id:"nuxt-모드"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nuxt-모드"}},[t._v("#")]),t._v(" Nuxt 모드")]),t._v(" "),a("p",[t._v("Nuxt를 처음 설치할 때 다음의 두 가지 렌더링 모드를 선택할 수 있습니다.")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Universal")])]),t._v(" "),a("li",[a("strong",[t._v("Single Page App")])])]),t._v(" "),a("p",[a("img",{attrs:{src:r(466),alt:"rendering-mode"}})]),t._v(" "),a("p",[a("a",{attrs:{href:"https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-mode",target:"_blank",rel:"noopener noreferrer"}},[t._v("공식문서"),a("OutboundLink")],1),t._v("에서는 유니버설 모드를 서버 사이드 렌더링과 클라이언트 사이드 네비게이션(Client Side Navigation)의 조합으로 설명하고 있습니다. 클라이언트 사이드 네비게이션이란 브라우저에서 페이지 간 이동시 클라이언트 쪽 자바스크립트 라우팅으로 이동하는 방식을 의미합니다. 웹 서비스 페이지를 최초로 접근할 때는 서버 사이드 렌더링 방식으로 화면을 그려주지만 이후에 해당 서비스 내의 다른 페이지로 이동할 때는 자바스크립트 라우팅 방식을 사용하는 것이 유니버설 모드입니다.")]),t._v(" "),a("p",[t._v("싱글 페이지 애플리케이션은 기존의 Vue가 제공하던 방식과 동일하니 본문에서 다루지 않겠습니다.")]),t._v(" "),a("h2",{attrs:{id:"유니버설-모드의-등장"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#유니버설-모드의-등장"}},[t._v("#")]),t._v(" 유니버설 모드의 등장")]),t._v(" "),a("p",[t._v("이전 포스트인 "),a("RouterLink",{attrs:{to:"/nuxt/ssr.html"}},[t._v("Server Side Rendering")]),t._v("에서 서버 사이드 렌더링과 클라이언트 사이드 렌더링의 차이를 배웠습니다. 요약하면 기존의 싱글 페이지 애플리케이션이 가지고 있는 검색 엔진 최적화(Search Engine Optimization) 문제와 페이지 렌더링 속도 문제를 서버 사이드 렌더링이 해결할 수 있다는 것이 요점이었습니다.")],1),t._v(" "),a("p",[t._v("하지만 웹의 역사를 보면 서버 사이드 렌더링은 새로운 개념이 아닙니다. 대중적인 싱글 페이지 애플리케이션이 등장하기 전까지는 서버 사이드 렌더링을 기반으로 하는 멀티 페이지 애플리케이션이 대세였습니다. 다만, 화면 전체 또는 일부를 변경할 때마다 서버 측 렌더링이 완료될 때까지 기다리기 때문에 깜빡임이 발생할 수밖에 없었고, 결국 깜빡임이 없는 클라이언트 사이드 렌더링 기반의 싱글 페이지 애플리케이션에 밀려나게 되었습니다.")]),t._v(" "),a("p",[t._v("그렇다면 우리는 SEO를 포기하고 다시 클라이언트 사이드 렌더링으로 회귀해야 할까요? 아니면 사용자 경험을 포기하고 서버 사이드 렌더링을 고집해야 할까요? 둘의 장단점은 분명하기 때문에 한쪽만 선택하면 반드시 기회비용이 발생합니다.")]),t._v(" "),a("p",[t._v("그래서 Nuxt는 서버 사이드 렌더링과 클라이언트 사이드 렌더링을 모두 선택하기로 했습니다. Nuxt 앱을 첫 방문할 때는 서버에서 그리고 이후 페이지 간 이동은 클라이언트 사이드에서 그리기로 말이죠. 이를 위해서 Nuxt는 클라이언트 사이드 하이드레이션(Client Side Hydration)과 코드 분할("),a("RouterLink",{attrs:{to:"/advanced/code-splitting.html"}},[t._v("Code Splitting")]),t._v("), 프리패칭(Prefetching)을 활용하고 있습니다.")],1),t._v(" "),a("h2",{attrs:{id:"클라이언트-사이드-하이드레이션"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#클라이언트-사이드-하이드레이션"}},[t._v("#")]),t._v(" 클라이언트 사이드 하이드레이션")]),t._v(" "),a("p",[t._v("하이드레이션은 간단하게 말하면 서버로부터 받은 정적 HTML을 사용자와 상호작용할 수 있는 다이나믹 DOM으로 바꾸는 방법입니다. 유니버설 모드에서 Nuxt 앱에 사용자가 최초 접근을 하면 서버로부터 정적 HTML을 받는 동시에 HTML을 다이나믹 DOM으로 바꿔줄 자바스크립트 번들을 함께 받아옵니다. 브라우저는 받아온 자바스크립트 번들을 통해 이미 그려진 정적 HTML을 리렌더링(Re-rendering) 없이 사용자와 상호작용 할 수 있는 다이나믹 DOM 상태로 바꿔줍니다.")]),t._v(" "),a("h2",{attrs:{id:"코드-분할"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#코드-분할"}},[t._v("#")]),t._v(" 코드 분할")]),t._v(" "),a("p",[t._v("코트 분할은 말 그대로 코드 전체를 로드하지 않고 분할해서 필요에 맞게 번들로 나눠 가져오는 것을 의미합니다. 필요한 번들만 가져오기 때문에 로딩 속도가 빨라지는 장점이 있습니다.")]),t._v(" "),a("p",[t._v("Nuxt 앱에서는 최초 접근할 때 서버로부터 정적 HTML을 받았지만, 다른 페이지로 이동할 때는 클라이언트 사이드에서 렌더링을 합니다. 이때 렌더링용 자바스크립트 번들이 필요한데, 유니버설 모드에서는 자동 코드 분할을 통해 당장 방문할 페이지의 렌더링에 필요한 번들만 서버로부터 가져옵니다.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("참고로, 다운로드한 번들들은 캐싱이 돼서 재활용이 가능하기 때문에 서버에 재요청할 필요가 없습니다.")])]),t._v(" "),a("h2",{attrs:{id:"프리패칭"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#프리패칭"}},[t._v("#")]),t._v(" 프리패칭")]),t._v(" "),a("p",[t._v("그렇다면 Nuxt는 렌더링을 당장 준비해야 하는 페이지를 어떻게 구분하고 있을까요? 사용자가 "),a("code",[t._v("<NuxtLink>")]),t._v("를 클릭하면 이동할 페이지를 위한 렌더링용 자바스크립트 번들을 서버로부터 받아올까요? 서버에서 완전히 렌더링된 HTML 파일을 불러오는 것보다 렌더링에 필요한 번들만 가져오는 것이 더 빠르겠지만 그래도 네트워크 지연은 발생합니다.")]),t._v(" "),a("p",[t._v("그래서 Nuxt는 좀 더 매끄러운 페이지 이동을 위해서 "),a("strong",[t._v("화면에 보이는 "),a("code",[t._v("<NuxtLink>")]),t._v("들")]),t._v("에 한해서 해당 페이지들을 렌더링하는데 필요한 파일들을 "),a("strong",[t._v("미리 서버에 요청")]),t._v("합니다. 실제로 인터섹션 옵저버(Intersection Observer)를 사용하기 때문에 뷰포트(Viewport)에 이동할 페이지 링크가 보이기만 하면 서버에 바로 번들을 요청합니다. 덕분에 사용자가 링크를 인지하고 클릭하기도 전에 이미 클라이언트 사이드 렌더링을 할 준비가 되어있는 것이죠. 이렇게 사용자가 패칭을 요구하기 전에 미리 패칭하기 때문에 프리패칭이라고 합니다.")]),t._v(" "),a("p",[t._v("아래의 영상은 뷰포트에 새로운 "),a("code",[t._v("<NuxtLink>")]),t._v("가 등장할 때마다 서버로부터 렌더링에 필요한 자바스크립트를 받아오는 장면입니다. 이 덕분에 보시는 것처럼 빠르게 페이지를 이동할 수 있습니다.\n"),a("img",{attrs:{src:r(467),alt:"prefetching"}})]),t._v(" "),a("p",[t._v("위의 데모 사이트는 "),a("a",{attrs:{href:"https://nuxt-prefetch.surge.sh",target:"_blank",rel:"noopener noreferrer"}},[t._v("Prefetching Demo"),a("OutboundLink")],1),t._v("에서 확인 가능합니다.")]),t._v(" "),a("h2",{attrs:{id:"유니버설-배포"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#유니버설-배포"}},[t._v("#")]),t._v(" 유니버설 배포")]),t._v(" "),a("p",[t._v("위에서 설명한 내용들을 요약하면 유니버설 모드는 하이드레이션, 코드 분할, 프리패칭을 통해 웹 서비스 페이지 첫 접근 시 서버 사이드 렌더링을 사용하고 이후 페이지 간 이동에는 클라이언트 사이드 렌더링을 사용하는 모드라는 것입니다.")]),t._v(" "),a("p",[t._v("추가적으로, 유니버설은 배포 대상 설정에 따라 서버 측에서 렌더링하는 방식인 서버 사이드 렌더링과 빌드 단계에서 프리렌더링(Pre-rendering)하는 방식인 정적 사이트 제네레이션(Static Site Generation)으로 한 번 더 나뉩니다. 서버 사이드 렌더링은 클라이언트 측으로부터 요청이 올 때마다 렌더링에 필요한 데이터들을 서버에서 "),a("code",[t._v("asyncData")]),t._v(" 와 "),a("code",[t._v("fetch")]),t._v("를 통해 새롭게 가져와서 페이지를 렌더링합니다.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// nuxt.config.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  target"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'server'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 서버 사이드 렌더링")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("반면에 정적 사이트 제네레이션은 빌드 단계에서 렌더링에 필요한 데이터들을 가져와 페이지를 렌더링 해놓기 때문에 클라이언트가 요청하기 전에 이미 정적 HTML을 가지고 있습니다. 이후 클라이언트로부터 요청이 오면 서버에서 리렌더링없이 빌드 단계에서 이미 만들어진 정적 HTML을 반환하므로 서버 사이드 렌더링보다 더 빠르게 반응할 수 있습니다.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// nuxt.config.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  target"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'static'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 정적 사이트 제네레이션")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("이러한 성질들 때문에 데이터가 자주 변하는 웹사이트를 구축한다면 서버 사이드 렌더링이 적합하고 블로그와 같이 데이터가 자주 바뀌지 않는 경우에는 정적 사이트 제네레이션이 더 적합합니다.")]),t._v(" "),a("p",[t._v("더 자세한 내용은 "),a("RouterLink",{attrs:{to:"/nuxt/deployment.html"}},[t._v("Nuxt 배포")]),t._v("에서 확인할 수 있습니다.")],1),t._v(" "),a("h2",{attrs:{id:"참고-자료"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#참고-자료"}},[t._v("#")]),t._v(" 참고 자료")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://ssr.vuejs.org/guide/hydration.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Client Side Hydration"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://blog.logrocket.com/server-side-rendering-with-vue-and-nuxt-js-64a6d99f5a82/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Why Nuxt.js?"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://nuxtjs.org/docs/2.x/features/nuxt-components#prefetchlinks",target:"_blank",rel:"noopener noreferrer"}},[t._v("Smart Prefetching"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://nuxtjs.org/blog/going-full-static#smarter-nuxt-generate",target:"_blank",rel:"noopener noreferrer"}},[t._v("Going Full Static"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=s.exports}}]);