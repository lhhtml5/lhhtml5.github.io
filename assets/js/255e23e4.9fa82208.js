"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3437],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var i=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,l=function(e,n){if(null==e)return{};var t,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var m=i.createContext({}),s=function(e){var n=i.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=s(e.components);return i.createElement(m.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,m=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(t),u=l,f=c["".concat(m,".").concat(u)]||c[u]||p[u]||a;return t?i.createElement(f,r(r({ref:n},d),{},{components:t})):i.createElement(f,r({ref:n},d))}));function u(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,r=new Array(a);r[0]=c;var o={};for(var m in n)hasOwnProperty.call(n,m)&&(o[m]=n[m]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var s=2;s<a;s++)r[s]=t[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>r});var i=t(7294),l=t(6010);const a="tabItem_Ymn6";function r(e){let{children:n,hidden:t,className:r}=e;return i.createElement("div",{role:"tabpanel",className:(0,l.Z)(a,r),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>u});var i=t(7462),l=t(7294),a=t(6010),r=t(2389),o=t(7392),m=t(7094),s=t(2466);const d="tabList__CuJ",p="tabItem_LNqP";function c(e){var n;const{lazy:t,block:r,defaultValue:c,values:u,groupId:f,className:h}=e,b=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=u??b.map((e=>{let{props:{value:n,label:t,attributes:i}}=e;return{value:n,label:t,attributes:i}})),v=(0,o.l)(y,((e,n)=>e.value===n.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===c?c:c??(null==(n=b.find((e=>e.props.default)))?void 0:n.props.value)??b[0].props.value;if(null!==g&&!y.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:x}=(0,m.U)(),[k,I]=(0,l.useState)(g),C=[],{blockElementScrollPositionUntilNextRender:T}=(0,s.o5)();if(null!=f){const e=w[f];null!=e&&e!==k&&y.some((n=>n.value===e))&&I(e)}const O=e=>{const n=e.currentTarget,t=C.indexOf(n),i=y[t].value;i!==k&&(T(n),I(i),null!=f&&x(f,String(i)))},E=e=>{var n;let t=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":{const n=C.indexOf(e.currentTarget)+1;t=C[n]??C[0];break}case"ArrowLeft":{const n=C.indexOf(e.currentTarget)-1;t=C[n]??C[C.length-1];break}}null==(n=t)||n.focus()};return l.createElement("div",{className:(0,a.Z)("tabs-container",d)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},h)},y.map((e=>{let{value:n,label:t,attributes:r}=e;return l.createElement("li",(0,i.Z)({role:"tab",tabIndex:k===n?0:-1,"aria-selected":k===n,key:n,ref:e=>C.push(e),onKeyDown:E,onClick:O},r,{className:(0,a.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":k===n})}),t??n)}))),t?(0,l.cloneElement)(b.filter((e=>e.props.value===k))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},b.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==k})))))}function u(e){const n=(0,r.Z)();return l.createElement(c,(0,i.Z)({key:String(n)},e))}},1058:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>m,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var i=t(7462),l=(t(7294),t(3905)),a=t(5488),r=t(5162);const o={slug:"December05"},m=void 0,s={permalink:"/blog/December05",source:"@site/blog/2022-12-5-seeDocusaurus.md",title:"seeDocusaurus",description:"",date:"2022-12-05T00:00:00.000Z",formattedDate:"2022\u5e7412\u67085\u65e5",tags:[],readingTime:5.675,hasTruncateMarker:!1,authors:[],frontMatter:{slug:"December05"},prevItem:{title:".eleTable",permalink:"/blog/December06"},nextItem:{title:"\u5341\u4e8c\u670803",permalink:"/blog/December03"}},d={authorsImageUrls:[]},p=[],c={toc:p};function u(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)(a.Z,{mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"a",label:"see you again",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'//\u5728vue2\u4e2d\u6709\u5982\u679c\u5217\u8868\u70b9\u51fb\u4e8b\u4ef6\u5728\u6bcf\u4e00\u9879item\u4e0a \u53ef\u4ee5\u4f7f\u7528\u81ea\u5b9a\u4e49\u5c5e\u6027\u62ff\u5230\u53c2\u6570\u8fdb\u884c\u6536\u96c6\u76f8\u5f53\u4e8e\u4e00\u79cd\u539f\u751f\u7684\u4e8b\u4ef6\u59d4\u6d3e\u673a\u5236 \u5e76\u4e14\u8fd9\u91cc\u7684\u9ad8\u4eae\u663e\u793a\u4f1a\u7528\u5230\u53c2\u8003\u503c\u601d\u60f3 example:\n<ul  click="clickEvent">\n <li> \n    <span :data-key = "item.id"></span>\n <li>\n</ul>\n //\u5728script\u4e2d\u4e5f\u5c31\u662fmethods:\nclickEvent(event){\n    const data = event.target.dataset\n    console.log(data,\'data\')\n}\n'))),(0,l.kt)(r.Z,{value:"b",label:"B",mdxType:"TabItem"},"\u8fd8\u6ca1\u7814\u7a76\u597d"),(0,l.kt)(r.Z,{value:"c",label:"C",mdxType:"TabItem"},"\u4e0d\u7528\u4e86")),"vue2 element-ui\u5c01\u88c5 //publicForm \u516c\u5171el-form",(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-<template>"},'    <el-form \n        :inline="true"\n        :model="ruleForm"\n        :rules="rules"\n        ref="ruleForm"\n        label-width="150px"\n        class="demo-ruleForm"\n        size="mini"\n    >\n        <template v-for="(item,index) in formconfig">\n            <el-form-item\n                v-if="!item.show"\n                :label="`${item.label}:`"\n                :prop="item.prop"\n                :label-width="item.labelWidth"\n                :style="{ width: item.formWidth}"\n            >\n                <el-input\n                    v-if="item.type == \'text\'"\n                    :disable="item.disabled"\n                    v-model="formInfo[item.prop]"\n                    :placeholder="item.placeholder || \'\'"\n                    :style="{ width: item.width }"\n                    :maxlength="item.maxlength"\n                    :show-word-limit="true"\n                    @focus="callback(item,index,$event)"\n                    @blur="handleBlur(item, index)"\n                    @clear="clear(item,index)"\n                    clearable\n                >\n                    <i\n                        v-if="item.icon"\n                        class="el-input__icon"\n                        :class="{ \'el-icon-edit\':item.icon }"\n                        :slot="item.event == \'focus\' ? \'prefix\' : \'suffix\'"\n                        @click="handleIconClick(item,index)"\n                    ></i>\n                        <template>{{item.slotLabel}}</template>                    \n                    </i>\n                </el-input>\n                <el-autocomplete\n                    v-if="item.type == \'autocomplete\'"\n                    :disabled="item.disabled"\n                    v-model="formInfo[item.prop]"\n                    :placeholder="item.placeholder || \'\u8bf7\u8f93\u5165\u6216\u9009\u62e9\u5185\u5bb9\'"\n                    :style="{width:item.width}"\n                    clearable\n                    :fetch-suggestions="querySearch"\n                    @focus="setAutocompleteArr(item,index)"\n                    @select="havedSelect"\n                ></el-autocomplete>\n                <el-input-number\n                    :style="{ width: item.width } || \'148px\'"\n                    v-if="item.type == \'number\'"\n                    v-model="formInfo[item.prop]"\n                    :disabled="item.disabled"\n                    controls-position="right"\n                    :step="item.step || 1"\n                    :precision="item.precision || 2"\n                    :min="item.min || 0"\n                    :max="item.max"\n                    @blur="handleBlur(item,index)"\n                ></el-input-number>\n                <el-input\n                    v-if="item.type == \'textarea\'"\n                    type="textarea"\n                    :disabled="item.disabled"\n                    :rows="item.row"\n                    autosize\n                    :maxlength="item.maxlength"\n                    :show-word-limit="true"\n                    v-model="formInfo[item.prop]"\n                    :placeholder="item.placeholder || \'\'"\n                    :style="{ width: item.width }"\n                    @blur="handleBlur(item,index)"\n                ></el-input>\n                <el-select\n                    v-if="item.type == \'select\'"\n                    :disable="item.disabled"\n                    v-model="formInfo[item.prop]"\n                    :placeholder="item.placeholder || \'\u8bf7\u9009\u62e9\'"\n                    :style="{ width:item.width }"\n                    @change="changedata(index,item)"\n                    filterable\n                    :multiple="item.multiple"\n                    :multiple-limit="item.multipleLimit"\n                    :collapse-tags="item.collapseTags"\n                    :allow-create="item.allowCreate"\n                    clearable\n                >\n                    <el-option\n                        v-for="i in item.list"\n                        :key="i.value"\n                        :label="i.label || i.text || i.name"\n                        :value="i.value || i.id"\n                        :disabled="i.disabled"\n                    ></el-option>\n                </el-select>\n                <template v-if="item.type == \'selectMonth\'">\n                    <el-select\n                        clearable\n                        :style="{ width: item.width || \'148px\' }"\n                        v-model.trim="formInfo[item.prop][0]"\n                        :placeholder="item.placeholder || \'\u8bf7\u9009\u62e9\'"\n                        size="mini"\n                        @change="changedata(index,item,\'start\')"\n                    >\n                        <el-option\n                            v-for="i in item.list || formatMonth"\n                            :key=" i.value"\n                            :label="i.name"\n                            :value="i.value"\n                        >\n                        </el-option>\n                    </el-select>\n                    <label for style="fontsize: 12px;color:#7b7f83">{{item.go || \'\'}}</label>\n                    <el-select \n                    clearable \n                    :style="{ width: item.width || \'148px\' }"\n                    v-model.trim="formInfo[item.prop][1]"\n                    :placeholder="item.placeholder || \'\u8bf7\u9009\u62e9\'"\n                    size="mini"\n                    @change="changedata(index,item,\'end\')"\n                    >\n                        <el-option \n                        v-for="i in item.listend || formatMonth"\n                        :key="i.paraCode"\n                        :label="i.paraKey"\n                        :value="i.paraCode"\n                        ></el-option>\n                    </el-select>\n                </template>\n                <el-select\n                 clearable\n                 v-if="item.type == \'selectYear\'"\n                 v-model="formInfo[item.prop]"\n                 :placeholder="item.placeholder || \'\u8bf7\u9009\u62e9\'"\n                 :style=" { width:item.width } "\n                >\n                    <el-option\n                        v-for="i in formatYear"\n                        :key="i.paraCode"\n                        :label="i.paraKey"\n                        :value="i.paraCode"\n                    ></el-option>\n                </el-select>\n                <el-cascader\n                    v-if="item.type == \'cascader\'"\n                    :options="item.options"\n                    :disabled="item.disabled"\n                    v-model="formInfo[item.prop]"\n                    clearable\n                    @change="changedata(index,item)"\n                    :change-on-select="item.onlySelect"\n                    :show-all-levels="item.levels"\n                    :style="{ width:item.width }"\n                ></el-cascader>\n                <el-radio-group\n                    v-if="item.type == \'radio\'"\n                    :disabled="item.disabled"\n                    v-model="formInfo[item.prop]"\n                    :placeholder="item.placeholder || \'\'"\n                    @change="changedata(index,item)"\n                >\n                    <template v-for="i in item.list">\n                        <el-radio>{{i.label}}</el-radio>\n                    </template>\n                </el-radio-group>\n                <el-date-picker\n                    clearable\n                    :value-format="\'yyyy-MM-dd\'"\n                    :disabled="item.disabled"\n                    v-if="item.type == \'date\'"\n                    v-model="formInfo[item.prop]"\n                    align="right"\n                    :type="item.type"\n                    placeholder="\u9009\u62e9\u65e5\u671f"\n                    :style="{ width: item.width }"\n                    @blur="handleBlur(item,index)"\n                ></el-date-picker>\n                <el-date-picker\n                    clearable\n                    value-format="yyyy-MM-dd HH:mm:ss"\n                    :disabled="item.disabled"\n                    v-if="item.type == \'datetime\'"\n                    v-model="formInfo[item.prop]"\n                    align="right"\n                    :type="item.type"\n                    placeholder="\u9009\u62e9\u65e5\u671f"\n                    :style="{ width: item.width }"\n                    @blur="handleBlur(item,index)"\n                ></el-date-picker>\n                <el-date-picker\n                    clearable\n                    value-format="yyyy-MM-dd"\n                    :disabled="item.disabled"\n                    v-if="item.type == \'daterange\'"\n                    v-model="formInfo[item.prop]"\n                    align="right"\n                    range-separator="\u81f3"\n                    :type="item.type"\n                    placeholder="\u9009\u62e9\u65e5\u671f"\n                    :style="{ width: item.width }"\n                    @blur="handler(item,index)"\n                ></el-date-picker>\n                <el-date-picker\n                    clearable\n                    value-format="yyyy-MM-dd HH:mm:ss"\n                    :disable="item.disabled"\n                    v-if="item.type == \'datetiemrange\'"\n                    v-model="formInfo[item.prop]"\n                    align="right"\n                    range-separator="\u81f3"\n                    :type="item.type"\n                    placeholder="\u9009\u62e9\u65e5\u671f"\n                    :style=" { width:item.width } "\n                    @blur="handleBlur(item,index)"\n                ><el-date-picker>\n                <el-date-picker\n                    clearable\n                    :disabled="item.disabled"\n                    v-if="item.type == \'year\'"\n                    v-model="formInfo[item.prop]"\n                    align="right"\n                    :type="item.type"\n                    placeholder="\u9009\u62e9\u5e74"\n                    :style=" { width: item.width } "\n                    @blur="handleBlur(item,index)"\n                >\n                </el-date-picker>\n                <el-time-picker\n                    clearable\n                    :value-format="item.format || \'HH:mm:ss\'"\n                    :disabled="item.disabled"\n                    v-if="item.type == \'time\'"\n                    v-model="formInfo[item.prop]"\n                    align="right"\n                    placeholder="\u9009\u62e9\u65f6\u95f4"\n                    :style="{ width: item.width }"\n                    @blur="handler(item,index)"\n                ></el-time-picker>\n                <el-date-picker\n                    clearable\n                    :disabled="item.disabled"\n                    v-if="item.type == \'month\'"\n                    v-model="formInfo[item.prop]"\n                    align="right"\n                    :type="item.type"\n                    placeholder="\u9009\u62e9\u6708"\n                    :style="{ width: item.width }"\n                    @blur="handleBlur(item,index)"\n                ></el-date-picker>\n                <span\n                    class="plainText"\n                    v-if="item.type == \'plainText\'"\n                    :style="{ width: item.width }"\n                >{{ formInfo[item.prop] }}</span>\n                <template v-if="item.type == \'selectText\'">\n                    <div>\n                        <el-select\n                            :disable="item.disabled"\n                            v-model="formInfo[item.prop]"\n                            :placeholder="item.placeholder || \'\u8bf7\u9009\u62e9\'"\n                            :style="{ width: item.width }"\n                            @change="changedata(index,item)"\n                            filterable\n                            allow-create\n                            default-first-option\n                        >\n                            <el-option\n                                v-for="i in item.list"\n                                :key="i.value"\n                                :label="i.label"\n                                :value="i.value"\n                                :disable="i.disabled"\n                            >\n                            </el-option>\n                        </el-select>\n                    </div>\n                </template>\n            </el-form-item>\n        </template>\n    </el-form>\n</template>\n<script>\nexport default {\n    props:{\n        formcofig:{\n            //\u8868\u5355\u914d\u7f6e\u6570\u636e\n            type: Array,\n        },\n        formInfo: {\n            //\u8868\u5355\u9ed8\u8ba4\u663e\u793a\u6570\u636e\n            type:Object,\n        },\n        rules: {\n            //\u8868\u5355\u9a8c\u8bc1\n            type: Object,\n        }\n    },\n    mounted(){},\n    watch:{},\n    data(){\n        return {\n            //input\u7c7b\u578b\u4f1fautocomplete\u65f6\u52a8\u6001\u8fc7\u6ee4\u7684\u6570\u7ec4\n            restaurants:[],\n            formItemIndex: 0,\n        }\n    },\n    computed: {\n        formatMonth() {\n            return [\n                {\n                    paraCode:\'01\',\n                    paraKey:\'\u4e00\u6708,\n                },\n                {\n                    paraCode:\'02\',\n                    paraKey:\'\u4e8c\u6708\',\n                },\n                {\n                    paraCode:\'03\',\n                    paraKey:\'\u4e09\u6708\',\n                },\n                {\n                    paraCode:\'04\',\n                    paraKey:\'\u56db\u6708\',\n                },\n                {\n                    paraCode:\'05\',\n                    paraKey:\'\u4e94\u6708\',\n                },\n                {\n                    paraCode:\'06\',\n                    paraKey:\'\u516d\u6708\',\n                },\n                {\n                    paraCode:\'07\',\n                    paraKey:\'\u4e03\u6708\',\n                },\n                {\n                    paraCode:\'08\',\n                    paraKey:\'\u516b\u6708\',\n                },\n                {\n                    paraCode:\'09\',\n                    paraKey:\'\u4e5d\u6708\',\n                },\n                {\n                    paraCode:\'10\',\n                    paraKey:\'\u5341\u6708\',\n                },\n                {\n                    paraCode:\'11\',\n                    paraKey:\'\u5341\u4e00\u6708\',\n                },\n                {\n                    paraCode:\'12\',\n                    paraKey:\'\u5341\u4e8c\u6708\',\n                }\n            ]\n        },\n        formatYear(){\n            let dateList = []\n            for(let i = 0; i < 7; i++){\n                dateList.push(new Date().getFullYear() + i - 5)\n            }\n            let select = []\n            dateList.forEach((item)=>{\n                const obj = {\n                    paraCode:item,\n                    paraKey:item\n                }\n                select.push(obj)\n            })\n            return select.reverse()\n        }\n    },\n    methods:{\n        setAutocompleteArr(val,index){\n            //\u52a8\u6001\u8bbe\u5b9a\u6570\u7ec4\n            this.restaurants = val.list\n            this.formItemIndex = index\n        },\n        havedSelect(val){\n            //\u9ed8\u8ba4\u5f39\u6846\u51fa\u73b0\u4f1a\u51fa\u73b0select \u4e0b\u62c9\u89e6\u53d1\u5fc5\u586b\u9a8c\u8bc1\n            this.$refs.ruleForm.clearValidate(\n                this.formconfig[this.formItemIndex].prop\n            )\n            this.$emit(\'autoCompleteSelected\',val)\n        },\n        querySearch(queryString,cb){\n            //\u8f93\u5165\u65f6\u7684\u8fc7\u6ee4\u65b9\u6cd5\n            let restaurants = this.restaurants\n            let results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants\n            //\u8c03\u7528 callback \u8fd4\u56de\u5efa\u8bae\u5217\u8868\u7684\u6570\u636e\n            cb(results)\n        },\n        createFilter(queryString){\n            //\u81ea\u5b9a\u4e49\u8fc7\u6ee4\n            return (restaurant) => {\n                return (\n                    restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0\n                )\n            }\n        },\n        handleIconClick(item,i){\n            if(this.formconfig[i].icon == true) {\n                if(this.formconfig[i].event == \'focus\'){\n                    this.formconfig[i].event = \'\'\n                }else{\n                    this.formconfig[i].event = \'focus\'\n                }\n                this.$emit(\'handleIconClick,{ item, i })\n            } else {\n            }\n        },\n        handleBlur(item,i) {\n            if(item.event == \'blur\') {\n                this.$emit(\'handleBlur\',{ item,i })\n            }\n        },\n        clear(item,index){\n            if(item.event == \'focus\'){\n                for(let p in item) {\n                    if(this.ruleForm[item[p]]){\n                        this.ruleForm[item[p]] = \'\'\n                    }\n                }\n                this.$emit(\'clear\',{item,index})\n            }\n        },\n        callback(item,index,e){\n            if(item.event == \'focus\'){\n                e.target.blur()\n                this.$emit(\'callback\',{ item, index})\n            }else{\n                return false\n            }\n        },\n        buttonEvent(item) {\n            this.$emit(\'buttonEvent\', item)\n        },\n        changedata(ind,item,state){\n            if((item.type == \'selectMonth\' || item.type == \'select\' || item.type == \'radio\' || item.type == \'cascader\') && item.event == \'change\') {\n                this.$emit(\'selectChange\', { item, ind, state })\n            }\n        },\n        //\u76f4\u63a5\u4fdd\u5b58\u53ef\u4ee5\u8c03\u7528\u8fd9\u4e2a\u7ec4\u4ef6\u7684\u5b9e\u4f8b\uff0c\u5199\u4fdd\u5b58\u9700\u8981\u63a5\u6536saveForm\n        submitForm(){\n            this.$refs.ruleForm.validate((valid)=>{\n                if(valid) {\n                    this.$emit(\'saveForm\',this.ruleForm)\n                }else{\n                    return false\n                }\n            })\n        },\n        resetForm() {\n            //\u91cd\u7f6e\u8868\u683c\u6570\u636e\n            this.$refs.ruleForm.resetFields()\n        }\n    }\n}\n\n<\/script>\n<style scoped>\n.el-input .el-input__inner{\n    border-radius:0px;\n}\n.el-input{\n    width:100%;\n}\n.el-input.is-disabled .el-input__inner {\n    background-color: #f5f7fa;\n}\n.el-form--inline .el-form-item {\n    margin -right: 0px;\n}\ni.el-input__icon.el-icon-edit{\n    color:rgba(255,163,82,1);\n    cursor: pointer;\n    font-size: 16px;\n}\ni.el-input__icon {\n    height: auto;\n}\n.plainText {\n    display: inline-block;\n    font-weight: 900;\n}\n</style>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"// \u7ec4\u4ef6\u8c03\u7528\n      <public-form\n        :formconfig=\"formconfig\"\n        :formInfo=\"formInfo\"\n        :rules=\"rulesAdd\"\n        @selectChange=\"selectChange\"\n        @handleBlur=\"handleBlur\"\n      ></public-form>\n\n      <script>\n        export default {\n            name:'',\n            props:{},\n            data(){\n                return {\n                    formconfig:[\n                        {\n                            label:'',\n                            prop:'',\n                            type:'select',\n                            value:'',\n                            disable:false,\n                            labelWidth:'',\n                            list:,\n                            event:'change' //\u6b64\u5904change\u4e8b\u4ef6  \u4e3a\u8fd9\u4e2aselectChange(item)\u4f20\u9012\u53c2\u6570\n                        }\n                    ]\n                }\n            }\n        }\n      <\/script>\n")))}u.isMDXComponent=!0}}]);