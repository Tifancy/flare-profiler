(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3dcdd7c4"],{"6d90":function(t,e,s){"use strict";var a=s("fb08"),r=s.n(a);r.a},b8d2:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"session"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.show_flame_graph,expression:"show_flame_graph"}],attrs:{id:"flame_graph"}},[s("el-table",{attrs:{data:t.selectCpuRowArray}},[s("el-table-column",{attrs:{width:"400"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("span",[t._v(t._s(e.row.name))])]}}])}),s("el-table-column",{scopedSlots:t._u([{key:"default",fn:function(t){return[s("div",{staticClass:"thread_bar",attrs:{id:"thread_select_cpu_chart_"+t.row.id}})]}}])})],1),s("div",{attrs:{id:"flame_graph_svg"},domProps:{innerHTML:t._s(t.flame_graph_data)}})],1)])},r=[],i=(s("ac6a"),void 0),n={name:"call",data:function(){return{show_flame_graph:!0,flame_graph_data:"",selectCpuRowArray:[]}},computed:{sampleInfo:function(){return this.$store.state.sampleInfo},exampleInfo:function(){return this.$store.state.exampleInfo},sessionId:function(){return this.$route.params.sessionInfo},sessionCpuTimes:function(){return this.$store.state.sessionCpuTimes},sessionFlameGraph:function(){return this.$store.state.sessionFlameGraph},historySamples:function(){return this.$store.state.historySamples},sessionTabsValue:function(){return this.$store.state.sessionTabsValue},selectCpuRow:function(){return this.$store.state.selectCpuRow}},mounted:function(){var t=this;this.$nextTick(function(){t.on_cpu_time_result()})},created:function(){this.getFlameGraphData()},methods:{getFlameGraphData:function(){var t=this;if(!this.sessionFlameGraph&&this.sessionFlameGraph.length>0){var e=this.sessionFlameGraph.filter(function(e){if(e.session_id==t.sessionId)return e});e.length>0&&(this.flame_graph_data=e[0].flame_graph_data)}this.historySamples.length<=0&&this.$router.push({path:"/samples"});var s=this.selectCpuRow.filter(function(e){if(e.sessionId==t.sessionId)return e});s.forEach(function(e){t.selectCpuRowArray.push(e.selectRow)})},on_cpu_time_result:function(){var t=this,e=this.sessionCpuTimes.filter(function(e){if(e.sessionId==t.sessionId)return e});if(e.length<=0||this.selectCpuRowArray.length<=0)return!1;var s=e[0].cpuTimeData;if(!s)return!1;var a=this.sampleInfo.record_start_time,r=this.sampleInfo.last_record_time,i=this.sampleInfo.unit_time_ms,n=s.filter(function(e){if(e.id==t.selectCpuRowArray[0].id)return e}),o=n[0];if(o.total_cpu_time>0){var l=this.fill_ts_data(o.ts_data,o.start_time,o.end_time,a,r,i),u=this.create_echarts_bar("thread_select_cpu_chart_"+o.id,l);u.on("datazoom",function(e){var s=u.getModel().option.xAxis[0],r=a+s.rangeStart*i,n=a+s.rangeEnd*i;console.log("datazoom: thread:",o.id,", index:",s.rangeStart,"-",s.rangeEnd,", time:",r,"-",n),t.update_call_stack_tree(o.id,r,n)})}},update_call_stack_tree:function(t,e,s){var a={cmd:"flame_graph",options:{session_id:this.sessionId,thread_id:t,start_time:e,end_time:s}};this.$webSocket.webSocketSendMessage(JSON.stringify(a))},create_echarts_bar:function(t,e){if(!e){e=[];for(var s=0;s<3e3;s++)e.push(1e3*Math.random().toFixed(2))}var a={dataZoom:[{type:"inside",start:0,end:10,moveOnMouseMove:!1,moveOnMouseWheel:!1,zoomOnMouseWheel:!1},{type:"slider",dataBackground:{lineStyle:{color:"#409eff",opacity:1},areaStyle:{color:"#3a8ee6",opacity:.3}},realtime:!1,filterMode:"empty",top:"top",left:"left"}],xAxis:{data:e,show:!1},yAxis:{show:!1},series:[{type:"bar",data:e,large:!0,largeThreshold:50,itemStyle:{color:"#e74911",opacity:0}}]},r=this.$echarts.init(document.getElementById(t));return r.setOption(a),r},fill_ts_data:function(t,e,s,a,r,i){var n=(e-a)/i,o=(r-s)/i;if(n<1&&o<1)return t;for(var l=[],u=0;u<n;u++)l.push(0);l=l.concat(t);for(u=0;u<o;u++)l.push(0);return l}},watch:{$route:function(t,e){i.getFlameGraphData()},sessionFlameGraph:function(){var t=this;if(this.sessionFlameGraph.length>0){var e=this.sessionFlameGraph.filter(function(e){if(e.session_id==t.sessionId)return e});this.flame_graph_data=e[0].flame_graph_data}}}},o=n,l=(s("6d90"),s("2877")),u=Object(l["a"])(o,a,r,!1,null,"476ed5ce",null);e["default"]=u.exports},fb08:function(t,e,s){}}]);
//# sourceMappingURL=chunk-3dcdd7c4.7e4f9929.js.map