(this.webpackJsonpmosaics=this.webpackJsonpmosaics||[]).push([[0],{108:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){},111:function(e,t,a){},112:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(7),o=a.n(s),c=(a(82),a(83),a(70)),l=a(22),u=a(12),i=a(13),_=a(15),d=a(14),h=a(16),m=(a(84),function(e){return e.children}),q=a(59),f=a(60),g=a(19),p=a.n(g);function b(){var e=Object(q.a)(["\n  border-radius: 3px;\n"]);return b=function(){return e},e}var v=f.a.div(b()),y=function(e){return n.a.createElement(v,{className:p.a.square,onClick:e.select,onMouseOver:e.show,onMouseLeave:e.hide,style:{"--background-color":e.square?e.square.color:"black"}},n.a.createElement("div",{className:p.a.square__signs},n.a.createElement("div",{className:p.a.square__sign_top}),n.a.createElement("div",{className:p.a.square__sign_bottom})),n.a.createElement("div",{className:p.a.square__header},n.a.createElement("div",{className:p.a.square__label},e.square.label),n.a.createElement("div",{className:p.a.square__category},e.square.category)),n.a.createElement("div",{className:p.a.square__tags},e.square.tags?e.square.tags.map((function(e){return n.a.createElement("div",{key:e,className:p.a.square__tag},"#",e)})):null))},E=a(20),k=a.n(E),j=a(64),w=a.n(j).a.create({baseURL:"https://mosaic-squares.firebaseio.com/"}),O=a(147),C=a(148),x=a(150),N=a(149),S=a(152),D=a(66),H=a.n(D),B=a(67),J=a.n(B),W=(a(113),a(5)),M=a(146),R=a(151),T=["Select a Category","framework","lib","language"],U=Object(W.a)((function(e){return{root:{"label + &":{marginTop:e.spacing(3)}},input:{borderRadius:4,position:"relative",backgroundColor:"transparent",border:"1px solid white",color:"white",fontSize:16,padding:"10px 26px 10px 12px",transition:e.transitions.create(["border-color","box-shadow"]),"&:focus":{borderRadius:4,borderColor:"#80bdff",boxShadow:"0 0 0 0.2rem rgba(0,123,255,.25)"}}}}))(R.a),A=(Object(M.a)((function(e){return{margin:{margin:e.spacing(1)}}})),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(_.a)(this,Object(d.a)(t).call(this,e))).handleChange=function(e){var t,r=e.target.value?e.target.value:null;switch(console.log("e",r),r){case T[1]:t="#ffbd03";break;case T[2]:t="#0b4dca";break;case T[3]:t="#c51111";break;case null:default:t="grey"}a.setState((function(a){return Object(l.a)({},a,{category:e.target.value,color:t})}))},a.onSaveDetails=function(){var e=Object(l.a)({},a.state);console.log("state",e),e.id?w.put("/squares/"+e.id+"/.json",e).then((function(e){a.props.close(),console.log(e)})).catch((function(e){return console.log("Error catched:",e)})):w.post("/squares/.json",e).then((function(e){a.props.close(),console.log(e)})).catch((function(e){return console.log("Error catched:",e)}))},a.onDeleteNote=function(){var e=Object(l.a)({},a.state);w.delete("/squares/"+e.id+"/.json").then((function(e){a.props.close(),console.log(e)})).catch((function(e){return console.log("Error catched:",e)}))},a.closeDetails=function(){a.props.close()},a.handleEditorChange=function(e,t){console.log("Content was updated:",e),a.setState((function(t){return Object(l.a)({},t,{text:e})}))},a.textHandler=function(e){var t=e.target.value;a.setState((function(e){return Object(l.a)({},e,{text:t})})),console.log("Changed:",a.state)},a.state={id:e.square.id||null,label:e.square.label||"",text:e.square.text||"some text",category:e.square.category||"Select a Category",tags:e.square.tags||[],color:e.square.color||"grey"},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"inputHandler",value:function(e){var t=e.target.value;this.setState((function(e){return Object(l.a)({},e,{label:t})})),console.log("Changed:",this.state)}},{key:"render",value:function(){var e=this,t=(this.state.tags&&this.state.tags.map((function(e){return n.a.createElement("div",{key:e,className:k.a.square__tag},"#",e)})),T.map((function(e){return n.a.createElement(S.a,{key:e,value:e},e)})));return n.a.createElement("div",{className:k.a.square},n.a.createElement("div",{className:k.a.square__header},n.a.createElement(O.a,{color:"inherit","aria-label":"close",onClick:function(){return e.closeDetails()}},n.a.createElement(H.a,null)),n.a.createElement(O.a,{color:"inherit","aria-label":"close",onClick:this.onSaveDetails},n.a.createElement(J.a,null))),n.a.createElement("div",null,n.a.createElement("input",{className:k.a.square__label,placeholder:"Note Title",type:"text",onChange:function(t){return e.inputHandler(t)},value:this.state.label}),n.a.createElement("div",{className:k.a.square__category},n.a.createElement("div",{className:k.a.square__color,style:{backgroundColor:this.state.color}}),this.state.category)),n.a.createElement(C.a,{variant:"outlined",className:k.a.formControl},n.a.createElement(x.a,{className:k.a.root,placeholder:"Select a category",labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:this.state.category?this.state.category:null,onChange:this.handleChange,label:"category",input:n.a.createElement(U,null)},t)),n.a.createElement("textarea",{className:k.a.square__text,value:this.state.text,onChange:this.textHandler}),n.a.createElement(N.a,{variant:"outlined",color:"secondary",onClick:function(){return e.onDeleteNote()}},"Delete Note"))}}]),t}(r.Component)),I=(a(108),a(109),function(e){return n.a.createElement("div",{className:"backdrop ".concat(e.show?"backdrop--show":""),onClick:e.clicked},e.show)}),Y=function(e){return n.a.createElement(m,null,n.a.createElement(I,{show:e.show,clicked:e.modalClosed}),n.a.createElement("div",{style:{transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?"1":"0"},className:"modal"},e.children))},z=function(e,t){return function(a){function r(e){var a;return Object(u.a)(this,r),(a=Object(_.a)(this,Object(d.a)(r).call(this,e))).state={error:null},a.errorConfirmedHandler=function(){a.setState({error:null})},a.reqInterceptor=t.interceptors.request.use((function(e){return a.setState({error:null}),e})),a.resInterceptor=t.interceptors.response.use((function(e){return e}),(function(e){a.setState({error:e}),console.log("Reached interceptor")})),a}return Object(h.a)(r,a),Object(i.a)(r,[{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return n.a.createElement(m,null,n.a.createElement(Y,{show:!!this.state.error,modalClosed:this.errorConfirmedHandler},this.state.error?this.state.error.message:null),n.a.createElement(e,this.props))}}]),r}(r.Component)},K=(a(110),a(68)),L=a.n(K),X=(Object(M.a)((function(e){return{root:{"& > *":{position:"absolute"}}}})),function(e){function t(){var e,a;Object(u.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(_.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).state={},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("button",{className:"button",onClick:this.props.newSquare},n.a.createElement(L.a,{className:"button__icon",style:{fontSize:40}}))}}]),t}(r.Component)),P=z(function(e){function t(){var e,a;Object(u.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(_.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).state={showBackdrop:!1,showDetails:!1,onDisplay:null,squares:null},a.fetchSquares=function(){w.get("https://mosaic-squares.firebaseio.com/squares.json").then((function(e){console.log(e.data);var t=Object.keys(e.data).map((function(t){return Object(l.a)({id:t},e.data[t])}));console.log("arr",t),a.setState({squares:Object(c.a)(t)})})).catch((function(e){return console.log("Error fetching")}))},a.squareCloseHandler=function(){console.log("clicked"),a.setState({showDetails:!1}),setTimeout((function(){return a.fetchSquares()}),1e3)},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.fetchSquares()}},{key:"showBackdrop",value:function(){this.setState({showBackdrop:!0})}},{key:"hideBackdrop",value:function(){this.setState({showBackdrop:!1})}},{key:"displayDetailsHandler",value:function(e){this.setState({showDetails:!0,onDisplay:e||{}})}},{key:"render",value:function(){var e=this,t=this.state.squares?this.state.squares.map((function(t,a){return n.a.createElement(y,{key:a,square:t,select:function(){return e.displayDetailsHandler(t)},show:function(){return e.showBackdrop()},hide:function(){return e.hideBackdrop()}})})):null,a=this.state.showDetails?n.a.createElement(A,{square:this.state.onDisplay,close:this.squareCloseHandler}):null;return n.a.createElement(m,null,n.a.createElement(Y,{show:this.state.showDetails,modalClosed:this.squareCloseHandler},a),n.a.createElement("div",{className:"board"},t),n.a.createElement(X,{newSquare:function(){return e.displayDetailsHandler()}}))}}]),t}(r.Component),w),Q=a(69),V=a.n(Q),$=(a(111),r.Component,function(e){function t(){return Object(u.a)(this,t),Object(_.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement(m,null,n.a.createElement("main",{className:V.a.content},this.props.children))}}]),t}(r.Component));var F=function(){return n.a.createElement($,null,n.a.createElement(P,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},19:function(e,t,a){e.exports={square__sign_top:"square_square__sign_top__1BTm-",square__sign_bottom:"square_square__sign_bottom__K8n_J",square:"square_square__3xAYO",square__signs:"square_square__signs__3sqWK",square__header:"square_square__header__1DSzS",square__category:"square_square__category__1KX2M",square__tags:"square_square__tags__30tUf",square__tag:"square_square__tag__1QWRV",square__label:"square_square__label__JkOv_"}},20:function(e,t,a){e.exports={square:"square-detail_square__3cDUd",square__close:"square-detail_square__close__gxLwJ",square__color:"square-detail_square__color__Xox6J",square__header:"square-detail_square__header__3qDT0",square__category:"square-detail_square__category__3xc90",square__tags:"square-detail_square__tags__1HcYP",square__tag:"square-detail_square__tag__3BmqE",square__label:"square-detail_square__label__1bMUW",square__text:"square-detail_square__text__1lXqA"}},69:function(e,t,a){},77:function(e,t,a){e.exports=a(112)},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){}},[[77,1,2]]]);
//# sourceMappingURL=main.dcbc175d.chunk.js.map