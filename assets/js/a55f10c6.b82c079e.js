"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1741],{3905:(n,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>m});var r=t(7294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var s=r.createContext({}),u=function(n){var e=r.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},c=function(n){var e=u(n.components);return r.createElement(s.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,a=n.originalType,s=n.parentName,c=l(n,["components","mdxType","originalType","parentName"]),f=u(t),m=o,d=f["".concat(s,".").concat(m)]||f[m]||p[m]||a;return t?r.createElement(d,i(i({ref:e},c),{},{components:t})):r.createElement(d,i({ref:e},c))}));function m(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var a=t.length,i=new Array(a);i[0]=f;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=n,l.mdxType="string"==typeof n?n:o,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7198:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=t(7462),o=(t(7294),t(3905));const a={slug:"April4",tags:["code","Life is meaningless without a purpose"]},i=void 0,l={permalink:"/blog/April4",source:"@site/blog/doexercise/2023-04-04.md",title:"",description:"",date:"2023-04-04T00:00:00.000Z",formattedDate:"2023\u5e744\u67084\u65e5",tags:[{label:"code",permalink:"/blog/tags/code"},{label:"Life is meaningless without a purpose",permalink:"/blog/tags/life-is-meaningless-without-a-purpose"}],readingTime:3.63,hasTruncateMarker:!1,authors:[],frontMatter:{slug:"April4",tags:["code","Life is meaningless without a purpose"]},nextItem:{title:"doexercise/asterozero",permalink:"/blog/AstroZero"}},s={authorsImageUrls:[]},u=[],c={toc:u};function p(n){let{components:e,...t}=n;return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    //\u8bbe\u8ba1\u4e00\u4e2a\u4efb\u52a1\u961f\u5217\uff0c\u8981\u6c42\u5206\u522b\u57281\uff0c3\uff0c4\u79d2\u540e\u6253\u5370\u51fa\u201c1\u201d\uff0c\u201c2\u201d\uff0c\u201c3\u201d\n    class Queue{\n        constructor(){\n            this.queue = [];\n            this.time = 0\n        }\n        addTask(task,t){\n            this.time += t\n            this.queue.push([task,this.time])\n            return this\n        }\n        start(){\n            this.queue.forEach(item=>{\n                setTimeout(()=>{\n                    item[0]()\n                },item[1])\n            })\n        }\n    }\n\n    //\u968f\u673a\u751f\u6210\u4e00\u4e2a\u989c\u8272\n    const getRandomColor = () => {\n        const value = () => {\n            return parseInt(Math.random() * 255)\n        }\n        return `rgb(${value()},${value()},${value()})`\n    }\n    //Js\u5b9e\u73b0\u4e00\u4e2a\u53d1\u5e03\u8ba2\u9605\u6a21\u5f0f\n    class Center {\n        eventMap = {}\n        on(event,fun){\n            this.#add(event,fn,'on')\n        }\n        once(event,fun){\n            this.#add(event,fun,'once')\n        }\n        #add(event,fun,type){\n            if(typeof fun !== 'function')\n            throw new TypeError(`$(fun) is not a function`)\n            if(!event) throw new Error(`need type`)\n            if(!this.eventMap[event]){\n                this.eventMap[event] = [];\n            }\n            this.eventMap[event].push({\n                event:fun,\n                type:type,\n            })\n        }\n        emit(event, ...args){\n            if(this.eventMap[event]){\n                this.eventMap[event] = this.eventMap[event].filter((curr)=>{\n                    curr.data(...args)\n                    return curr.type != 'once'\n                })\n            }\n        }\n        remove(event,fun){\n            if(this.eventMap[event]){\n                this.eventMap[event] = this.eventMap[event].filter((curr)=>{\n                    return curr.event !== fun\n                })\n            }\n        }\n    }\n    //\u5c06\u6570\u5b5712345678\u8f6c\u5316\u6210RMB\u5f62\u5f0f\uff1a12\uff0c345\uff0c678\n    function RMB(str){\n        let arr = str.split(\"\").reverse();\n        let res = [];\n        for(let i=0;i<arr.length;i++){\n            res.push(arr[i]);\n            if((i + 1) % 3 === 0){\n                res.push(\",\")\n            }\n        }\n        return res.reverse().join(\"\");\n    }\n    console.log(RMB(\"12345678\"))\n\n    //\u6570\u7ec4\u8f6ctree\n    const getChildren = (data,result,pid) =>{\n        for(const item of data){\n            if(item.pid === pid){\n                const newItem= {...item.children:[]}\n                result.push(newItem)\n                getChildren(data,result,item.id)\n            }\n        }\n    }\n    const arrayToTree = (data,pid)=>{\n        const result = []\n        getChildren(data,pid,result)\n        return result\n    }\n\n\n    //\u5b9e\u73b0instanceof\n    /**\n        1.leftValue\u4ee3\u8868\u5b9e\u4f8b\u5bf9\u8c61\n        2.rightValue\u4ee3\u8868\u6784\u9020\u51fd\u6570\n        3.\u5229\u7528typeof\u65b9\u6cd5\uff0c\u5224\u8bfb\u8f93\u5165\u7684leftValue\u662f\u5426\u4e3a\u5bf9\u8c61\uff0c\u5982\u679c\u4e0d\u662f\uff0c\u5219\u8fd4\u56defalse\n        4.\u904d\u5386leftValue\u7684\u539f\u578b\u94fe\uff0c\u76f4\u5230\u627e\u5230rightValue\u7684prototype,\u5982\u679c\u67e5\u627e\u5931\u8d25\u7684\u8bdd\u8fd4\u56defalse,\u53cd\u4e4b\uff0c\u8fd4\u56detrue\n     */\n    function my_instanceof(leftValue,rightValue){\n        if(typeof leftValue !== 'object' || leftValue === null) return false;\n        let rightProto = rightValue.prototype,\n            leftProto = leftValue.__proto__;\n            while(true){\n                if(leftProto === null){\n                    return false\n                }\n                if(leftProto === rightProto){\n                    return true\n                }\n                leftProto = leftProto.__proto__\n            }\n    }\n    //call\u65b9\u6cd5\n    Function.prototype.myCall = function(context){\n        //\u5224\u65ad\u662f\u5426\u662ffunction \u7c7b\u578b\n        if(typeof context !== 'function'){\n            throw new Error('\u53ea\u6709function\u624d\u53ef\u4ee5\u8c03\u7528call\u65b9\u6cd5')\n        }\n        //\u5904\u7406\u9ed8\u8ba4\u4e0a\u4e0b\u6587\u5bf9\u8c61\n        context = context || window\n        // \u5904\u7406\u53c2\u6570\uff0c\u622a\u53d6\u9664\u7b2c\u4e00\u4e2a\u53c2\u6570\u5916\u7684\u6240\u6709\u53c2\u6570\n        const argu = [...argument].slice(1)\n        //\u5904\u7406\u8c03\u7528\u65b9\u6cd5\u7684this\u6307\u5411\n        context.fn = this\n        //\u83b7\u53d6\u7ed3\u679c\n        const result = context.fn(...argu)\n        //\u5220\u9664\u6dfb\u52a0\u65b9\u6cd5\n        delete context.fn\n        //\u8fd4\u56de\u7ed3\u679c\n        return result\n    }\n    //\u5b9e\u73b0\u4e00\u4e2a\u51fd\u6570\uff0c\u5224\u65ad\u4e00\u4e2a\u5b57\u7b26\u4e32\u662f\u5426\u662f\u56de\u6587\u5b57\u7b26\u4e32\n    function isPalindrome(str){\n        const arr = str.split('')\n        const reversed = arr.reverse().join('')\n        return str === reversed\n    }\n\n    //\u6df1\u62f7\u8d1d\n    deepClone(obj){\n        const objClone = Array.isArray(obj) ? [] : {};\n        if(obj && typeof obj === 'object'){\n            for(let key in obj){\n                if(obj.hasOwnProperty(key)){\n                    if(obj[key] && typeof obj[key] === 'object'){\n                        objClone[key] = this.deepClone(obj[key])\n                    }else{\n                        objClone[key] = obj[key]\n                    }\n                }\n            }\n        }\n        return objClone\n    }\n\n    //\u6570\u7ec4\u6700\u5927\u5dee\u503c\n    let arr = [ 23,4,5,30,4,5,7,7,79,-4]\n    const Dvalue = (arr) => {\n        let min = arr[0],\n        max = 0;\n        arr.forEach((value)=>{\n            if(value < min) min = value\n            if(value > max) max = value\n        })\n        return max - min\n    }\n\n    //\u5b9e\u73b0\u6590\u6ce2\u90a3\u5951\u6570\u5217\n    function fibonacci(n){\n        if(n <= 1){\n            return n\n        }\n        return fibonacci(n - 1) + fibonacci(n - 2)\n    }\n\n    //js\u5982\u4f55\u5b9e\u73b0\u63d2\u5165\u6392\u5e8f\n    function insertionSort(arr){\n        var len = arr.length\n        var preIndex,current\n        for(var i = 1;i<len;i++){\n            preIndex = i - 1;\n            current = arr[i];\n            while(preIndex >= 0 && arr[preIndex] > current){\n                arr[preIndex + 1] = arr[preIndex]\n            }\n            arr[preIndex + 1] = current\n        }\n        return arr\n    }\n\n    //\u5b9e\u73b0\u4e00\u4e2anew\n    function objectFactory(){\n        //\u521b\u5efa\u4e00\u4e2a\u65b0\u5bf9\u8c61\n        let obj = new Object()\n        //\u5c06\u6784\u9020\u51fd\u6570\u7684\u4f5c\u7528\u57df\u8d4b\u7ed9\u65b0\u5bf9\u8c61\n        let Constructor = [].shift.call(arguments)\n        obj.__proto__ = Constructor.prototype\n        //\u6267\u884c\u6784\u9020\u51fd\u6570\u4e2d\u7684\u4ee3\u7801\n        var ret = Constructor.apply(obj,arguments)\n        //\u8fd4\u56de\u65b0\u5bf9\u8c61\n        return typeof ret === 'object'?ret:obj\n    }\n\n\n")))}p.isMDXComponent=!0}}]);