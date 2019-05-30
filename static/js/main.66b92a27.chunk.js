(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{155:function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),r=t(27),i=t.n(r),l=(t(78),t(4)),m=t(5),s=t(7),o=t(6),d=t(8),g=t(158),u=t(156),p=function(e){function a(){return Object(l.a)(this,a),Object(s.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement("header",{className:"nav"},n.a.createElement("div",{className:"col-1-special"}),n.a.createElement(g.a,null,n.a.createElement("h1",{className:"title col-5 mb-1"},n.a.createElement(u.a,{id:"title-link",to:"/"},"NB-IoT Vegetation Detection"))),n.a.createElement("div",{className:"container h-100 col-4"},n.a.createElement("div",{className:"d-flex justify-content-center h-100"},n.a.createElement("div",{className:"searchbar"},n.a.createElement("input",{className:"search_input",type:"text",name:"",placeholder:"Search for a device name"}),n.a.createElement("a",{href:"/",className:"search_icon"},n.a.createElement("i",{className:"fas fa-search"}))))),n.a.createElement("div",{className:"col-2"},n.a.createElement("div",{className:"mt-2"},n.a.createElement("img",{className:"logo",alt:"T-Mobile Logo",src:"img/logo3.png"}))))}}]),a}(c.Component),h=(t(81),t(40)),E={width:"100vw",height:"100vh",backgroundImage:"url(".concat(t.n(h).a,")")},b=function(e){function a(){return Object(l.a)(this,a),Object(s.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{style:E},n.a.createElement("div",{className:"intro row p-3 justify-content-center"},n.a.createElement("h1",{className:"pb-5"},"T-Mobile ",n.a.createElement("br",null)," NB-IoT Vegetation Detection Device ",n.a.createElement("br",null)," Capstone Project"),n.a.createElement("h3",null,"Part of the Electrical Engineering 496/497 Entrepenurial Capstone 2019")),n.a.createElement("div",{className:"project-description-section"},n.a.createElement("h2",null,"Project Objectives"),n.a.createElement("div",{className:"row m-0 p-3"},n.a.createElement("div",{className:"col-3"},n.a.createElement("div",{className:"card bg-dark text-light mt-5 mb-4 intro-card"},n.a.createElement("img",{className:"card-img-top p-5",src:"img/iot.png",alt:"internet of things"}),n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},"NB-IoT Communication"),n.a.createElement("p",{className:"card-text"},"Using the T-Mobile network, we are able to communicate with our Twilio dev kits using NB-IoT technology.")))),n.a.createElement("div",{className:"col-3"},n.a.createElement("div",{className:"card bg-dark text-light mt-5 mb-4 intro-card"},n.a.createElement("img",{className:"card-img-top p-5",src:"img/camera.png",alt:"camera"}),n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},"Camera View of Power Lines"),n.a.createElement("p",{className:"card-text"},"A camera module takes pictures on its own of the power lines and the surrounding vegetation.")))),n.a.createElement("div",{className:"col-3"},n.a.createElement("div",{className:"card bg-dark text-light mt-5 mb-4 intro-card"},n.a.createElement("img",{className:"card-img-top p-5",src:"img/vision.png",alt:"computer vision"}),n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},"Computer Vision"),n.a.createElement("p",{className:"card-text"},"Use edge detection to analyze whether vegetation is near or is impacting the power lines.")))),n.a.createElement("div",{className:"col-3"},n.a.createElement("div",{className:"card bg-dark text-light mt-5 mb-4 intro-card"},n.a.createElement("img",{className:"card-img-top p-5",src:"img/vision2.png",alt:"computer vision"}),n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},"Machine Learning"),n.a.createElement("p",{className:"card-text"},"Compare images to improve accuracy of vegetation detection and improve overall device efficiency.")))))))}}]),a}(c.Component),v=t(13),N=(t(82),t(41)),f=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(s.a)(this,Object(o.a)(a).call(this,e))).state={img:"",pictureTaken:"",imageArray:[],baseImg:"",compareImg:"",sameImage:!0,imgRetreived:"",baseImgUrl:"",compImgUrl:""},t.takePicture=t.takePicture.bind(Object(v.a)(Object(v.a)(t))),t.getImage=t.getImage.bind(Object(v.a)(Object(v.a)(t))),t.compareImages=t.compareImages.bind(Object(v.a)(Object(v.a)(t))),t.getTwilioImg=t.getTwilioImg.bind(Object(v.a)(Object(v.a)(t))),t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"takePicture",value:function(){var e=this;return console.log("taking pic"),window.fetch("https://tcksz3lkhc.execute-api.us-east-1.amazonaws.com/dev/takePicture",{method:"GET"}).then(function(e){return e.json()}).then(function(a){console.log(a.sid),e.setState({pictureTaken:a.message})}).catch(function(e){console.log(e)})}},{key:"getTwilioImg",value:function(){var e=this;return window.fetch("https://tcksz3lkhc.execute-api.us-east-1.amazonaws.com/dev/getTwilioImg",{method:"GET"}).then(function(e){return e.json()}).then(function(a){e.setState({imgRetreived:a.message}),window.location.reload()}).catch(function(a){console.log(a),e.setState({imgRetreived:"There was an error getting the image from Twilio."})})}},{key:"getImage",value:function(e,a){var t=this,c=["https://tcksz3lkhc.execute-api.us-east-1.amazonaws.com/dev/img?imgName=".concat(e),"https://tcksz3lkhc.execute-api.us-east-1.amazonaws.com/dev/img?imgName=".concat(a)];Promise.all(c.map(function(e){return fetch(e).then(function(e){return e.json()})})).then(function(e){t.setState({baseImgUrl:e[0].imgURL,compImgUrl:e[1].imgURL})}).catch(function(e){console.log("Error getting images from S3: ",e)})}},{key:"compareImages",value:function(e){this.state.baseImg===e&&null!==this.state.baseImg?this.setState({sameImage:!0}):this.setState({sameImage:!1})}},{key:"componentDidMount",value:function(){var e=this;return window.fetch("https://tcksz3lkhc.execute-api.us-east-1.amazonaws.com/dev/listImgs",{method:"GET"}).then(function(e){return e.json()}).then(function(a){console.log(a),e.setState({imageArray:a.imgs})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"w-100 h-100 m-0 row"},n.a.createElement("div",{className:"col-4 p-0 right-border text-center"},n.a.createElement("div",{className:"w-100 h-10 bg-dark"},n.a.createElement("h2",{className:"text-light pt-2 text-center"},"Device Tools")),n.a.createElement("div",{className:"card no-round"},n.a.createElement("div",{className:"card-body"},n.a.createElement("h4",{className:"card-title"},"The device tools allow you to:"),n.a.createElement("ul",{className:"ul"},n.a.createElement("li",null,"Take a picture from the device "),n.a.createElement("li",null,"Search through stored images"),n.a.createElement("li",null,"Get information about the device")))),n.a.createElement("div",{className:"card no-round"},n.a.createElement("div",{className:"card-body"},this.state.pictureTaken?n.a.createElement("div",{className:"col-10"},n.a.createElement("p",null,this.state.pictureTaken)):n.a.createElement("p",{className:"col-10 mt-2 ml-4"},"Take a new picture from the device."),n.a.createElement("button",{className:"btn btn-dark btn-md text-pink",onClick:this.takePicture},"Take picture"),n.a.createElement("button",{className:"ml-3 btn btn-dark btn-md text-pink",onClick:this.getTwilioImg},"Get image"),this.state.imgRetreived?n.a.createElement("div",{className:"mt-3"},this.state.imgRetreived):n.a.createElement("div",null))),n.a.createElement("div",{className:"card no-round"},n.a.createElement("div",{className:"card-body"},n.a.createElement("p",{className:"col-10 mt-2 ml-4"},"Pick the base image to compare powerline obstruction with: "),n.a.createElement("select",{className:"form-control-md",id:"exampleFormControlSelect1",onChange:function(a){a.preventDefault(),e.setState({baseImg:a.target.value})}},n.a.createElement("option",{hidden:!0,disabled:!0,selected:!0,value:!0}," - Select base image - "),this.state.imageArray.map(function(e,a){return n.a.createElement("option",{key:a},e)})))),n.a.createElement("div",{className:"card no-round"},n.a.createElement("div",{className:"card-body"},n.a.createElement("p",{className:"col-10 mt-2 ml-4"},"Find a picture that was taken by the device to compare with the defualt image of the powerline (the base image): "),n.a.createElement("select",{className:"selectpicker","data-style":"btn-dark",title:"Select an image",onChange:function(a){a.preventDefault(),e.setState({compareImg:a.target.value}),e.getImage(e.state.baseImg,a.target.value),e.compareImages(a.target.value)}},n.a.createElement("option",{hidden:!0,disabled:!0,selected:!0,value:!0},"Select image to compare..."),this.state.imageArray.map(function(e,a){return n.a.createElement("option",{key:a},e)}))))),n.a.createElement("div",{className:"col-8 p-0 text-center"},n.a.createElement("h2",{className:"mt-2"},"Compare Images"),"Base image"===this.state.baseImg&&this.state.compareImg&&"Base image"!==this.state.compareImg?n.a.createElement("div",{className:"maxWidth"},n.a.createElement("div",{className:"row m-0"},n.a.createElement("img",{className:"col-6 edgeImage rotateImg",src:this.state.baseImgUrl,alt:"base edge detection"}),n.a.createElement("img",{className:"col-6 edgeImage rotateImg",src:this.state.compImgUrl,alt:"comp edge detection"})),this.state.sameImage?n.a.createElement("div",{className:"center-spinner"},n.a.createElement(N.CubeGrid,{size:100,color:"#E20074"})):n.a.createElement("div",{className:"mt-5"},n.a.createElement("h4",{className:"mt-custom"},n.a.createElement("b",null,"There is an obstruction")," on the powerline!"),n.a.createElement("p",null,"Difference between images: ",n.a.createElement("b",null,"23.45%")),n.a.createElement("p",{className:"mt-5"},"Edge detection for both images:"),n.a.createElement("div",{className:"row m-0"},n.a.createElement("img",{className:"col-6 edgeImage",src:"img/base.png",alt:"base edge detection"}),n.a.createElement("img",{className:"col-6 edgeImage",src:"img/comp.png",alt:"comp edge detection"})),n.a.createElement("p",{className:"mt-5"},"Difference between images (outlined in RED)"),n.a.createElement("img",{className:"diffImage mb-5",src:"img/diff.png",alt:"comparison output"}))):n.a.createElement("div",{className:"card bg-primary img-margin"},n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",null,"Please select an image taken by the device!")))))}}]),a}(c.Component),w=function(e){function a(){return Object(l.a)(this,a),Object(s.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h2",{id:"about"},"About Us"),n.a.createElement("div",{className:"card-deck p-5"},n.a.createElement("div",{className:"card"},n.a.createElement("img",{className:"card-img-top",src:"https://image.flaticon.com/icons/png/512/21/21294.png",alt:"Bogdan's Profile"}),n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},"Bogdan Tudos"),n.a.createElement("p",{className:"card-text"},"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."))),n.a.createElement("div",{className:"card"},n.a.createElement("img",{className:"card-img-top",src:"https://image.flaticon.com/icons/png/512/21/21294.png",alt:"Ying's Profile"}),n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},"Ying Chui"),n.a.createElement("p",{className:"card-text"},"This card has supporting text below as a natural lead-in to additional content."))),n.a.createElement("div",{className:"card"},n.a.createElement("img",{className:"card-img-top",src:"https://image.flaticon.com/icons/png/512/21/21294.png",alt:"Zidi's Profile"}),n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},"Zidi Wei"),n.a.createElement("p",{className:"card-text"},"This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.")))))}}]),a}(c.Component),k=t(42),y=t(72),j=Object(y.a)(u.a),I=function(e){function a(){return Object(l.a)(this,a),Object(s.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(m.a)(a,[{key:"showSettings",value:function(e){e.preventDefault()}},{key:"render",value:function(){return n.a.createElement(g.a,null,n.a.createElement(n.a.Fragment,null,n.a.createElement(k.scaleRotate,{width:"200px",pageWrapId:this.props.pageWrap,outerContainerId:this.props.outerContainer},n.a.createElement(j,{className:"magenta-link",to:"/"},"Home"),n.a.createElement(j,{className:"magenta-link",to:"/about"},"About"),n.a.createElement(j,{className:"magenta-link",to:"/device"},"Device"))))}}]),a}(c.Component),O=t(157),T=function(e){function a(){return Object(l.a)(this,a),Object(s.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement(g.a,null,n.a.createElement("div",{id:"outer-container"},n.a.createElement(I,{outerContainer:"outer-container",pageWrap:"page-wrap"}),n.a.createElement("div",{className:"row bodyContainer m-0",id:"page-wrap"},n.a.createElement(p,null),n.a.createElement(O.a,{exact:!0,path:"/",component:b}),n.a.createElement(O.a,{path:"/device",component:f}),n.a.createElement(O.a,{path:"/about",component:w}))))}}]),a}(c.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},40:function(e,a,t){e.exports=t.p+"static/media/powerlines.ea7986a2.jpg"},73:function(e,a,t){e.exports=t(155)},78:function(e,a,t){},81:function(e,a,t){}},[[73,1,2]]]);
//# sourceMappingURL=main.66b92a27.chunk.js.map