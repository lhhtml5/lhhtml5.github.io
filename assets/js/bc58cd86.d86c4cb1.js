"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8585],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return t?r.createElement(f,l(l({ref:n},c),{},{components:t})):r.createElement(f,l({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2213:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=t(7462),o=(t(7294),t(3905));const a={slug:"November29",title:"cancanFailureCase",authors:{name:"potato",title:"study one day",image_url:"https://avatars.githubusercontent.com/u/85016442?v=4"},tags:["\u7b14\u8bb0","\u7b14\u8bb0"]},l=void 0,i={permalink:"/blog/November29",source:"@site/blog/2022-11-29-studyday.md",title:"cancanFailureCase",description:"2\u79cda\u94fe\u63a5\u4e0b\u8f7d \u7b2c\u4e00\u79cd\u4f20\u9012\u53c2\u6570\u4e3ares,\u6587\u4ef6\u540d,contentType",date:"2022-11-29T00:00:00.000Z",formattedDate:"2022\u5e7411\u670829\u65e5",tags:[{label:"\u7b14\u8bb0",permalink:"/blog/tags/\u7b14\u8bb0"}],readingTime:2.375,hasTruncateMarker:!1,authors:[{name:"potato",title:"study one day",image_url:"https://avatars.githubusercontent.com/u/85016442?v=4",imageURL:"https://avatars.githubusercontent.com/u/85016442?v=4"}],frontMatter:{slug:"November29",title:"cancanFailureCase",authors:{name:"potato",title:"study one day",image_url:"https://avatars.githubusercontent.com/u/85016442?v=4",imageURL:"https://avatars.githubusercontent.com/u/85016442?v=4"},tags:["\u7b14\u8bb0","\u7b14\u8bb0"]},prevItem:{title:"one day",permalink:"/blog/November30"},nextItem:{title:"Weather",permalink:"/blog/happy"}},s={authorsImageUrls:[void 0]},p=[],c={toc:p};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"download:(content:string,fileName:string,contentType='application/octet-stream')=>{\n    const a = document.createElement('a')\n    const file = new Blob([content],{type:contentType})\n    a.href = URL.createObjectURL(file)\n    a.download = fileName\n    a.click()\n    URL.revokeObjectURL(a.href)\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"const downloadFile=function(path,name){\n    const xhr = new XMLHttpRequest()\n    xhr.open('get',path)\n    xhr.responseType = 'blob'\n    xhr.send()\n    xhr.onload = function () {\n        if(this.status === 200 || this.status === 304){\n            // \u5982\u679c\u662fIE10\u53ca\u4ee5\u4e0a\uff0c\u4e0d\u652f\u6301download\u5c5e\u6027\uff0c\u91c7\u7528msSaveOrOpenBlob\u65b9\u6cd5\uff0c\u4f46\u662fIE10\u4ee5\u4e0b\u4e5f\u4e0d\u652f\u6301msSaveOrOpenBlob\n            if('msSaveOrOpenBlob' in navigator) {\n                navigator.msSaveOrOpenBlob(this.response,name)\n            }\n            // const blob = new Blob([this.response],{type:xhr.getResponseHeader('Content-Type')})\n            // const url = URL.createObjectURL(blob)\n            const url = URL.createObjectURL(this.response)\n            const a = document.createElement('a')\n            a.style.display = 'none'\n            a.href = url\n            a.download = name\n            document.body.appendChild(a)\n            a.click()\n            document.body.removeChild(a)\n            URL.revokeObjectURL(url)\n        }\n    }\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    window.open(url)\n    //\u4f2a\u4ee3\u7801\u5199\u5199\u539f\u751fajax\u8bf7\u6c42\n    let xhr = new XMLHttpRequest()\n    //\u5982\u679c\u662fget\u8bf7\u6c42\u4e0d\u7528\u8bbe\u7f6e\u8bf7\u6c42\u5934\n    xhr.open('get',url)\n    //\u5982\u679c\u662fpost\u8bf7\u6c42\n    //xhr.open('post',url)\n    //xhr.setRequestHeader('Content-Type','application/www-form-urlencoded')\n    xhr.send()\n    xhr.onreadstatechange=function(){\n        if(xhr.readstate === 4 && xhr.state === 200){\n            const res = xhr.response.xxx\n        }\n    }\n")),(0,o.kt)("p",null,"2\u79cda\u94fe\u63a5\u4e0b\u8f7d \u7b2c\u4e00\u79cd\u4f20\u9012\u53c2\u6570\u4e3ares,\u6587\u4ef6\u540d,contentType\n\u7b2c\u4e8c\u79cd\u4f20\u9012\u53c2\u6570\u4e3aurl,\u6587\u4ef6\u540d \u81ea\u6211\u8ba4\u4e3a\u4f46\u662f\u6ce8\u91ca\u90e8\u5206\u53ef\u4ee5\u66ff\u4ee3\u7b2c\u4e00\u79cd\u5199\u6cd5"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"vue3tsx\u5199\u6cd5\u516c\u5171\u7ec4\u4ef6\u5c01\u88c5\u5199\u6cd5")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'    import { defineComponent } from \'vue\';\n    export default defineComponent({\n        name:\'commonCard\',\n        props:{\n            title: {\n                type:String,\n                default:\'\'\n            },\n            customBodyStyle: {\n                type:Object,\n                default:() => {\n                    return {}\n                }\n            },\n            showTitle: {\n                type: Boolean,\n                default: true\n            }\n        },\n        setup(props, { slots }) {\n            return () => {\n                return (\n                    <div class="box-container">\n                        <div class="box-header v-show={props.showTitle}">\n                        {\n                          slots.title ? (slots.title()):(\n                            <div>\n                                <div class="title">{props.title}</div>\n                                <div class="second-title">\n                                    {slots.secondTitle && slots.secondTitle()}\n                                </div>\n                            </div>\n                          )}\n                        </div>\n                        <div class="box-body" style={props.customBodyStyle}>        \n                            {slots.body && slots.body()}\n                        </div>\n                    <div>\n                )\n            }\n        }\n    })\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    .box-container{\n        width:100%;\n        height:100%;\n        border-radius:16px;\n        overflow:hidden;\n        display:flex;\n        flex-direction:column;\n        box-shadow:0px 0px 8px 0px rgba(0,0,0,0.16),inset 0px 1px 35px 0px #fff;\n        border: 1px solid #fff;\n        .box-header {\n            height: 50px;\n            line-height: 50px;\n            padding: 0 20px 0 30px;\n            flex-shrink: 0;\n            display: flex;\n            flex-wrap:nowrap;\n            justify-content: space-between;\n            overflow: hidden;\n            border-bottom: 1px solid #fff;\n            background:#fff;\n            .box-title {\n                display:flex;\n                margin-left:-1px;\n                margin-top:-1px;\n                .title {\n                display:flex;\n                align-items:center;\n                font-size:24px;\n                color:#000;\n                }\n                .title:before {\n                    content: '';\n                    width: 5px;\n                    height: 20px;\n                    background-color:#004892;\n                    border-radius: 3px;\n                    margin-right: 10px;\n                }\n            }\n            .box-button {\n                height: 100%;\n                display:flex;\n                align-items: center;\n                .buttons {\n                    display:flex;\n                    align-items:center;\n                }\n            }\n        } \n        .box-body {\n            flex:1;\n            width:100%;\n            height:100%;\n            overflow:auto;\n            padding:10px 20px 20px 20px;\n            background:#fff;\n        }\n    }\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"vue3tsx\u5199\u6cd5\u7ec4\u4ef6\u4f7f\u7528 example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'    return () => {\n        return (\n            <el-row>\n                <el-col>\n                    <commonCard title="xxx" style="width:100px;height:100%" v-slots={{\n                        body:()=>{\n                            return(\n                                <div></div>\n                            )\n                        }\n                    }} />\n                </el-col>\n            <el-row>\n        )\n    }\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'    <commonCard style="width:100%;height:100%" \n    v-slots={{\n        title:() =>{\n            return (\n                <div></div>\n            )\n        },\n        body: () => {\n            return (\n                <div></div>\n            )\n        }\n    }} />\n')))}d.isMDXComponent=!0}}]);