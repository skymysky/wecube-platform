(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cfa86cae"],{"06d4":function(e,t,a){e.exports=a.p+"img/d31581da116d54ba8b9af19940bc69a1.png"},"160e":function(e,t,a){e.exports=a.p+"img/aa97a312eff26038fcd5c2e85aacc48e.png"},"2a66":function(e,t,a){e.exports=a.p+"img/51528fbe1d068dc73faeb97fede764ba.png"},4917:function(e,t,a){"use strict";var n=a("cb7c"),i=a("9def"),r=a("0390"),s=a("5f1b");a("214f")("match",1,function(e,t,a,c){return[function(a){var n=e(this),i=void 0==a?void 0:a[t];return void 0!==i?i.call(a,n):new RegExp(a)[t](String(n))},function(e){var t=c(a,e,this);if(t.done)return t.value;var o=n(e),d=String(this);if(!o.global)return s(o,d);var u=o.unicode;o.lastIndex=0;var h,l=[],p=0;while(null!==(h=s(o,d))){var f=String(h[0]);l[p]=f,""===f&&(o.lastIndex=r(d,i(o.lastIndex),u)),p++}return 0===p?null:l}]})},"7b85":function(e,t,a){e.exports=a.p+"img/4e4bbe31b3a2c2985a741e9a2531d8f5.png"},"9fd9":function(e,t,a){e.exports=a.p+"img/2af2877f77a2b482e5001d8b98d372de.png"},b9bd:function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,"#physicalGraph[data-v-27457069]{position:relative;min-height:300px}#graphTree[data-v-27457069]{position:relative;min-height:calc(50% + 300px)}",""])},c92a:function(e,t,a){var n=a("b9bd");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=a("2fb2").default;i("21abbfa2",n,!0,{})},e276:function(e,t,a){"use strict";a.r(t);a("8e6e"),a("456d");var n=a("75fc"),i=(a("4917"),a("bd86")),r=a("768b"),s=(a("96cf"),a("3b8d")),c=(a("7514"),a("7f7f"),a("ac6a"),a("5df3"),a("f400"),a("fd32")),o=(a("6d21"),a("aa22")),d=a("ab33"),u=a("30be"),h=a("793c"),l=a("f0c6");function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(a,!0).forEach(function(t){Object(i["a"])(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var g=a("7b85"),b=a("06d4"),y=a("9fd9"),v=a("e7b4"),m=a("2a66"),w=a("160e"),T=a("f8ed"),D=new Map([["new","green"],["created","green"],["update","dodgerblue"],["change","dodgerblue"],["destroyed","red"],["delete","red"]]),k=["#c8d6f0","#cde4fd","#acc1e8","#516282","#243047","#0f1624"],x={components:{PhysicalGraph:l["a"]},data:function(){return{isShowTabs:!1,systemDesigns:[],systemDesignVersion:"",envs:[],env:"",currentTab:"logic-graph",deployTree:[],selectedDeployItems:[],graphSource:[],graphs:{},tabList:[],payload:{filters:[],pageable:{pageSize:10,startIndex:0},paging:!0,sorting:{}},spinShow:!1,graph:{},systemData:[],physicalGraphData:[],physicalGraphLinks:[],serviceCiTypeId:"",invokeCiTypeId:"",instanceCiTypeId:"",isDataChanged:!1,physicalSpin:!1,graphTree:{},layerData:[],systemTreeData:[],rankNodes:{},treeLayerEnumName:"deploy_tree_layer",treeSpinShow:!0}},computed:{tableRef:function(){return"table"+this.currentTab},needCheckout:function(){return"ciDataEnquiry"!==this.$route.name},envCodeId:function(){var e=this;return this.envs.find(function(t){return t.code===e.env}).codeId||""}},methods:{initADGraph:function(){var e=this;arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.spinShow=!0;var t=function(){var t=c["select"]("#graph");t.on("dblclick.zoom",null).on("wheel.zoom",null).on("mousewheel.zoom",null),e.graph.graphviz=t.graphviz().scale(1.2).width(.96*window.innerWidth).height(.8*window.innerHeight).zoom(!0)};t(),this.renderADGraph(this.systemData),this.spinShow=!1},renderADGraph:function(e){var t=this.genADDOT(e);this.graph.graphviz.renderDot(t);var a=c["select"]("#graph").select("svg"),n=a.attr("width"),i=a.attr("height");a.attr("viewBox","0 0 "+n+" "+i)},genADDOT:function(e){var t=this,a=e||[],n=[],i=16,r=12,s=this.systemDesigns.find(function(e){return t.systemDesignVersion===e.guid});if(!s)return"digraph G {}";var c=s&&s.code||"SYS",o=new Map,d=["digraph G{","rankdir=LR nodesep=0.5;",'size = "'+i+","+r+'";',"subgraph cluster_"+s.guid+'{ label="'+c+'";tooltip="'+s.description+'";'];return a.forEach(function(e){var a;a=e.data.code&&null!==e.data.code&&""!==e.data.code?e.data.code:e.data.key_name,d.push("subgraph cluster_"+e.guid+"{"),d.push('label="'.concat(a,'";tooltip="').concat(e.data.description,'";')),Array.isArray(e.children)&&e.children.forEach(function(e){var a;a=e.data.code&&null!==e.data.code&&""!==e.data.code?e.data.code:e.data.key_name;var i="grey";e.data.state&&D.has(e.data.state.code)&&(i=D.get(e.data.state.code)),d.push("subgraph cluster_"+e.guid+"{"),d.push('label="'.concat(a,'"; style=filled; color=').concat(i,';tooltip="').concat(e.data.description,'"')),d.push('"'.concat(e.guid,'"[shape="none",')),d.push('label=<<TABLE BORDER="0" CELLBORDER="1" CELLSPACING="0">\n<TR><TD COLSPAN="2"> '.concat(a," </TD></TR>")),o.set(e.guid,a),Array.isArray(e.children)&&e.children.forEach(function(e){if(e.ciTypeId===t.instanceCiTypeId){var a="";e.data.host&&e.data.host.key_name&&(a=e.data.host.key_name),d.push("<TR><TD> ".concat(a," </TD><TD>").concat(e.data.port,"</TD></TR>"))}}),d.push(e.data.key_name+"</TABLE>>]"),Array.isArray(e.children)&&e.children.forEach(function(a){if(a.ciTypeId===t.invokeCiTypeId&&n.push(a),a.ciTypeId===t.serviceCiTypeId){var i;i=a.data.code&&null!==a.data.code&&""!==a.data.code?a.data.code:a.data.key_name;var r="";r=a.data.dns_domain?a.data.dns_name+a.data.dns_domain.value:a.data.dns_name;var s=a.data.ip?a.data.ip:"";d.push('"'.concat(a.guid,'" [shape="record", label="{{ ').concat(i,"|{ ").concat(r," | ").concat(a.data.service_port," }| ").concat(s,' }}", tooltip="').concat(a.data.description,'"];')),o.set(a.guid,i),d.push('"'.concat(a.guid,'" ->"').concat(e.guid,'" [arrowhead="t"];'))}}),d.push("} ")}),d.push("} ")}),d.push("} "),n.forEach(function(e){var t="grey";e.data.state&&D.has(e.data.state.code)&&(t=D.get(e.data.state.code)),d.push('"'+e.data.unit.guid+'"->"'+e.data.service.guid+'"[id="'+e.guid+'",color="'+t+'"];'),o.has(e.data.unit.guid)||d.push('"'+e.data.unit.guid+'"[label="'+e.data.unit.key_name+'"];'),o.has(e.data.service.guid)||d.push('"'+e.data.service.guid+'"[label="'+e.data.service.key_name+'"];')}),d.push("}"),d.join("")},reloadHandler:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.querySysTree(),this.isDataChanged=!1;case 2:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),onSystemDesignSelect:function(e){this.systemDesignVersion=e,this.isShowTabs=!1,this.deployTree=[],this.systemData=[],this.systemTreeData=[],this.initADGraph(),this.initTreeGraph()},onEnvSelect:function(e){this.env=e,this.isShowTabs=!1,this.deployTree=[],this.systemData=[],this.systemTreeData=[],this.initADGraph(),this.initTreeGraph()},getSystemDesigns:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t,a,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["Mb"])();case 2:t=e.sent,a=t.status,n=t.data,t.message,"OK"===a&&(this.systemDesigns=n.contents.map(function(e){return e.data}));case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),getAllEnvs:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t,a,n,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t={filters:[{name:"cat.catName",operator:"eq",value:"env"}],paging:!1},e.next=3,Object(o["O"])(t);case 3:a=e.sent,n=a.status,i=a.data,a.message,"OK"===n&&(this.envs=i.contents);case 8:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),onTreeCheck:function(e,t){this.selectedDeployItems=e},querySysTree:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t,a,n,i=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.systemDesignVersion&&this.env){e.next=3;break}return this.$Notice.warning({title:"Warning",desc:"请先选择系统设计和环境类型"}),e.abrupt("return");case 3:return this.spinShow=!0,this.treeSpinShow=!0,e.next=7,Object(o["A"])();case 7:t=e.sent,a=t.status,t.message,n=t.data,"OK"===a&&n.forEach(function(e){"service"===e.tableName&&(i.serviceCiTypeId=e.ciTypeId),"invoke"===e.tableName&&(i.invokeCiTypeId=e.ciTypeId),"running_instance"===e.tableName&&(i.instanceCiTypeId=e.ciTypeId)}),this.physicalSpin=!0,this.getAllDeployTreesFromDesignCi(),this.getPhysicalGraphData();case 15:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),getAllDeployTreesFromDesignCi:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t,a,n,i,r,s=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["D"])(this.systemDesignVersion,this.env);case 2:t=e.sent,a=t.status,t.message,n=t.data,"OK"===a&&(this.isShowTabs=!0,this.deployTree=this.formatTree(n),this.systemData=n,this.initADGraph(),i=this.systemDesigns.find(function(e){return s.systemDesignVersion===e.guid}),i&&(r={guid:this.systemDesignVersion,children:n,data:{code:i.code}},this.systemTreeData=[],this.systemTreeData.push(r),this.initTreeGraph()));case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),getPhysicalGraphData:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t,a,n,i,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.physicalGraphData=[],t=[Object(o["V"])(this.systemDesignVersion,this.envCodeId),Object(o["U"])()],e.next=4,Promise.all(t);case 4:a=e.sent,n=Object(r["a"])(a,2),i=n[0],s=n[1],"OK"===i.status&&(i.data.length?this.physicalGraphData=i.data:(this.physicalGraphData=[],this.physicalSpin=!1)),"OK"===s.status&&(this.physicalGraphLinks=s.data||[]);case 10:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),graphCallback:function(){this.physicalSpin=!1},formatTree:function(e){var t=this;return e.map(function(e){return e.children&&e.children.length>0?f({},e,{title:e.data.key_name,id:e.guid,expand:!0,disableCheckbox:!e.data.orchestration,children:t.formatTree(e.children)}):f({},e,{title:e.data.key_name,id:e.guid,expand:!0,disableCheckbox:!e.data.orchestration})})},executeDeploy:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t,a,n,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t={attach:{attachItems:[{filterName:"systemDesignVersion",filterValue:this.systemDesignVersion},{filterName:"env",filterValue:this.env}]},requests:this.selectedDeployItems.map(function(e){return{ciDataId:e.guid,ciTypeId:e.ciTypeId,processDefinitionKey:e.data.orchestration.codeId}})},e.next=3,Object(o["tc"])(t);case 3:a=e.sent,n=a.status,a.data,i=a.message,"OK"===n&&this.$Notice.success({title:"开始执行",desc:i});case 8:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),previewDeploy:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t,a,n,i,r=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=this.selectedDeployItems.map(function(e){return{ciGuid:e.guid,ciTypeId:e.ciTypeId,definitionKey:e.data.orchestration.codeId}}),e.next=3,Object(o["Ub"])(t);case 3:a=e.sent,n=a.status,i=a.data,a.message,"OK"===n&&(this.graphSource=i,i.forEach(function(e,t){r.$set(r.graphs,e.defintiionKey+"_"+t,{})}),this.$nextTick(function(){r.initGraph()}));case 8:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),loadImage:function(e,t){var a=this;(t.match(/image=[^,]*(img\/\d*|png)/g)||[]).filter(function(e,t,a){return a.indexOf(e)===t}).map(function(e){return e.substr(7)}).forEach(function(t){a.graphs[e].graphviz.addImage(t,"48px","48px")})},genDOT:function(e){var t={startEvent:w,errEndEvent:b,eventBasedGateway:y,intermediateCatchEvent:m,exclusiveGateway:v,endEvent:g,serviceTask:T},a=["digraph  {",'bgcolor="transparent";','Node [fontname=Arial,shape="none",width="0.8", height="0.8", color="#273c75" ,fontsize=10];','Edge [fontname=Arial, minlen="1", color="#000", fontsize=10];'],n=function(e,t){return'"'.concat(e.id,'" -> "').concat(t.id,'"[edgetooltip="').concat(t.name,'"];')},i=function(e){var a="#273c75",n="".concat(t[e.nodeTypeName]||t.startEvent);return'"'.concat(e.id,'" [image="').concat(n,'" label="').concat(e.name,'" labelloc="b", fontcolor="').concat(a,'"];')},r=new Map;return e.forEach(function(t){a.push(i(t)),t.toNodeIds.length&&t.toNodeIds.forEach(function(i){var s=e.find(function(e){return i===e.id});if(s){var c=n(t,s);r.has(c)||(a.push(c),r.set(c,!0))}}),t.fromNodeIds.length&&t.fromNodeIds.forEach(function(i){var s=e.find(function(e){return i===e.id});if(s){var c=n(s,t);r.has(c)||(a.push(c),r.set(c,!0))}})}),a.push("}"),a.join("")},renderGraph:function(e,t){var a=this.genDOT(e.flowNodes||[]);this.loadImage(e.defintiionKey+"_"+t,a),this.graphs[e.defintiionKey+"_"+t].graphviz.renderDot(a)},initGraph:function(){var e=this,t=function(){e.graphSource.forEach(function(t,a){var n;n=c["select"]("#graph_"+t.defintiionKey+"_"+a),n.on("dblclick.zoom",null),e.graphs[t.defintiionKey+"_"+a].graphviz=n.graphviz().zoom(!1)})};t(),this.graphSource.forEach(function(t,a){e.renderGraph(t,a)})},initTreeGraph:function(){var e,t=this;arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.treeSpinShow=!0;var a=function(){e=c["select"]("#graphTree"),e.on("dblclick.zoom",null).on("wheel.zoom",null).on("mousewheel.zoom",null),t.graphTree.graphviz=e.graphviz().scale(1.2).width(.96*window.innerWidth).height(.8*window.innerHeight).zoom(!0)};a(),this.renderTreeGraph(this.systemTreeData),this.treeSpinShow=!1},renderTreeGraph:function(e){var t=this.genTreeDOT(e);this.graphTree.graphviz.renderDot(t);var a=c["select"]("#graphTree").select("svg"),n=a.attr("width"),i=a.attr("height");a.attr("viewBox","0 0 "+n+" "+i)},genTreeDOT:function(e){if(0===e.length)return"digraph G {}";var t=16,a=12,i=["digraph G{","rankdir=TB nodesep=0.5;",'size="'.concat(t,",").concat(a,'";')].concat(Object(n["a"])(this.genlayerDot(this.layerData)),["Node [fontname=Arial, fontsize=12];",'Edge [fontname=Arial, minlen="2",fontsize=10, arrowhead = "t"];'],Object(n["a"])(this.genChildrenDot(e||[],1)),Object(n["a"])(this.genRankNodeDot()),["}"]);return i.join(" ")},genlayerDot:function(e){var t=this,a=[];return a.push("{"),a.push("node [shape=plaintext, fontsize=16];"),e.forEach(function(n,i){i===e.length-1?a.push("".concat(n.value)):a.push("".concat(n.value," -> ")),t.rankNodes[i+1]=[],t.rankNodes[i+1].push(n.value)}),a.push(" [style=invis]"),a.push("}"),a},genChildrenDot:function(e,t){var a=this,n=[];return e.forEach(function(e){n=9===e.ciTypeId?n.concat(['"'.concat(e.data.service.guid,'"'),'[id="n_'.concat(e.data.service.guid,'";'),'label="'.concat(e.data.service.code||e.data.service.key_name,'";'),"shape=ellipse;",'style="filled";color="'.concat(k[t],'";'),'tooltip="'.concat(e.data.service.description||"-",'"];')]):n.concat(['"'.concat(e.guid,'"'),'[id="n_'.concat(e.guid,'";'),'label="'.concat(e.data.code||e.data.key_name,'";'),"shape=ellipse;",'style="filled";color="'.concat(k[t],'";'),'tooltip="'.concat(e.data.description||"-",'"];')]),a.rankNodes[t].push('"'.concat(e.guid,'"')),e.children instanceof Array&&e.children.length&&(n=n.concat(a.genChildrenDot(e.children,t+1)),e.children.forEach(function(t){n=n.concat(['"'.concat(e.guid,'" -> "').concat(t.guid,'";')])}))}),n},genRankNodeDot:function(){var e=this,t=[];return Object.keys(this.rankNodes).forEach(function(a){t=t.concat(["{rank=same;",e.rankNodes[a].join(";"),";}"])}),t},queryTreeLayerData:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t,a,n,i,r,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t={filters:[{name:"catName",operator:"eq",value:this.treeLayerEnumName}]},e.next=3,Object(o["Xb"])(t);case 3:if(a=e.sent,n=a.status,a.message,i=a.data,"OK"!==n){e.next=13;break}return r=i.contents[0].catId,e.next=11,Object(o["Yb"])(0,r,{});case 11:s=e.sent,"OK"===s.status&&(this.layerData=s.data.contents);case 13:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),handleTabClick:function(e){this.payload.filters=[],this.currentTab=e,"logic-graph"!==this.currentTab&&"deploy-detail"!==this.currentTab&&"physicalGraph"!==this.currentTab&&"logic-tree-graph"!==this.currentTab&&this.getCurrentData()},getCurrentData:function(){this.queryCiAttrs(this.currentTab),this.queryCiData()},onSelectedRowsChange:function(e,t){var a=this;if(e.length>0){var n=[],i=[];e.forEach(function(e,t){n.push(!!e.nextOperations.find(function(e){return"update"===e})),i.push(!!e.nextOperations.find(function(e){return"delete"===e}))});var r=function(e){return!0===e};this.tabList.forEach(function(e){e.id===a.currentTab&&e.outerActions.forEach(function(e){switch(e.actionType){case"add":e.props.disabled="add"===e.actionType;break;case"edit":e.props.disabled=!n.every(r);break;case"delete":e.props.disabled=!i.every(r);break;default:break}})})}else this.tabList.forEach(function(e){e.id===a.currentTab&&e.outerActions.forEach(function(e){e.props.disabled=!("add"===e.actionType||"export"===e.actionType||"cancel"===e.actionType)})})},actionFun:function(e,t){switch(e){case"export":this.exportHandler();break;case"add":this.addHandler();break;case"edit":this.editHandler();break;case"save":this.saveHandler(t);break;case"delete":this.deleteHandler(t);break;case"cancel":this.cancelHandler();break;case"innerCancel":this.$refs[this.tableRef][0].rowCancelHandler(t.weTableRowId);break;default:this.defaultHandler(e,t);break}},sortHandler:function(e){this.payload.sorting={asc:"asc"===e.order,field:e.key},this.getCurrentData()},handleSubmit:function(e){this.payload.filters=e,this.getCurrentData()},defaultHandler:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t,a){var n,i,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["Sb"])(this.currentTab,a.guid,t);case 2:n=e.sent,n.data,i=n.status,r=n.message,"OK"===i&&(this.$Notice.success({title:t,desc:r}),this.queryCiData());case 7:case"end":return e.stop()}},e,this)}));function t(t,a){return e.apply(this,arguments)}return t}(),addHandler:function(){var e=this;this.tabList.forEach(function(t){if(t.id===e.currentTab){var a={};t.tableColumns.forEach(function(e){"multiSelect"===e.inputType||"multiRef"===e.inputType?a[e.inputKey]=[]:a[e.inputKey]=""}),a["isRowEditable"]=!0,a["isNewAddedRow"]=!0,a["weTableRowId"]=1,a["nextOperations"]=[],t.tableData.unshift(a),e.$nextTick(function(){e.$refs[e.tableRef][0].pushNewAddedRowToSelections(),e.$refs[e.tableRef][0].setCheckoutStatus(!0)}),t.outerActions.forEach(function(e){e.props.disabled="add"===e.actionType})}})},cancelHandler:function(){var e=this;this.$refs[this.tableRef][0].setAllRowsUneditable(),this.$refs[this.tableRef][0].setCheckoutStatus(),this.tabList.forEach(function(t){t.id===e.currentTab&&t.outerActions.forEach(function(e){e.props.disabled=!("add"===e.actionType||"export"===e.actionType||"cancel"===e.actionType)})})},deleteHandler:function(e){var t=this;this.$Modal.confirm({title:"确认删除？","z-index":1e6,onOk:function(){var a=Object(s["a"])(regeneratorRuntime.mark(function a(){var n,i,r,s;return regeneratorRuntime.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return n={id:t.currentTab,deleteData:e.map(function(e){return e.guid})},a.next=3,Object(o["t"])(n);case 3:i=a.sent,r=i.status,s=i.message,i.data,"OK"===r&&(t.$Notice.success({title:"Delete data Success",desc:s}),t.isDataChanged=!0,t.tabList.forEach(function(e){e.id===t.currentTab&&e.outerActions.forEach(function(e){e.props.disabled="save"===e.actionType||"edit"===e.actionType||"delete"===e.actionType})}),t.getCurrentData());case 8:case"end":return a.stop()}},a)}));function n(){return a.apply(this,arguments)}return n}(),onCancel:function(){}}),document.querySelector(".ivu-modal-mask").click()},editHandler:function(){var e=this;this.$refs[this.tableRef][0].swapRowEditable(!0),this.tabList.forEach(function(t){t.id===e.currentTab&&t.outerActions.forEach(function(e){"save"===e.actionType&&(e.props.disabled=!1)})}),this.$nextTick(function(){e.$refs[e.tableRef][0].setCheckoutStatus(!0)})},deleteAttr:function(){var e=this,t=[],a=this.tabList.find(function(t){return t.id===e.currentTab});return a.tableColumns.forEach(function(e){e.isAuto&&t.push(e.propertyName)}),t},saveHandler:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t){var a,n,i,r,s,c,d,u,h,l,p,f,g,b,y,v=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(a=function(){v.tabList.forEach(function(e){e.id===v.currentTab&&e.outerActions.forEach(function(e){e.props.disabled=!("add"===e.actionType||"export"===e.actionType)})}),v.$refs[v.tableRef][0].setAllRowsUneditable(),v.$nextTick(function(){var e=v.$refs[v.tableRef][0].$refs.table.$refs.tbody.objData;for(var t in e)e[t]._isChecked=!1,e[t]._isDisabled=!1})},n=JSON.parse(JSON.stringify(t)),i=n.filter(function(e){return e.isNewAddedRow}),r=n.filter(function(e){return!e.isNewAddedRow}),!(i.length>0)){e.next=16;break}return s=this.deleteAttr(),i.forEach(function(e){s.forEach(function(t){delete e[t]}),delete e.isRowEditable,delete e.weTableForm,delete e.weTableRowId,delete e.isNewAddedRow,delete e.nextOperations}),c=this.tabList.find(function(e){return e.id===v.currentTab}),d={id:c&&c.code,createData:i},e.next=11,Object(o["i"])(d);case 11:u=e.sent,h=u.status,l=u.message,u.data,"OK"===h&&(this.$Notice.success({title:"Add data Success",desc:l}),this.isDataChanged=!0,a(),this.getCurrentData());case 16:if(!(r.length>0)){e.next=27;break}return r.forEach(function(e){delete e.isRowEditable,delete e.weTableForm,delete e.weTableRowId,delete e.isNewAddedRow,delete e.nextOperations}),p=this.tabList.find(function(e){return e.id===v.currentTab}),f={id:p&&p.code,updateData:r},e.next=22,Object(o["zc"])(f);case 22:g=e.sent,b=g.status,y=g.message,g.data,"OK"===b&&(this.$Notice.success({title:"Update data Success",desc:y}),this.isDataChanged=!0,a(),this.getCurrentData());case 27:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),exportHandler:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t,a,n,i,r,s,c=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=this.tabList.find(function(e){return e.code===c.currentTab}),a={codeId:t.codeId,envCode:this.env,systemDesignGuid:this.systemDesignVersion},n=f({},this.payload,{paging:!1}),e.next=5,Object(o["hb"])(a,n);case 5:i=e.sent,r=i.status,i.message,s=i.data,"OK"===r&&this.$refs[this.tableRef][0].export({filename:"Ci Data",data:Object(u["a"])(s.contents.map(function(e){return e.data}))});case 10:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),pageChange:function(e){var t=this;this.tabList.forEach(function(a){a.id===t.currentTab&&(a.pagination.currentPage=e)}),this.getCurrentData()},pageSizeChange:function(e){var t=this;this.tabList.forEach(function(a){a.id===t.currentTab&&(a.pagination.pageSize=e)}),this.getCurrentData()},queryCiAttrs:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t){var a,n,i,r,s,c=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["fb"])(t);case 2:a=e.sent,n=a.status,a.message,i=a.data,[],r=["created_date","updated_date","created_by","updated_by","key_name","guid"],"OK"===n&&(s=[],i.forEach(function(e){r.find(function(t){return t===e.propertyName});var t=e.propertyName;"decommissioned"!==e.status&&"notCreated"!==e.status&&s.push(f({},e,{title:e.name,key:t,inputKey:e.propertyName,inputType:e.inputType,referenceId:e.referenceId,disEditor:!e.isEditable,disAdded:!e.isEditable,placeholder:e.name,component:"Input",ciType:{id:e.referenceId,name:e.name},type:"text"},d["a"][e.inputType]))}),this.tabList.forEach(function(e){e.id===c.currentTab&&(e.tableColumns=c.getSelectOptions(s))}));case 9:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),getSelectOptions:function(e){return e.forEach(function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t){var a,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if("select"!==t.inputType){e.next=8;break}return e.next=3,Object(o["nb"])(0,t.referenceId);case 3:a=e.sent,a.status,a.message,n=a.data,t["options"]=n.filter(function(e){return"active"===e.status}).map(function(e){return{label:e.value,value:e.codeId}});case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),e},queryCiData:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t,a,n,i,r,s=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(""!==this.env&&""!==this.systemDesignVersion){e.next=3;break}return this.$Notice.warning({title:"Warning",desc:"请先选择系统设计和环境类型"}),e.abrupt("return");case 3:return this.payload.pageable.pageSize=10,this.payload.pageable.startIndex=0,this.tabList.forEach(function(e){e.id===s.currentTab&&(s.payload.pageable.pageSize=e.pagination.pageSize,s.payload.pageable.startIndex=(e.pagination.currentPage-1)*e.pagination.pageSize)}),t=this.tabList.find(function(e){return e.code===s.currentTab}),a={codeId:t.codeId,envCode:this.env,systemDesignGuid:this.systemDesignVersion},e.next=10,Object(o["hb"])(a,this.payload);case 10:n=e.sent,i=n.status,n.message,r=n.data,"OK"===i&&this.tabList.forEach(function(e){e.id===s.currentTab&&(e.tableData=r?r.contents.map(function(e){return f({},e.data,{nextOperations:e.meta.nextOperations||[]})}):[],e.pagination.total=r?r.pageInfo.totalRows:0)});case 15:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),getDeployDesignTabs:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t,a,n,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["ib"])();case 2:if(t=e.sent,a=t.status,t.message,n=t.data,"OK"!==a){e.next=11;break}return e.next=9,Object(h["a"])();case 9:i=e.sent,"OK"===a&&(this.tabList=n.map(function(e){return f({},e,{name:e.value,id:e.code,tableData:[],tableColumns:[],outerActions:JSON.parse(JSON.stringify(d["c"])),innerActions:JSON.parse(JSON.stringify(d["b"].concat(i))),pagination:JSON.parse(JSON.stringify(d["d"])),ascOptions:{}})}));case 11:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},created:function(){this.getSystemDesigns(),this.getAllEnvs(),this.getDeployDesignTabs(),this.queryTreeLayerData()}},O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Row",{staticClass:"artifact-management"},[a("Col",{attrs:{span:"6"}},[a("span",{staticStyle:{"margin-right":"10px"}},[e._v("系统设计")]),e._v(" "),a("Select",{staticStyle:{width:"70%"},attrs:{filterable:"","label-in-name":""},on:{"on-change":e.onSystemDesignSelect},model:{value:e.systemDesignVersion,callback:function(t){e.systemDesignVersion=t},expression:"systemDesignVersion"}},e._l(e.systemDesigns,function(t){return a("Option",{key:t.guid,attrs:{value:t.guid}},[e._v(e._s(t.name))])}),1)],1),e._v(" "),a("Col",{attrs:{span:"6",offset:"1"}},[a("span",{staticStyle:{"margin-right":"10px"}},[e._v("环境类型")]),e._v(" "),a("Select",{staticStyle:{width:"70%"},attrs:{"label-in-name":""},on:{"on-change":e.onEnvSelect},model:{value:e.env,callback:function(t){e.env=t},expression:"env"}},e._l(e.envs,function(t){return a("Option",{key:t.code,attrs:{value:t.code||""}},[e._v("\n          "+e._s(t.value)+"\n        ")])}),1)],1),e._v(" "),a("Col",{attrs:{span:"3",offset:"1"}},[a("Button",{attrs:{type:"info"},on:{click:e.querySysTree}},[e._v("查询")])],1)],1),e._v(" "),a("hr",{staticStyle:{margin:"10px 0"}}),e._v(" "),a("Tabs",{attrs:{type:"card",value:e.currentTab,closable:!1},on:{"on-click":e.handleTabClick}},[a("TabPane",{attrs:{label:"应用逻辑图",name:"logic-graph",index:1}},[e.isDataChanged?a("Alert",{attrs:{"show-icon":"",closable:""}},[e._v("\n        Data has beed changed, click Reload button to reload graph.\n        "),a("Button",{attrs:{slot:"desc"},on:{click:e.reloadHandler},slot:"desc"},[e._v("Reload")])],1):e._e(),e._v(" "),a("div",{staticClass:"graph-container",attrs:{id:"graph"}},[e.spinShow?a("Spin",{attrs:{size:"large",fix:""}},[a("Icon",{staticClass:"spin-icon-load",attrs:{type:"ios-loading",size:"44"}}),e._v(" "),a("div",[e._v("加载中...")])],1):e._e()],1)],1),e._v(" "),a("TabPane",{attrs:{label:"应用树状逻辑图",name:"logic-tree-graph",index:2}},[e.isDataChanged?a("Alert",{attrs:{"show-icon":"",closable:""}},[e._v("\n        Data has beed changed, click Reload button to reload graph.\n        "),a("Button",{attrs:{slot:"desc"},on:{click:e.reloadHandler},slot:"desc"},[e._v("Reload")])],1):e._e(),e._v(" "),a("div",{staticClass:"graph-container",attrs:{id:"graphTree"}},[e.treeSpinShow?a("Spin",{attrs:{size:"large",fix:""}},[a("Icon",{staticClass:"spin-icon-load",attrs:{type:"ios-loading",size:"44"}}),e._v(" "),a("div",[e._v("加载中...")])],1):e._e()],1)],1),e._v(" "),a("TabPane",{attrs:{label:"物理部署图",name:"physicalGraph",index:3}},[a("div",{attrs:{id:"physicalGraph"}},[e.physicalGraphData.length?a("PhysicalGraph",{attrs:{graphData:e.physicalGraphData,links:e.physicalGraphLinks,callback:e.graphCallback}}):e._e(),e._v(" "),e.physicalSpin?a("Spin",{attrs:{size:"large",fix:""}},[a("Icon",{staticClass:"spin-icon-load",attrs:{type:"ios-loading",size:"44"}}),e._v(" "),a("div",[e._v("加载中...")])],1):e._e()],1)]),e._v(" "),a("TabPane",{attrs:{label:"部署详情",name:"deploy-detail",index:4}},[a("Row",{staticStyle:{"max-height":"500px"}},[a("Tree",{attrs:{data:e.deployTree,"show-checkbox":"",multiple:"","check-strictly":""},on:{"on-check-change":e.onTreeCheck}})],1),e._v(" "),a("Row",{staticStyle:{"margin-top":"20px"}},[a("Button",{attrs:{icon:"md-eye",disabled:this.selectedDeployItems.length<1},on:{click:e.previewDeploy}},[e._v("预览")])],1),e._v(" "),a("Row",[a("div",{staticStyle:{"overflow-x":"auto",display:"-webkit-box","margin-top":"20px"}},e._l(e.graphSource,function(t,n){return a("div",{key:n,staticStyle:{width:"20%"}},[a("h3",{staticStyle:{"text-align":"center"}},[e._v(e._s(t.definitionName))]),e._v(" "),a("div",{staticClass:"graph-container",staticStyle:{"text-align":"center","margin-top":"20px"},attrs:{id:"graph_"+t.defintiionKey+"_"+n}})])}),0)]),e._v(" "),a("Row",[a("Button",{attrs:{icon:"md-checkmark-circle-outline",type:"info",disabled:this.selectedDeployItems.length<1},on:{click:e.executeDeploy}},[e._v("执行流程")])],1)],1),e._v(" "),e._l(e.tabList,function(t,n){return e.isShowTabs?a("TabPane",{key:t.id,attrs:{name:t.id,label:t.name,index:n+5}},[a("WeTable",{ref:"table"+t.id,refInFor:!0,attrs:{tableData:t.tableData,tableOuterActions:t.outerActions,tableInnerActions:t.innerActions,tableColumns:t.tableColumns,pagination:t.pagination,ascOptions:t.ascOptions,showCheckbox:e.needCheckout,tableHeight:"650"},on:{actionFun:e.actionFun,sortHandler:e.sortHandler,handleSubmit:e.handleSubmit,getSelectedRows:e.onSelectedRowsChange,pageChange:e.pageChange,pageSizeChange:e.pageSizeChange}})],1):e._e()})],2)],1)},S=[],_=a("2455");function C(e){a("c92a")}var R=!1,E=C,I="data-v-27457069",j=null,A=Object(_["a"])(x,O,S,R,E,I,j);t["default"]=A.exports},e7b4:function(e,t,a){e.exports=a.p+"img/c9b5ff9ac8179ce2fc0d62ed28db1f00.png"},f8ed:function(e,t,a){e.exports=a.p+"img/55b60e529f143f104b489e29784b9003.png"}}]);
//# sourceMappingURL=chunk-cfa86cae.6a797696.js.map