(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{489:function(t,s,a){t.exports=a.p+"assets/img/cli-service-webpack.c626cb7c.png"},490:function(t,s,a){t.exports=a.p+"assets/img/cli-service-inspect-output.a246557e.png"},607:function(t,s,a){"use strict";a.r(s);var e=a(34),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"vue-cli로-생성한-프로젝트의-웹팩-설정-방법"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-cli로-생성한-프로젝트의-웹팩-설정-방법"}},[t._v("#")]),t._v(" Vue CLI로 생성한 프로젝트의 웹팩 설정 방법")]),t._v(" "),e("p",[t._v("Vue CLI로 생성한 프로젝트에 웹팩 설정을 변경하려면 어떻게 해야 할까요? 웹팩 설정 확인 & 변경 방법에 대해 알아봅니다.")]),t._v(" "),e("h2",{attrs:{id:"vue-cli로-생성한-프로젝트와-웹팩의-관계"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-cli로-생성한-프로젝트와-웹팩의-관계"}},[t._v("#")]),t._v(" Vue CLI로 생성한 프로젝트와 웹팩의 관계?")]),t._v(" "),e("p",[t._v("보통 Vue.js를 배우고 나면 실제 서비스를 만들 때 뷰 CLI를 이용해서 프로젝트를 생성할텐데요.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("vue create my-project\n")])])]),e("p",[t._v("이렇게 생성된 뷰 프로젝트는 웹팩을 기반으로 동작합니다.")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("npm run serve")]),t._v(" : 로컬 서버를 웹팩 데브 서버로 실행")]),t._v(" "),e("li",[e("code",[t._v("npm run build")]),t._v(" : 웹팩으로 최종 결과물 변환(빌드)")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("웹팩은 최신 프런트엔드 빌드 시스템의 핵심이 되는 빌드 도구입니다. 웹팩을 잘 모르시는 분들은 "),e("a",{attrs:{href:"https://www.inflearn.com/course/%ED%94%84%EB%9F%B0%ED%8A%B8%EC%97%94%EB%93%9C-%EC%9B%B9%ED%8C%A9?inst=747606f7&utm_source=blog&utm_medium=githubio&utm_campaign=captianpangyo&utm_term=banner",target:"_blank",rel:"noopener noreferrer"}},[t._v("웹팩 강의"),e("OutboundLink")],1),t._v("나 "),e("a",{attrs:{href:"https://joshua1988.github.io/webpack-guide/",target:"_blank",rel:"noopener noreferrer"}},[t._v("웹팩 핸드북"),e("OutboundLink")],1),t._v("을 참고해서 학습해 보세요 😄")])]),t._v(" "),e("h2",{attrs:{id:"생성된-뷰-프로젝트에-웹팩-설정-파일이-안보이는데요"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#생성된-뷰-프로젝트에-웹팩-설정-파일이-안보이는데요"}},[t._v("#")]),t._v(" 생성된 뷰 프로젝트에 웹팩 설정 파일이 안보이는데요?")]),t._v(" "),e("p",[t._v("뷰 CLI 버전 2 이하에서는 웹팩 설정 파일(webpack.config.js)이 프로젝트 루트 레벨에 노출되어 있었습니다. 이런 부분이 웹팩에 익숙하지 않은 사용자들에게는 부담이 되었는데요. 그래서 뷰 CLI 버전 3 이상부터는 웹팩 설정 파일을 아래와 같이 "),e("code",[t._v("vue-cli-service")]),t._v("라는 이름으로 감추어 놓았습니다.")]),t._v(" "),e("p",[e("img",{attrs:{src:a(489),alt:"cli service 밑의 웹팩 설정 파일"}})]),t._v(" "),e("p",[t._v("위 폴더 위치는 아래와 같습니다.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("src\nnode_modules\n  @vue\n    cli-service\n...\n")])])]),e("p",[t._v("결과적으로 사용자들에게는 서버 시작 명령어와 빌드 명령어만 알려주면 웹팩은 몰라도 되게끔 기본적인 설정을 해놓은 것입니다.")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// package.json")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"serve"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue-cli-service serve"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"build"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue-cli-service build"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"그럼-프로젝트에-설정되어-있는-웹팩-옵션-속성을-어떻게-볼-수-있나요"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#그럼-프로젝트에-설정되어-있는-웹팩-옵션-속성을-어떻게-볼-수-있나요"}},[t._v("#")]),t._v(" 그럼 프로젝트에 설정되어 있는 웹팩 옵션 속성을 어떻게 볼 수 있나요?")]),t._v(" "),e("p",[t._v("만약 웹팩 설정 파일 "),e("code",[t._v("webpack.config.js")]),t._v("가 프로젝트 루트 레벨로 나와 있다면 바로 보면 되겠지만 "),e("code",[t._v("vue-cli-service")]),t._v(" 내부에 여러 파일들로 나뉘어져 있어 한눈에 파악하기 어렵습니다. 이 때 프로젝트에 설정된 웹팩 옵션들을 보고 싶다면 아래 명령어를 입력합니다.")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("vue inspect "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" options.js\n")])])]),e("p",[t._v("위 명령어를 치면 프로젝트 내부적으로 설정된 웹팩의 옵션들을 "),e("code",[t._v("options.js")]),t._v(" 파일에 담아줍니다. 이제 "),e("code",[t._v("options.js")]),t._v(" 파일을 열어보면 아래 내용을 확인할 수 있습니다.")]),t._v(" "),e("p",[e("img",{attrs:{src:a(490),alt:"inspect 결과 파일"}})]),t._v(" "),e("h2",{attrs:{id:"프로젝트의-웹팩-설정을-수정하고-싶다면"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#프로젝트의-웹팩-설정을-수정하고-싶다면"}},[t._v("#")]),t._v(" 프로젝트의 웹팩 설정을 수정하고 싶다면?")]),t._v(" "),e("p",[t._v("프로젝트에 설정되어 있는 웹팩의 옵션들을 변경하고 싶다면 "),e("code",[t._v("vue.config.js")]),t._v(" 파일을 변경해야 합니다.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vue.config.js")]),t._v("\nmodule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  outputDir"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'my-dist'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("위 "),e("code",[t._v("outputDir")]),t._v(" 속성은 웹팩 설정 파일의 "),e("a",{attrs:{href:"https://webpack.js.org/configuration/output/#outputpath",target:"_blank",rel:"noopener noreferrer"}},[t._v("output.path"),e("OutboundLink")],1),t._v("와 동일한 옵션입니다. 이렇게 "),e("a",{attrs:{href:"https://cli.vuejs.org/config/#vue-config-js",target:"_blank",rel:"noopener noreferrer"}},[t._v("뷰 CLI의 공식 가이드에 안내된 내용"),e("OutboundLink")],1),t._v("을 따라 웹팩 설정을 변경해 주셔야 최종 빌드에서 사용자가 변경한 값이 함께 적용됩니다.")]),t._v(" "),e("p",[t._v("이외에도 아래와 같은 옵션들을 이용하여 웹팩 설정을 추가 또는 체이닝을 할 수 있습니다.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vue.config.js")]),t._v("\nmodule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 옵션 추가")]),t._v("\n  configureWebpack"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    plugins"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyAwesomeWebpackPlugin")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 옵션 체이닝")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("configureWebpack")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("config")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NODE_ENV")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'production'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// mutate config for production...")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// mutate for development...")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[e("a",{attrs:{href:"https://cli.vuejs.org/guide/webpack.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("옵션 추가와 체이닝 방법의 정확한 가이드"),e("OutboundLink")],1),t._v("는 CLI 공식 문서를 참고하세요 😃")])])}),[],!1,null,null,null);s.default=n.exports}}]);