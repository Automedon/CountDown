(this.webpackJsonpexampleofcode2=this.webpackJsonpexampleofcode2||[]).push([[0],{46:function(e,n,t){e.exports=t(95)},55:function(e,n,t){},56:function(e,n,t){},94:function(e,n){function t(){}function r(e){this.op=e}function a(){}function i(){}function o(){}function u(){}function c(){}function l(e,n){var t=n.op;if("+"===t||"-"===t)return!1;var r=e.op;return"+"===r?e.right.value<=n.value:"-"!==r&&e.value<=n.value}function d(e,n){var t=n.op;return"+"!==t&&"-"!==t&&("-"!==e.op||e.right.value<=n.value)}function s(e,n){var t=n.op;if("*"===t||"/"===t)return!1;var r=e.op;return"*"===r?e.right.value<=n.value:"/"!==r&&e.value<=n.value}function m(e,n){var t=n.op;return"*"!==t&&"/"!==t&&("/"!==e.op||e.right.value<=n.value)}function p(e,n,t,r){var c=e.value,p=n.value;l(e,n)?r((new a).init(e,n,t)):l(n,e)&&r((new a).init(n,e,t)),1!==c&&1!==p&&(s(e,n)?r((new o).init(e,n,t)):s(n,e)&&r((new o).init(n,e,t))),c>p?(c-p!==p&&d(e,n)&&r((new i).init(e,n,t)),1!==p&&c%p===0&&c/p!==p&&m(e,n)&&r((new u).init(e,n,t))):p>c?(p-c!==c&&d(n,e)&&r((new i).init(n,e,t)),1!==c&&p%c===0&&p/c!==c&&m(n,e)&&r((new u).init(n,e,t))):1!==p&&(m(e,n)?r((new u).init(e,n,t)):m(n,e)&&r((new u).init(n,e,t)))}function f(e,n,t,r){var c=e.value,p=n.value;l(e,n)&&r((new a).init(e,n,t)),1!==c&&1!==p&&s(e,n)&&r((new o).init(e,n,t)),c>p?(c-p!==p&&d(e,n)&&r((new i).init(e,n,t)),1!==p&&c%p===0&&c/p!==p&&m(e,n)&&r((new u).init(e,n,t))):c===p&&1!==p&&m(e,n)&&r((new u).init(e,n,t))}t.prototype={toStringUnder:function(e){return e>this.precedence?"("+this.toString()+")":this.toString()}},r.prototype=new t,r.prototype.initBinExpr=function(e,n,t,r){return this.left=e,this.right=n,this.value=t,this.used=e.used|n.used,this.id=this.toId(),this.generation=r,this},r.prototype.toString=function(){var e=this.precedence;return this.left.toStringUnder(e)+" "+this.op+" "+this.right.toStringUnder(e)},r.prototype.toId=function(){return"("+this.left.toId()+this.op+this.right.toId()+")"},a.prototype=new r("+"),a.prototype.precedence=0,a.prototype.init=function(e,n,t){return this.initBinExpr(e,n,e.value+n.value,t)},i.prototype=new r("-"),i.prototype.precedence=1,i.prototype.init=function(e,n,t){return this.initBinExpr(e,n,e.value-n.value,t)},o.prototype=new r("*"),o.prototype.precedence=3,o.prototype.init=function(e,n,t){return this.initBinExpr(e,n,e.value*n.value,t)},u.prototype=new r("/"),u.prototype.precedence=2,u.prototype.init=function(e,n,t){return this.initBinExpr(e,n,e.value/n.value,t)},c.prototype=new t,c.prototype.op="$",c.prototype.precedence=4,c.prototype.init=function(e,n,t){return this.value=e,this.index=n,this.used=1<<n,this.id=this.toId(),this.generation=t,this},c.prototype.toString=function(){return String(this.value)},c.prototype.toId=c.prototype.toStringUnder=c.prototype.toString,e.exports={solutions:function(e,n){arguments.length>2&&void 0!==arguments[2]&&arguments[2];for(var t=n.length,r=~(-1<<t),a=0,i=new Array(r),o=0;o<i.length;++o)i[o]=[];for(var u=[],l=[],d=!1,s=0;s<n.length;++s){var m=n[s],h=(new c).init(m,s,a);m===e?d||(d=!0,u.push(h.toString())):(l.push(h),i[h.used-1].push(h))}var v={};function g(n){n.value===e?!0!==v[n.id]&&(v[n.id]=!0,u.push(n.toString())):n.used!==r&&(l.push(n),i[n.used-1].push(n))}for(var b=0,x=t;b<x;){for(var y=a++,w=b;w<x;++w)for(var E=l[w],N=E.used,k=1;k<=i.length;++k)if(0===(N&k))for(var S=i[k-1],O=0;O<S.length;++O){var A=S[O];A.generation===y?f(A,E,a,g):p(A,E,a,g)}b=x,x=l.length}return u}}},95:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(11),o=t.n(i),u=t(7),c=(t(55),t(5)),l=t(6);t(56);function d(){var e=Object(c.a)(["\n  border: 1px solid #dadada;\n  background-color: #dadada;\n  border-radius: 5px;\n  padding: 20px;\n  margin-bottom: 25px;\n  div.mainNumber {\n    color: white;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    align-items: center;\n    div {\n      height: 82px;\n      width: 45px;\n      background-color: #273238;\n      font-size: 40px;\n      font-weight: bold;\n      padding: 10px;\n      margin: 10px;\n      border-radius: 5px;\n    }\n  }\n"]);return d=function(){return e},e}var s=l.a.section(d()),m=Object(u.b)((function(e){return{numberReducer:e.numberReducer}}),{})((function(e){var n=e.numberReducer,t=n.mainNumber,r=n.showMainNumber,i=a.a.createElement("div",{className:"mainNumber"},t.toString().split("").map((function(e){return a.a.createElement("div",{key:Math.random()+e},r&&e)})));return a.a.createElement(s,null,i)})),p=function(e,n){return{type:"ADD_NUMBER",payload:{id:e,value:n,clicked:!0}}},f=function(){return{type:"START_TIMER",payload:1}},h=function(){return{type:"START_GAME"}},v=function(){return{type:"STOP_GAME"}};function g(){var e=Object(c.a)(["\n  width: 80%;\n  @media (max-width: 1000px) {\n    width: 100%;\n  }\n  height: 100px;\n  border: 1px solid #dadada;\n  background-color: #dadada;\n  border-radius: 5px;\n  div.numbers {\n    height: 100%;\n    color: white;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    div {\n      margin: 10px;\n      width: 90px;\n      height: 70px;\n      background-color: #6aa839;\n      font-size: 40px;\n      font-weight: bold;\n      padding: 10px;\n      border-radius: 5px;\n      cursor: pointer;\n    }\n  }\n"]);return g=function(){return e},e}var b=l.a.section(g()),x={BackNumber:function(e,n){return{type:"BACK_NUMBER",payload:{id:e,value:n,clicked:!1}}}},y=Object(u.b)((function(e){return{numberReducer:e.numberReducer}}),x)((function(e){var n=e.numberReducer.numbers,t=e.BackNumber,r=a.a.createElement("div",{className:"numbers"},n.map((function(e){var n=e.value,r=e.id;return a.a.createElement("div",{key:r||Math.random(),onClick:function(){return r&&n&&t(r,n)}},n)})));return a.a.createElement(b,null,r)})),w=t(97);function E(){var e=Object(c.a)(["\n  div.textAndButtons {\n    display: flex;\n    flex-direction: column;\n    align-items: start;\n    justify-content: center;\n    div.text {\n      h4 {\n        font-size: 14px;\n        font-weight: bold;\n        margin: 0;\n      }\n      h5 {\n        font-size: 14px;\n        font-weight: normal;\n        margin: 0;\n      }\n    }\n    div.randomNumbers {\n      width: 500px;\n      color: #e6e6e6;\n      display: flex;\n      flex-wrap: wrap;\n      text-align: center;\n      div {\n        width: 40px;\n        height: 40px;\n        background-color: #c9c9c9;\n        font-weight: bold;\n        border-radius: 5px;\n        cursor: pointer;\n        vert-align: middle;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        margin: 5px;\n        color: white;\n      }\n      div.gray {\n        background-color: #b1b1b1;\n      }\n    }\n    div.randomBigNumbers {\n      height: 50%;\n      color: #e6e6e6;\n      display: flex;\n      flex-direction: row;\n      justify-content: space-evenly;\n      align-items: center;\n      text-align: center;\n      div {\n        width: 40px;\n        height: 40px;\n        background-color: #c9c9c9;\n        font-weight: bold;\n        border-radius: 5px;\n        cursor: pointer;\n        vert-align: middle;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        margin: 5px;\n        color: white;\n      }\n      div.gray {\n        background-color: #b1b1b1;\n      }\n    }\n    div.start {\n      color: white;\n      font-size: 12px;\n      margin: 10px;\n      text-align: center;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      width: 140px;\n      height: 30px;\n      cursor: pointer;\n      background: #2d3c43;\n      background: linear-gradient(\n        180deg,\n        rgba(40, 68, 75, 1) 0%,\n        rgba(45, 60, 67, 1) 50%,\n        rgba(36, 45, 55, 1) 100%\n      );\n    }\n    div.disabled {\n      opacity: 0.3;\n      pointer-events: none;\n    }\n  }\n"]);return E=function(){return e},e}var N=l.a.section(E()),k={AddNumber:p,StartGame:h,StartTimer:f},S=Object(u.b)((function(e){return{numberReducer:e.numberReducer}}),k)((function(e){var n=e.numberReducer,t=n.randomNumbers,r=n.randomBigNumbers,i=n.numbers,o=e.AddNumber,u=e.StartGame,c=a.a.createElement("div",{className:"randomNumbers gray"},t.map((function(e){var n=e.value,t=e.clicked,r=e.id;return t?a.a.createElement("div",{key:Math.random(),className:"gray"},a.a.createElement("i",{className:"fas fa-check"})):a.a.createElement("div",{key:Math.random(),onClick:function(){return o(r,n)}},a.a.createElement("span",null,n))}))),l=a.a.createElement("div",{className:"randomBigNumbers"},r.map((function(e){var n=e.value,t=e.clicked,r=e.id;return t?a.a.createElement("div",{key:Math.random(),className:"gray"},a.a.createElement("i",{className:"fas fa-check"})):a.a.createElement("div",{key:Math.random(),onClick:function(){return o(r,n)}},a.a.createElement("span",null,n))})));return a.a.createElement(N,null,a.a.createElement("div",{className:"textAndButtons"},a.a.createElement("div",{className:"text"},a.a.createElement("h4",null,"Select 6 numbers by clicking on the cards below."),a.a.createElement("h5",null,"The first two rows contain the numbers 1 to 10, the last row containt the nymbers 25, 50, 75 and 100.")),c,l,a.a.createElement("div",{className:"start ".concat(i.every((function(e){return null!==e.value}))?"":"disabled"),onClick:function(){return u()}},"START")))}));function O(){var e=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: stretch;\n  align-items: center;\n\n  div.text {\n    padding: 10px 0;\n    align-self: flex-start;\n    h4 {\n      margin: 0;\n      font-weight: normal;\n      span {\n        font-weight: bold;\n      }\n    }\n  }\n  div.textAreas {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    align-items: center;\n    padding-right: 20px;\n    margin: 0;\n\n    textarea {\n      height: 100px;\n      resize: none;\n      border-radius: 5px;\n      margin: 0 !important;\n      max-width: 50%;\n    }\n    div.solutions {\n      max-width: 50%;\n      background-color: white;\n      min-width: 50%;\n      height: 100px;\n      max-height: available;\n      overflow-y: auto;\n      margin-left: 2px;\n      border-radius: 5px;\n      p {\n        margin: 0;\n      }\n    }\n  }\n  div.stop {\n    align-self: flex-start;\n    color: white;\n    font-size: 12px;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 140px;\n    height: 30px;\n    cursor: pointer;\n    background: #2d3c43;\n    margin: 10px;\n    background: linear-gradient(\n      180deg,\n      rgba(40, 68, 75, 1) 0%,\n      rgba(45, 60, 67, 1) 50%,\n      rgba(36, 45, 55, 1) 100%\n    );\n  }\n"]);return O=function(){return e},e}var A=t(96).a.TextArea,j=l.a.section(O()),M={AddNumber:p,StartGame:h,StartTimer:f,StopGame:v,PlayAgain:function(){return{type:"PLAY_AGAIN"}},OnChange:function(e){return{type:"ON_CHANGE",payload:{text:e}}}},R=Object(u.b)((function(e){return{numberReducer:e.numberReducer}}),M)((function(e){var n=e.numberReducer,t=n.step3,r=n.solutions,i=n.textArr,o=e.StopGame,u=e.PlayAgain,c=e.OnChange,l=t?a.a.createElement("div",{className:"text"},a.a.createElement("h4",null,"SEARCH FINISHED:"),a.a.createElement("h4",null,"".concat(r.length)," answers found")):a.a.createElement("div",{className:"text"},a.a.createElement("h4",null,"Combine six selected numbers"," ",a.a.createElement("span",null,"(using just the four basic arithmetic operators)")),a.a.createElement("h4",null,"to get as close as possible to a randomly generated total.")),d=t?a.a.createElement("div",{className:"textAreas"},a.a.createElement("div",{className:"solutions"},i.map((function(e){var n=e.text,t=e.coincidence;return a.a.createElement("p",{key:n+Math.random(),style:{color:t?"green":"black"}},n)}))),a.a.createElement("div",{className:"solutions"},r.map((function(e){var n=e.value,t=e.coincidence;return a.a.createElement("p",{key:n+Math.random(),style:{color:t?"green":"red"}},n)})))):a.a.createElement("div",{className:"textAreas"},a.a.createElement(A,{rows:4,placeholder:"Optional working space. Use paper if you prefer. \nExample: 3 * (4 + 7 * (6 * 8 - 3))",onChange:function(e){return c(e.target.value)}}),a.a.createElement(A,{rows:4,placeholder:'Here you will see the answers after you press "STOP"',disabled:!0})),s=t?a.a.createElement("div",{className:"stop",onClick:function(){return u()}},"PLAY AGAIN"):a.a.createElement("div",{className:"stop",onClick:function(){return o()}},"STOP");return a.a.createElement(j,null,l,d,s)}));function B(){var e=Object(c.a)(["\n  width: 80%;\n  @media (max-width: 1000px) {\n    width: 100%;\n  }\n  border: 1px solid #dadada;\n  background-color: #dadada;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  div.progress {\n    width: 25%;\n    text-align: center;\n    cursor: pointer;\n    * {\n      color: #6ab035;\n    }\n  }\n  div.steps {\n    width: 75%;\n  }\n"]);return B=function(){return e},e}var T=l.a.section(B()),C={AddNumber:p,StartGame:h,StartTimer:f,ChangeTypeOfSeconds:function(){return{type:"CHANGE_TYPE_OF_SECONDS"}},StopGame:v},_=Object(u.b)((function(e){return{numberReducer:e.numberReducer}}),C)((function(e){var n=e.numberReducer,t=n.seconds,i=n.gameStarted,o=n.step1,u=n.step2,c=e.StartTimer,l=e.ChangeTypeOfSeconds,d=e.StopGame;return Object(r.useEffect)((function(){var e;return i&&(e=setInterval((function(){return c()}),1e3)),function(){clearInterval(e)}}),[i]),0===t&&d(),a.a.createElement(T,null,a.a.createElement("div",{className:"progress",onClick:function(){return l()}},a.a.createElement(w.a,{type:"circle",percent:100-1.67*t,format:function(){return t+" sec"},strokeColor:"#6AB035"})),a.a.createElement("div",{className:"steps"},o&&a.a.createElement(S,null),u&&a.a.createElement(R,null)))}));function G(){var e=Object(c.a)(["\n  background-color: #e7e7e7;\n  width: 100%;\n  height: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: center;\n"]);return G=function(){return e},e}var I=l.a.section(G()),P=function(){return a.a.createElement(I,null,a.a.createElement("h1",null,"Created by ",a.a.createElement("a",{href:"https://github.com/Automedon"},"Automedon")),a.a.createElement(m,null),a.a.createElement(y,null),a.a.createElement(_,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var U=t(14),z=t(4);function D(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;return e=Math.ceil(e),n=Math.floor(n),Math.floor(Math.random()*(n-e))+e}function H(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return e=Math.ceil(e),n=Math.floor(n),Math.floor(Math.random()*(n-e))+e}var Y=t(94).solutions,F=function(){return Array.from({length:20},(function(){return{value:H(),clicked:!1,id:Math.random()}}))},L=function(){return[{value:25,clicked:!1,id:Math.random()},{value:50,clicked:!1,id:Math.random()},{value:75,clicked:!1,id:Math.random()},{value:100,clicked:!1,id:Math.random()}]},J={numbers:[{value:null,id:null},{value:null,id:null},{value:null,id:null},{value:null,id:null},{value:null,id:null},{value:null,id:null}],mainNumber:D(),randomNumbers:F(),randomBigNumbers:L(),seconds:30,showMainNumber:!1,gameStarted:!1,step1:!0,step2:!1,step3:!1,solutions:[],text:"",typeOfSeconds:[15,30,45,60],i:0,textArr:[]},K=Object(U.b)({numberReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"ADD_NUMBER":var t=n.payload.id,r=n.payload.value,a=n.payload.clicked;if(e.numbers.every((function(e){return null!==e.value})))return e;for(var i=e.numbers.slice(),o=0;o<i.length;o++)if(null===i[o].value){i[o]={value:r,id:t};break}return Object(z.a)({},e,{numbers:i,randomNumbers:e.randomNumbers.map((function(e){return e.id===t?{id:t,value:r,clicked:a}:e})),randomBigNumbers:e.randomBigNumbers.map((function(e){return e.id===t?{id:t,value:r,clicked:a}:e}))});case"BACK_NUMBER":var u=n.payload.id,c=n.payload.clicked;return Object(z.a)({},e,{numbers:e.numbers.map((function(e){return e.id===u?{value:null,id:null}:Object(z.a)({},e)})),randomNumbers:e.randomNumbers.map((function(e){return e.id===u?Object(z.a)({},e,{clicked:c}):e})),randomBigNumbers:e.randomBigNumbers.map((function(e){return e.id===u?Object(z.a)({},e,{clicked:c}):e}))});case"START_TIMER":return 0!==e.seconds&&e.gameStarted?Object(z.a)({},e,{seconds:e.seconds-=1}):Object(z.a)({},e);case"START_GAME":return e.numbers.some((function(e){return null===e.value}))?e:Object(z.a)({},e,{showMainNumber:!0,gameStarted:!0,step1:!1,step2:!0});case"STOP_GAME":var l=Y(e.mainNumber,e.numbers.map((function(e){return e.value}))).map((function(e){return{value:e,coincidence:!1}})),d=e.text.split("\n").map((function(e){return{text:e,coincidence:l.some((function(n){return n.value.replace(/\s/g,"")===e.replace(/\s/g,"")}))}}));return Object(z.a)({},e,{showMainNumber:!0,gameStarted:!1,step1:!1,step3:!0,solutions:l.map((function(e){return Object(z.a)({},e,{coincidence:d.some((function(n){return n.text.replace(/\s/g,"")===e.value.replace(/\s/g,"")}))})})),seconds:0!==e.seconds?e.seconds:e.typeOfSeconds[e.i%e.typeOfSeconds.length],textArr:d});case"ON_CHANGE":return Object(z.a)({},e,{text:n.payload.text});case"CHANGE_TYPE_OF_SECONDS":return e.gameStarted?e:Object(z.a)({},e,{i:e.i+=1,seconds:e.typeOfSeconds[e.i%e.typeOfSeconds.length]});case"PLAY_AGAIN":return Object(z.a)({},e,{showMainNumber:!1,gameStarted:!1,step1:!0,step2:!1,step3:!1,randomNumbers:F(),randomBigNumbers:L(),seconds:e.typeOfSeconds[e.i%e.typeOfSeconds.length],text:"",textArr:[],solutions:[],numbers:[{value:null,id:null},{value:null,id:null},{value:null,id:null},{value:null,id:null},{value:null,id:null},{value:null,id:null}],mainNumber:D()});default:return e}}}),W=Object(U.c)(K);o.a.render(a.a.createElement(u.a,{store:W},a.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.83a3d257.chunk.js.map