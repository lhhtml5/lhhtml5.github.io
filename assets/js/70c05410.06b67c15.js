"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5894],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(f,s(s({ref:n},c),{},{components:t})):r.createElement(f,s({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9925:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const o={slug:"see",title:"See",authors:{name:"potato",title:"study one day",image_url:"https://avatars.githubusercontent.com/u/85016442?v=4"},tags:["\u7b14\u8bb0","\u968f\u7b14"]},s=void 0,i={permalink:"/blog/see",source:"@site/blog/taishiCode/see.md",title:"See",description:"",date:"2023-02-15T01:18:36.236Z",formattedDate:"2023\u5e742\u670815\u65e5",tags:[{label:"\u7b14\u8bb0",permalink:"/blog/tags/\u7b14\u8bb0"},{label:"\u968f\u7b14",permalink:"/blog/tags/\u968f\u7b14"}],readingTime:2.33,hasTruncateMarker:!1,authors:[{name:"potato",title:"study one day",image_url:"https://avatars.githubusercontent.com/u/85016442?v=4",imageURL:"https://avatars.githubusercontent.com/u/85016442?v=4"}],frontMatter:{slug:"see",title:"See",authors:{name:"potato",title:"study one day",image_url:"https://avatars.githubusercontent.com/u/85016442?v=4",imageURL:"https://avatars.githubusercontent.com/u/85016442?v=4"},tags:["\u7b14\u8bb0","\u968f\u7b14"]},prevItem:{title:"review",permalink:"/blog/review"},nextItem:{title:"code",permalink:"/blog/2023/02/13/code"}},l={authorsImageUrls:[void 0]},p=[],c={toc:p};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"//\u5bfc\u51fa\nhandleExport(){\n    if(this.dataTable.data.length == 0){\n        return this.$message({\n            message:'\u6682\u65e0\u5bfc\u51fa\u6570\u636e!'\n            type:'warning'\n        })\n    }\n    this.$http.post(xxxx,data).then((res)=>{\n        const resData = res.data.item\n        if(resData == null || resData == undefined || resData == ''){\n            alert(error)\n            return\n        }\n        let id = res.data.item\n        let type = 'xls'  //\u8fd9\u91cc\u53ef\u4ee5\u6539\u6210xlsx\n        let fileName = 'xxxxxxx'\n        //COMMON_API_PATH+'/commonc/excelDownload/'\n        window.open(xxx+'xxxxx'+id+'/'+type+'/'+fileName)\n    })\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    //uploadFile \u53ef\u4ee5\u89e3\u6790xls\u6587\u4ef6\u7136\u540e\u5224\u65ad\n    uploadFile(){\n        const reader = new FileReader()\n        reader.readAsArrayBuffer(files) //\u83b7\u53d6\u5230\u6587\u4ef6\u8fdb\u884c\u89e3\u6790\n        reader.onload = function (){\n            const buffer = reader.result;\n            const bytes = new Uint8Array(buffer)\n            const length = bytes.byteLength\n            let binary = '';\n            for(let i = 0; i < length; i++){\n                binary += String.fromCharCode(bytes[i])\n            }\n            const XLSX = require('xlsx')\n            const wb = XLSX.read(binary,{\n                type:'binary'\n            })\n           this.outdata = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]])\n            let messageSession = {\n                isExists:false,\n                message:''\n            }\n            const arr = [...this.outdata]\n            if(!arr.length)\n            return this.$message.error('\u4e0a\u4f20\u6587\u4ef6\u65e0\u6570\u636e\uff0c\u8bf7\u786e\u8ba4\u6587\u4ef6\u6570\u636e\u540e\u4e0a\u4f20')\n            for(let [index,item] of arr.entries()){\n                if(!item.hasOwnProperty('\u59d3\u540d')){\n                    messageSession.isExists = true\n                    messageSession.message = `\u60a8\u4e0a\u4f20\u6587\u4ef6\u7b2c${index+2}\u884c\u59d3\u540d\u4e0d\u5b58\u5728\uff0c\u8bf7\u4fee\u6539\u540e\u4e0a\u4f20`\n                    break\n                }\n            }\n            if (messageSession.isExists){\n                this.$message.error(messageSession.message)\n                return\n            }\n        }\n    }\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    //\u6587\u4ef6\u6d41\u4e0b\u8f7d\n    const downloadFile = function(path,name){\n        const xhr = new XMLHttpRequest()\n        xhr.open('get',path)\n        xhr.responseType = 'blob'\n        xhr.send()\n        xhr.onload = function(){\n            if(this.status === 200 || this.status === 304){\n                if('msSaveOrOpenBlob' in navigator){\n                    navigator.msSaveOrOpenBlob(this.response,name)\n                    return\n                }\n                const url = URL.createObjectURL(this.response)\n                const a = document.createElement('a')\n                a.style.display = 'none'\n                a.href = url;\n                a.download = name\n                document.body.appendChild(a)\n                a.click()\n                document.body.removeChild(a)\n                URL.revokeObjectURL(url)\n            }\n        }\n    }\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"//\u9a73\u56de\u51fa\u8f93\u5165\u6846\n// \u9a73\u56de\nrejectBtn(){\n    let list = this.xxxx\n    this.$prompt('\u8bf7\u8f93\u5165\u9a73\u56de\u610f\u89c1','\u63d0\u793a',{\n    confirmButtonText:'\u786e\u5b9a',\n    cancelButtonText:'\u53d6\u6d88',\n    inputPattern:/^[\\s\\S]*.*[^\\s][\\s\\S]*$/,\n    inputErrorMessage:'\u9a73\u56de\u610f\u89c1\u4e0d\u80fd\u4e3a\u7a7a',\n    inputPlaceholder:\"\u6700\u5927\u8f93\u5165100\u4e2a\u5b57\u7b26\",\n    inputValidator:this.checkReject,\n    inputType:'textarea'\n   }).then(({value})=>{\n    list[0].xxx = value\n    this.sureReject(list[0]) //\u9a73\u56de\u65b9\u6cd5\n   }).catch(()=>{\n    this.$message({\n        type:'info',\n        message:'\u53d6\u6d88\u8f93\u5165'\n    })\n    this.$refs.multipleTable.clearSelection()\n   })\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"//\u9884\u89c8 \u540e\u7aefurl\u5e76\u8fd4\u56deid\npdfPreview(row){\n    this.$http.get(xxxx,{responseType:'blob'}).then((res)=>{\n        const pdfFile = window.URL.createObjectURL(new Blob([res.data],{type:'application/pdf'}))\n        window.open(pdfFile + '#toolbar = 0')\n        URL.revokeObjectURL(pdfFile)\n    })\n}\n\nexportPreview(row){\n    if(!row.id) return this.$message.warning('\u8bf7\u4e0a\u4f20\u6587\u4ef6\u540e\u4fdd\u5b58')\n    if(row.fileName.includes('.png') || row.fileName.includes('.jpg')){\n        const imgWindow = window.open(\"\")\n        imgWindow && imgWindow.document.write(`<image src='${XXXXX}+row.id' style='display:flex;margin:0 auto' />`)\n    } else if(row.fileName.includes('.pdf')){\n        this.$http.get(xxxx+row.id,{responseType:'blob'}).then((res)=>{\n            const pdfFile = window.URL.createObjectURL(new Blob([res.ata],{type:'application/pdf;base64'}))\n            window.open(pdfFile+'#toolbar=0')\n            URL.revokeObjectURL(pdfFile)\n        })\n    }else{\n        this.$message.waring('\u6682\u65e0\u6cd5\u9884\u89c8')\n    }\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"form\u8868\u5355\u4e0a\u4f20\u9ed8\u8ba4\u4e0a\u4f20\u5728network\u4e2d\u663e\u793atype\u4e3adocument\u7c7b\u578b\u65e0\u6cd5\u627e\u5230\u8fd4\u56de\u503c\uff0c\u9700\u8981\u6539\u6210formData\u6765\u4f20\u53ef\u4ee5\u63a5\u6536\u5230\u540e\u7aef\u8fd4\u56de\u7684\u6570\u636e\n")))}u.isMDXComponent=!0}}]);