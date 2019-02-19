(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{58:function(e,a,t){e.exports=t(89)},63:function(e,a,t){},66:function(e,a,t){},89:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(18),l=t.n(r),i=(t(63),t(2)),o=t(3),m=t(5),s=t(4),d=t(6),u=t(92),p=t(90),h=function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("header",{className:"nav"},c.a.createElement("div",{className:"col-1-special"}),c.a.createElement(u.a,null,c.a.createElement("h1",{className:"title col-5 mb-1"},c.a.createElement(p.a,{id:"title-link",to:"/"},"NB-IoT Vegetation Detection"))),c.a.createElement("div",{className:"container h-100 col-4"},c.a.createElement("div",{className:"d-flex justify-content-center h-100"},c.a.createElement("div",{className:"searchbar"},c.a.createElement("input",{className:"search_input",type:"text",name:"",placeholder:"Search for a device name"}),c.a.createElement("a",{href:"/",className:"search_icon"},c.a.createElement("i",{className:"fas fa-search"}))))),c.a.createElement("div",{className:"col-2"},c.a.createElement("div",{className:"mt-2"},c.a.createElement("img",{className:"logo",alt:"T-Mobile Logo",src:"/img/logo3.png"}))))}}]),a}(n.Component),g=(t(66),function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"bg-image"},c.a.createElement("div",{className:"intro row p-3 justify-content-center"},c.a.createElement("h1",{className:"pb-5"},"T-Mobile ",c.a.createElement("br",null)," NB-IoT Vegetation Detection Device ",c.a.createElement("br",null)," Capstone Project"),c.a.createElement("h3",null,"Part of the Electrical Engineering 496/497 Entrepenurial Capstone 2019")),c.a.createElement("div",{className:"project-description-section"},c.a.createElement("h2",null,"Project Objectives"),c.a.createElement("div",{className:"row m-0 p-3"},c.a.createElement("div",{className:"col-3"},c.a.createElement("div",{className:"card bg-dark text-light mt-5 mb-4 intro-card"},c.a.createElement("img",{className:"card-img-top p-5",src:"/img/iot.png",alt:"internet of things"}),c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},"NB-IoT Communication"),c.a.createElement("p",{className:"card-text"},"Using the T-Mobile network, we are able to communicate with our Twilio dev kits using NB-IoT technology.")))),c.a.createElement("div",{className:"col-3"},c.a.createElement("div",{className:"card bg-dark text-light mt-5 mb-4 intro-card"},c.a.createElement("img",{className:"card-img-top p-5",src:"/img/camera.png",alt:"camera"}),c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},"Camera View of Power Lines"),c.a.createElement("p",{className:"card-text"},"A camera module takes pictures on its own of the power lines and the surrounding vegetation.")))),c.a.createElement("div",{className:"col-3"},c.a.createElement("div",{className:"card bg-dark text-light mt-5 mb-4 intro-card"},c.a.createElement("img",{className:"card-img-top p-5",src:"/img/vision.png",alt:"computer vision"}),c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},"Computer Vision"),c.a.createElement("p",{className:"card-text"},"Use edge detection to analyze whether vegetation is near or is impacting the power lines.")))),c.a.createElement("div",{className:"col-3"},c.a.createElement("div",{className:"card bg-dark text-light mt-5 mb-4 intro-card"},c.a.createElement("img",{className:"card-img-top p-5",src:"/img/vision2.png",alt:"computer vision"}),c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},"Machine Learning"),c.a.createElement("p",{className:"card-text"},"Compare images to improve accuracy of vegetation detection and improve overall device efficiency.")))))))}}]),a}(n.Component)),E=function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"col-6 p-0 imageBackground"},c.a.createElement("div",{className:"ml-auto mr-auto w-75 mt-3 mb-3"},c.a.createElement("h1",{className:"text-dark text-center mb-5"},"Device Camera View"),c.a.createElement("img",{className:"vegeImage",src:"https://northernwoodlands.org/images/articles/powerlines_1.jpg",alt:"powerlines"})))}}]),a}(n.Component),b=function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("button",{type:"button",className:"btn btn-primary deviceButton m-2 btn-large"},this.props.name))}}]),a}(n.Component),v=function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"col-6 pr-2 d-flex flex-column"},c.a.createElement("h1",{className:"text-dark text-center mt-3"},"Device Tools"),c.a.createElement("div",{className:"mt-auto mb-auto bg-dark mr-auto ml-auto w-75"},c.a.createElement("p",{className:"text-light text-center mt-2"},"Use the buttons below to communicate with the device:"),c.a.createElement("div",{className:"tool-box-center mb-2"},c.a.createElement(b,{name:"Ping Device"}),c.a.createElement(b,{name:"Take Picture"}),c.a.createElement(b,{name:"Sensor Data"}))))}}]),a}(n.Component),N=function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(v,null),c.a.createElement(E,null))}}]),a}(n.Component),f=function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h2",{id:"about"},"About Us"),c.a.createElement("div",{className:"card-deck p-5"},c.a.createElement("div",{className:"card"},c.a.createElement("img",{className:"card-img-top",src:"https://image.flaticon.com/icons/png/512/21/21294.png",alt:"Bogdan's Profile"}),c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},"Bogdan Tudos"),c.a.createElement("p",{className:"card-text"},"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."))),c.a.createElement("div",{className:"card"},c.a.createElement("img",{className:"card-img-top",src:"https://image.flaticon.com/icons/png/512/21/21294.png",alt:"Ying's Profile"}),c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},"Ying Chui"),c.a.createElement("p",{className:"card-text"},"This card has supporting text below as a natural lead-in to additional content."))),c.a.createElement("div",{className:"card"},c.a.createElement("img",{className:"card-img-top",src:"https://image.flaticon.com/icons/png/512/21/21294.png",alt:"Zidi's Profile"}),c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},"Zidi Wei"),c.a.createElement("p",{className:"card-text"},"This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.")))))}}]),a}(n.Component),j=t(27),O=t(57),w=Object(O.a)(p.a),y=function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"showSettings",value:function(e){e.preventDefault()}},{key:"render",value:function(){return c.a.createElement(u.a,null,c.a.createElement(c.a.Fragment,null,c.a.createElement(j.scaleRotate,{width:"200px",pageWrapId:this.props.pageWrap,outerContainerId:this.props.outerContainer},c.a.createElement(w,{className:"magenta-link",to:"/"},"Home"),c.a.createElement(w,{className:"magenta-link",to:"/about"},"About"),c.a.createElement(w,{className:"magenta-link",to:"/device"},"Device"))))}}]),a}(n.Component),k=t(91),x=function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement(u.a,null,c.a.createElement("div",{id:"outer-container"},c.a.createElement(y,{outerContainer:"outer-container",pageWrap:"page-wrap"}),c.a.createElement("div",{className:"row bodyContainer m-0",id:"page-wrap"},c.a.createElement(h,null),c.a.createElement(k.a,{exact:!0,path:"/",component:g}),c.a.createElement(k.a,{path:"/device",component:N}),c.a.createElement(k.a,{path:"/about",component:f}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[58,1,2]]]);
//# sourceMappingURL=main.07835f02.chunk.js.map