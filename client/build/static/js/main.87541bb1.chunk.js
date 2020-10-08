(this["webpackJsonpgrocery-shop"]=this["webpackJsonpgrocery-shop"]||[]).push([[0],{118:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(24),c=a.n(l),o=a(6),s=a(31),u=a(72),i=a(73),m=a(14),p=a(34),d=Object(s.combineReducers)({productList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{products:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PRODUCT_LIST_REQUEST":return{loading:!0,products:[]};case"PRODUCT_LIST_SUCCESS":return{loading:!1,products:t.payload};case"PRODUCT_LIST_FAIL":return{loading:!1,error:t.payload};default:return e}},productDetail:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{product:{reviews:[]}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PRODUCT_DETAILS_REQUEST":return Object(m.a)({loading:!0},e);case"PRODUCT_DETAILS_SUCCESS":return{loading:!1,product:t.payload};case"PRODUCT_DETAILS_FAIL":return{loading:!1,error:t.payload};default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cartItems:[],shippingAddress:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CART_ADD_ITEM":var a=t.payload,n=e.cartItems.find((function(e){return e.product===a.product}));return n?Object(m.a)({},e,{cartItems:e.cartItems.map((function(e){return e.product===n.product?a:e}))}):Object(m.a)({},e,{cartItems:[].concat(Object(p.a)(e.cartItems),[a])});case"CART_REMOVE_ITEM":return Object(m.a)({},e,{cartItems:e.cartItems.filter((function(e){return e.product!==t.payload}))});case"CART_SAVE_SHIPPING_ADDRESS":return Object(m.a)({},e,{shippingAddress:t.payload});case"CART_SAVE_PAYMENT_METHOD":return Object(m.a)({},e,{paymentMethod:t.payload});default:return e}},userLogin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_LOGIN_REQUEST":return{loading:!0};case"USER_LOGIN_SUCCESS":return{loading:!1,userInfo:t.payload};case"USER_LOGIN_FAIL":return{loading:!1,error:t.payload};case"USER_LOGOUT":return{};default:return e}},userRegister:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_LOGIN_REQUEST":return{loading:!0};case"USER_LOGIN_SUCCESS":return{loading:!1,userInfo:t.payload};case"USER_LOGIN_FAIL":return{loading:!1,error:t.payload};default:return e}},userDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{user:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_DETAILS_REQUEST":return Object(m.a)({},e,{loading:!0});case"USER_DETAILS_SUCCESS":return{loading:!1,user:t.payload};case"USER_DETAILS_FAIL":return{loading:!1,error:t.payload};case"USER_DETAILS_RESET":return{};default:return e}},orderCreate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ORDER_CREATE_REQUEST":return{loading:!0};case"ORDER_CREATE_SUCCESS":return{loading:!1,success:!0,order:t.payload};case"ORDER_CREATE_FAIL":return{loading:!1,error:t.payload};default:return e}},orderDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0,orderItems:[],shippingAddress:{}},t=arguments.length>1?arguments[1]:void 0;switch(console.log("action: ",t),t.type){case"ORDER_DETAILS_REQUEST":return Object(m.a)({},e,{loading:!0});case"ORDER_DETAILS_SUCCESS":return{loading:!1,order:t.payload};case"ORDER_DETAILS_FAIL":return{loading:!1,error:t.payload};default:return e}},orderPay:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(console.log("action: ",t),t.type){case"ORDER_PAY_REQUEST":return{loading:!0};case"ORDER_PAY_SUCCESS":return{loading:!1,success:!0};case"ORDER_PAY_FAIL":return{loading:!1,error:t.payload};case"ORDER_PAY_RESET":return{};default:return e}},orderList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{orders:[]},t=arguments.length>1?arguments[1]:void 0;switch(console.log("action: ",t),t.type){case"ORDER_LIST_REQUEST":return{loading:!0};case"ORDER_LIST_SUCCESS":return{loading:!1,orders:t.payload};case"ORDER_LIST_FAIL":return{loading:!1,error:t.payload};case"ORDER_LIST_RESET":return{orders:[]};default:return e}}}),E=localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[],f=localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):null,g={cart:{cartItems:E,shippingAddress:localStorage.getItem("shippingAddress")?JSON.parse(localStorage.getItem("shippingAddress")):{}},userLogin:{userInfo:f}},h=[u.a],y=Object(s.createStore)(d,g,Object(i.composeWithDevTools)(s.applyMiddleware.apply(void 0,h))),S=(a(95),a(124)),v=a(22),b=a(131),I=a(123),O=a(130),_=a(7),C=a.n(_),R=a(11),L=a(74),A=a.n(L).a.create({baseURL:"http://localhost:5000"}),j=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.userLogin})).userInfo;return r.a.createElement("header",null,r.a.createElement(b.a,{bg:"dark",variant:"dark",expand:"lg"},r.a.createElement(v.LinkContainer,{to:"/"},r.a.createElement(b.a.Brand,null,"Grocery Shop")),r.a.createElement(b.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(b.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(I.a,{className:"ml-auto"},r.a.createElement(v.LinkContainer,{to:"/cart"},r.a.createElement(I.a.Link,null,r.a.createElement("i",{className:"fas fa-shopping-cart"})," Cart")),t?r.a.createElement(O.a,{title:t.name,id:"username"},r.a.createElement(v.LinkContainer,{to:"/profile"},r.a.createElement(O.a.Item,null,"Profile")),r.a.createElement(O.a.Item,{onClick:function(){e(function(){var e=Object(R.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.removeItem("userInfo"),t({type:"USER_LOGOUT"}),t({type:"USER_DETAILS_RESET"}),t({type:"USER_DETAILS_RESET"});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},"Logout")):r.a.createElement(v.LinkContainer,{to:"/login"},r.a.createElement(I.a.Link,null,r.a.createElement("i",{className:"fas fa-user"})," Sign In"))))))},T=a(125),k=a(81),P=function(){return r.a.createElement("footer",null,r.a.createElement(S.a,null,r.a.createElement(T.a,null,r.a.createElement(k.a,{className:"text-center"},"Made with Love By Shubham Lad"))))},D=a(10),w=a(133),U=function(e){var t=e.rating,a=e.reviews,n=e.color;return r.a.createElement("div",{className:"ratings"},r.a.createElement("span",null,r.a.createElement("i",{style:{color:n},className:t>=1?"fas fa-star":t>=.5?"fas fa-star-half-alt":"far fa-star"})),r.a.createElement("span",null,r.a.createElement("i",{style:{color:n},className:t>=2?"fas fa-star":t>=1.5?"fas fa-star-half-alt":"far fa-star"})),r.a.createElement("span",null,r.a.createElement("i",{style:{color:n},className:t>=3?"fas fa-star":t>=2.5?"fas fa-star-half-alt":"far fa-star"})),r.a.createElement("span",null,r.a.createElement("i",{style:{color:n},className:t>=4?"fas fa-star":t>=3.5?"fas fa-star-half-alt":"far fa-star"})),r.a.createElement("span",null,r.a.createElement("i",{style:{color:n},className:t>=5?"fas fa-star":t>=4.5?"fas fa-star-half-alt":"far fa-star"})),r.a.createElement("span",null,"".concat(a," Reviews")))};U.defaultProps={color:"#FDCC0D"};var N=U,x=function(e){var t=e.item;return r.a.createElement(w.a,{className:"my-3 p-3 rounded"},r.a.createElement(D.Link,{to:"/product/".concat(t._id)},r.a.createElement(w.a.Img,{variant:"top",src:t.image})),r.a.createElement(w.a.Body,null,r.a.createElement(D.Link,{to:"/product/".concat(t._id)},r.a.createElement(w.a.Title,null,t.name)),r.a.createElement(w.a.Text,{as:"div"},r.a.createElement(N,{rating:t.rating,reviews:t.numReviews})),r.a.createElement(w.a.Text,{as:"h3"},"\u20b9",t.price)))},G=a(126),F=function(){return r.a.createElement(G.a,{animation:"border",role:"status",style:{width:"100px",height:"100px",margin:"auto",display:"block"}},r.a.createElement("span",{className:"sr-only"},"Loading"))},M=a(132),Q=function(e){var t=e.varient,a=e.children;return r.a.createElement(M.a,{variant:t},a)};Q.defaultProps={varient:"info"};var B=Q,Y=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.productList})),a=t.error,l=t.products,c=t.loading;return Object(n.useEffect)((function(){e(function(){var e=Object(R.a)(C.a.mark((function e(t){var a,n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"PRODUCT_LIST_REQUEST"}),e.next=4,A.get("api/products");case 4:a=e.sent,n=a.data,console.log(n.body),t({type:"PRODUCT_LIST_SUCCESS",payload:n.body}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),t({type:"PRODUCT_LIST_FAIL",payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Grocery Items"),c?r.a.createElement(F,null):a?r.a.createElement(B,{varient:"danger"},a):r.a.createElement(T.a,null,l.map((function(e){return r.a.createElement(k.a,{key:e._id,sm:6,md:4,lg:3},r.a.createElement(x,{item:e}))}))))},J=a(8),q=a(127),V=a(134),H=a(129),z=a(80),W=function(e){var t=e.history,a=e.match,l=Object(n.useState)(1),c=Object(J.a)(l,2),s=c[0],u=c[1],i=Object(o.b)(),m=Object(o.c)((function(e){return e.productDetail})),d=m.error,E=m.product,f=m.loading;return Object(n.useEffect)((function(){var e;i((e=a.params.id,function(){var t=Object(R.a)(C.a.mark((function t(a){var n,r;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:"PRODUCT_DETAILS_REQUEST"}),t.next=4,A.get("api/products/".concat(e));case 4:n=t.sent,r=n.data,a({type:"PRODUCT_DETAILS_SUCCESS",payload:r.body}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),a({type:"PRODUCT_DETAILS_FAIL",payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()))}),[i]),r.a.createElement(r.a.Fragment,null,r.a.createElement(D.Link,{className:"btn btn-light",to:"/"},r.a.createElement("i",{class:"fas fa-arrow-circle-left fa-2x"})),f?r.a.createElement(F,null):d?r.a.createElement(B,{varient:"danger"},d):r.a.createElement(T.a,null,r.a.createElement(k.a,{md:6},r.a.createElement(q.a,{src:E.image,alt:E.name,fluid:!0})),r.a.createElement(k.a,{md:3},r.a.createElement(V.a,{variant:"flush"},r.a.createElement(V.a.Item,null,r.a.createElement("h3",null,E.name)),r.a.createElement(V.a.Item,null,r.a.createElement(N,{rating:E.rating,reviews:E.numReviews})),r.a.createElement(V.a.Item,null,r.a.createElement("p",null,E.description)))),r.a.createElement(k.a,{md:3},r.a.createElement(w.a,null,r.a.createElement(V.a,{variant:"flush"},r.a.createElement(V.a.Item,null,r.a.createElement(T.a,null,r.a.createElement(k.a,null,"Price: "),r.a.createElement(k.a,null,"\u20b9",E.price))),r.a.createElement(V.a.Item,null,r.a.createElement(T.a,null,r.a.createElement(k.a,null,"Status: "),r.a.createElement(k.a,null,E.countInStock>0?"Available":"Out of Stock"))),E.countInStock>0?r.a.createElement(V.a.Item,null,r.a.createElement(T.a,null,r.a.createElement(k.a,null,"Quantity: "),r.a.createElement(k.a,null,r.a.createElement(H.a.Control,{as:"select",value:s,onChange:function(e){return u(e.target.value)}},Object(p.a)(Array(E.countInStock).keys()).map((function(e){return r.a.createElement("option",{key:e+1,value:e+1},e+1)})))))):"",r.a.createElement(V.a.Item,null,r.a.createElement(z.a,{className:"btn btn-primary btn-block",type:"button",disabled:0===E.countInStock,onClick:function(){t.push("/cart/".concat(a.params.id,"?qty=").concat(s))}},"Add To Cart")))))),";")},$=a(9),K=function(e,t){return function(){var a=Object(R.a)(C.a.mark((function a(n,r){var l,c;return C.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,A.get("/api/products/".concat(e));case 2:l=a.sent,c=l.data,n({type:"CART_ADD_ITEM",payload:{product:c.body._id,name:c.body.name,image:c.body.image,price:c.body.price,countInStock:c.body.countInStock,quantity:t}}),localStorage.setItem("cartItems",JSON.stringify(r().cart.cartItems));case 6:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}()},X=function(e){var t=e.match,a=e.location,l=e.history,c=t.params.id,s=a.search?Number(a.search.split("=")[1]):1,u=Object(o.b)(),i=Object(o.c)((function(e){return e.cart})),m=i.cartItems;console.log(i);var d=function(e){u(function(e){return function(){var t=Object(R.a)(C.a.mark((function t(a,n){return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a({type:"CART_REMOVE_ITEM",payload:e}),localStorage.setItem("cartItems",JSON.stringify(n().cart.cartItems));case 2:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}(e))};return Object(n.useEffect)((function(){c&&u(K(c,s))}),[u,c,s]),r.a.createElement(T.a,null,r.a.createElement(k.a,{md:8},r.a.createElement("h1",null,"Shopping Cart"),0===m.length?r.a.createElement(B,null,"Your Cart is empty ",r.a.createElement(D.Link,{to:"/"},"Back")):r.a.createElement(V.a,{variant:"flush"},m.map((function(e){return r.a.createElement(V.a.Item,{key:e.product},r.a.createElement(T.a,null,r.a.createElement(k.a,{md:2},r.a.createElement(q.a,{src:e.image,alt:e.name,fluid:!0,rounded:!0})),r.a.createElement(k.a,{md:3},r.a.createElement(D.Link,{to:"/product/".concat(e.product)},e.name)),r.a.createElement(k.a,{md:2},"\u20b9",e.price),r.a.createElement(k.a,{md:2},r.a.createElement(H.a.Control,{as:"select",value:e.quantity,onChange:function(t){return u(K(e.product,Number(t.target.value)))}},Object(p.a)(Array(e.countInStock).keys()).map((function(e){return r.a.createElement("option",{key:e+1,value:e+1},e+1)})))),r.a.createElement(k.a,{md:2},r.a.createElement(z.a,{type:"button",variant:"light",onClick:function(){return d(e.product)}},r.a.createElement("i",{class:"fas fa-trash"})))))})))),r.a.createElement(k.a,{md:4},r.a.createElement(w.a,null,r.a.createElement(V.a,{variant:"flush",className:"text-center"},r.a.createElement(V.a.Item,null,r.a.createElement("h2",null,"Subtotal (",m.reduce((function(e,t){return e+t.quantity}),0),") items"),"\u20b9",m.reduce((function(e,t){return e+t.quantity*t.price}),0).toFixed(2)),r.a.createElement(V.a.Item,null,r.a.createElement(z.a,{type:"button",className:"btn-block",disabled:0===m.length,onClick:function(){l.push("/login?redirect=shipping")}},"Proceed To Checkout"))))))},Z=function(e){var t=e.children;return r.a.createElement(S.a,null,r.a.createElement(T.a,{className:"justify-content-md-center"},r.a.createElement(k.a,{xs:12,md:6},t)))},ee=function(e){var t=e.location,a=e.history,l=Object(n.useState)(""),c=Object(J.a)(l,2),s=c[0],u=c[1],i=Object(n.useState)(""),p=Object(J.a)(i,2),d=p[0],E=p[1],f=Object(o.b)(),g=Object(o.c)((function(e){return e.userLogin})),h=g.loading,y=g.error,S=g.userInfo,v=t.search?t.search.split("=")[1]:"/";Object(n.useEffect)((function(){S&&a.push(v)}),[a,S,v]);return r.a.createElement(Z,null,r.a.createElement("h1",null,"Sign In"),y&&r.a.createElement(B,{varient:"danger"},y),h&&r.a.createElement(F,null),r.a.createElement(H.a,{onSubmit:function(e){e.preventDefault(),f(function(e,t){return function(){var a=Object(R.a)(C.a.mark((function a(n){var r,l,c;return C.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n({type:"USER_LOGIN_REQUEST"}),r={headers:{"Content-Type":"application/json"}},a.next=5,A.post("api/user/login",{email:e,password:t},r);case 5:l=a.sent,c=l.data,n({type:"USER_LOGIN_SUCCESS",payload:Object(m.a)({},c.user,{token:c.token})}),localStorage.setItem("userInfo",JSON.stringify(Object(m.a)({},c.user,{token:c.token}))),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(0),n({type:"USER_LOGIN_FAIL",payload:a.t0.response&&a.t0.response.data.message?a.t0.response.data.message:a.t0.message});case 14:case"end":return a.stop()}}),a,null,[[0,11]])})));return function(e){return a.apply(this,arguments)}}()}(s,d))}},r.a.createElement(H.a.Group,{controlId:"email"},r.a.createElement(H.a.Label,null,"Email Address"),r.a.createElement(H.a.Control,{type:"email",placeholder:"Enter Email",value:s,onChange:function(e){return u(e.target.value)}})),r.a.createElement(H.a.Group,{controlId:"password"},r.a.createElement(H.a.Label,null,"Password"),r.a.createElement(H.a.Control,{type:"password",placeholder:"Enter password",value:d,onChange:function(e){return E(e.target.value)}})),r.a.createElement(z.a,{type:"submit",variant:"primary"},"Sign In")),r.a.createElement(T.a,{className:"py-3"},r.a.createElement(k.a,null,r.a.createElement(D.Link,{to:v?"/register?redirect=".concat(v):"/register"},"Register"))))},te=function(e){var t=e.location,a=e.history,l=Object(n.useState)(""),c=Object(J.a)(l,2),s=c[0],u=c[1],i=Object(n.useState)(""),p=Object(J.a)(i,2),d=p[0],E=p[1],f=Object(n.useState)(""),g=Object(J.a)(f,2),h=g[0],y=g[1],S=Object(n.useState)(""),v=Object(J.a)(S,2),b=v[0],I=v[1],O=Object(n.useState)(null),_=Object(J.a)(O,2),L=_[0],j=_[1],P=Object(o.b)(),w=Object(o.c)((function(e){return e.userRegister})),U=w.loading,N=w.error,x=w.userInfo,G=t.search?t.search.split("=")[1]:"/";Object(n.useEffect)((function(){x&&a.push(G)}),[a,x,G]);return r.a.createElement(Z,null,r.a.createElement("h1",null,"Sign Up"),N&&r.a.createElement(B,{varient:"danger"},N),L&&r.a.createElement(B,{varient:"danger"},L),U&&r.a.createElement(F,null),r.a.createElement(H.a,{onSubmit:function(e){e.preventDefault(),d!==h?j("Password doesn't match"):P(function(e,t,a){return function(){var n=Object(R.a)(C.a.mark((function n(r){var l,c,o;return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r({type:"USER_LOGIN_REQUEST"}),l={headers:{"Content-Type":"application/json"}},n.next=5,A.post("api/user/register",{name:e,email:t,password:a},l);case 5:c=n.sent,o=c.data,r({type:"USER_LOGIN_SUCCESS",payload:Object(m.a)({},o.user,{token:o.token})}),r({type:"USER_LOGIN_SUCCESS",payload:Object(m.a)({},o.user,{token:o.token})}),localStorage.setItem("userInfo",JSON.stringify(Object(m.a)({},o.user,{token:o.token}))),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),r({type:"USER_LOGIN_FAIL",payload:n.t0.response&&n.t0.response.data.message?n.t0.response.data.message:n.t0.message});case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(e){return n.apply(this,arguments)}}()}(b,s,d))}},r.a.createElement(H.a.Group,{controlId:"name"},r.a.createElement(H.a.Label,null,"Name"),r.a.createElement(H.a.Control,{type:"name",placeholder:"Enter Name",value:b,onChange:function(e){return I(e.target.value)}})),r.a.createElement(H.a.Group,{controlId:"email"},r.a.createElement(H.a.Label,null,"Email Address"),r.a.createElement(H.a.Control,{type:"email",placeholder:"Enter Email",value:s,onChange:function(e){return u(e.target.value)}})),r.a.createElement(H.a.Group,{controlId:"password"},r.a.createElement(H.a.Label,null,"Password"),r.a.createElement(H.a.Control,{type:"password",placeholder:"Enter password",value:d,onChange:function(e){return E(e.target.value)}})),r.a.createElement(H.a.Group,{controlId:"confirmPassword"},r.a.createElement(H.a.Label,null,"Confirm Password"),r.a.createElement(H.a.Control,{type:"password",placeholder:"Confirm Password",value:h,onChange:function(e){return y(e.target.value)}})),r.a.createElement(z.a,{type:"submit",variant:"primary"},"Register")),r.a.createElement(T.a,{className:"py-3"},r.a.createElement(k.a,null,"Already Have an Account ?"," ",r.a.createElement(D.Link,{to:G?"/login?redirect=".concat(G):"/login"},"Login"))))},ae=a(128),ne=function(e){e.location;var t=e.history,a=Object(n.useState)(""),l=Object(J.a)(a,2),c=l[0],s=l[1],u=Object(n.useState)(""),i=Object(J.a)(u,2),m=i[0],p=i[1],d=Object(n.useState)(""),E=Object(J.a)(d,2),f=E[0],g=E[1],h=Object(n.useState)(""),y=Object(J.a)(h,2),S=y[0],b=y[1],I=Object(n.useState)(null),O=Object(J.a)(I,2),_=O[0],L=O[1],j=Object(o.b)(),P=Object(o.c)((function(e){return e.userDetails})),D=P.loading,w=P.error,U=P.user;console.log(U);var N=Object(o.c)((function(e){return e.userLogin})).userInfo,x=Object(o.c)((function(e){return e.orderList})),G=x.loading,M=x.error,Q=x.orders;console.log("order list ",Q),Object(n.useEffect)((function(){N?U.name?(b(U.name),s(U.email)):(j(function(){var e=Object(R.a)(C.a.mark((function e(t,a){var n,r,l,c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"USER_DETAILS_REQUEST"}),n=a().userLogin.userInfo,console.log(n),r={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n.token)}},e.next=7,A.get("api/user/profile",r);case 7:l=e.sent,c=l.data,t({type:"USER_DETAILS_SUCCESS",payload:c.user}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),t({type:"USER_DETAILS_FAIL",payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,a){return e.apply(this,arguments)}}()),j(function(){var e=Object(R.a)(C.a.mark((function e(t,a){var n,r,l,c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"ORDER_LIST_REQUEST"}),n=a().userLogin.userInfo,r={headers:{Authorization:"Bearer ".concat(n.token)}},e.next=6,A.get("api/order/userorders",r);case 6:l=e.sent,c=l.data,t({type:"ORDER_LIST_SUCCESS",payload:c}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t({type:"ORDER_LIST_FAIL",payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,a){return e.apply(this,arguments)}}())):t.push("/login")}),[t,N,j,U]);return r.a.createElement(T.a,null,r.a.createElement(k.a,{md:3},r.a.createElement("h1",null,"User Profile"),w&&r.a.createElement(B,{varient:"danger"},w),_&&r.a.createElement(B,{varient:"danger"},_),D&&r.a.createElement(F,null),r.a.createElement(H.a,{onSubmit:function(e){e.preventDefault(),m!==f&&L("Password doesn't match")}},r.a.createElement(H.a.Group,{controlId:"name"},r.a.createElement(H.a.Label,null,"Name"),r.a.createElement(H.a.Control,{type:"name",placeholder:"Enter Name",value:S,onChange:function(e){return b(e.target.value)}})),r.a.createElement(H.a.Group,{controlId:"email"},r.a.createElement(H.a.Label,null,"Email Address"),r.a.createElement(H.a.Control,{type:"email",placeholder:"Enter Email",value:c,onChange:function(e){return s(e.target.value)}})),r.a.createElement(H.a.Group,{controlId:"password"},r.a.createElement(H.a.Label,null,"Password"),r.a.createElement(H.a.Control,{type:"password",placeholder:"Enter password",value:m,onChange:function(e){return p(e.target.value)}})),r.a.createElement(H.a.Group,{controlId:"confirmPassword"},r.a.createElement(H.a.Label,null,"Confirm Password"),r.a.createElement(H.a.Control,{type:"password",placeholder:"Confirm Password",value:f,onChange:function(e){return g(e.target.value)}})),r.a.createElement(z.a,{type:"submit",variant:"primary",disabled:!0},"Update"))),r.a.createElement(k.a,{md:9},r.a.createElement("h1",null,"ORDER LIST"),G?r.a.createElement(F,null):M?r.a.createElement(B,{varient:"danger"},M):r.a.createElement(ae.a,{striped:!0,bordered:!0,hover:!0,responsive:!0,className:"table-sm"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"ID"),r.a.createElement("th",null,"DATE"),r.a.createElement("th",null,"TOTAL"),r.a.createElement("th",null,"PAID"),r.a.createElement("th",null,"DELIVERED"),r.a.createElement("th",null,"DETAILS"))),r.a.createElement("tbody",null,Q.map((function(e){return r.a.createElement("tr",{key:e._id},r.a.createElement("td",null,e._id),r.a.createElement("td",null,e.createdAt.substring(0,10)),r.a.createElement("td",null,e.totalPrice),r.a.createElement("td",{className:"text-center"},e.isPaid?r.a.createElement("span",{className:"badge badge-pill badge-success"},"Paid"):r.a.createElement("span",{className:"badge badge-pill badge-danger"},"Not Paid")),r.a.createElement("td",{className:"text-center"},e.isPaid?r.a.createElement("span",{className:"badge badge-pill badge-success"},r.a.createElement("i",{class:"fas fa-thumbs-up"})):r.a.createElement("span",{className:"badge badge-pill badge-danger"},r.a.createElement("i",{class:"fas fa-thumbs-down"}))),r.a.createElement("td",null,r.a.createElement(v.LinkContainer,{to:"/order/".concat(e._id)},r.a.createElement(z.a,{variant:"light"},"Details"))))}))))))},re=function(e){var t=e.step1,a=e.step2,n=e.step3,l=e.step4;return r.a.createElement(I.a,{className:"justify-content-center mb-4"},r.a.createElement(I.a.Item,null,t?r.a.createElement(v.LinkContainer,{to:"/login"},r.a.createElement(I.a.Link,null,"Sign In")):r.a.createElement(I.a.Link,{disabled:!0},"Sign In")),r.a.createElement(I.a.Item,null,a?r.a.createElement(v.LinkContainer,{to:"/shipping"},r.a.createElement(I.a.Link,null,"Shipping")):r.a.createElement(I.a.Link,{disabled:!0},"Shipping")),r.a.createElement(I.a.Item,null,n?r.a.createElement(v.LinkContainer,{to:"/payment"},r.a.createElement(I.a.Link,null,"Payment")):r.a.createElement(I.a.Link,{disabled:!0},"Payment")),r.a.createElement(I.a.Item,null,l?r.a.createElement(v.LinkContainer,{to:"/placeorder"},r.a.createElement(I.a.Link,null,"Place Order")):r.a.createElement(I.a.Link,{disabled:!0},"Place Order")))},le=function(e){var t=e.history,a=Object(o.c)((function(e){return e.cart})).shippingAddress;console.log("shippingAddress ",a);var l=Object(n.useState)(a.address),c=Object(J.a)(l,2),s=c[0],u=c[1],i=Object(n.useState)(a.city),m=Object(J.a)(i,2),p=m[0],d=m[1],E=Object(n.useState)(a.postalCode),f=Object(J.a)(E,2),g=f[0],h=f[1],y=Object(n.useState)(a.country),S=Object(J.a)(y,2),v=S[0],b=S[1],I=Object(o.b)();return r.a.createElement(Z,null,r.a.createElement(re,{step1:!0,step2:!0}),r.a.createElement("h1",null,"Shipping"),r.a.createElement(H.a,{onSubmit:function(e){var a;e.preventDefault(),I((a={address:s,city:p,postalCode:g,country:v},function(){var e=Object(R.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"CART_SAVE_SHIPPING_ADDRESS",payload:a}),localStorage.setItem("shippingAddress",JSON.stringify(a));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),t.push("/payment")}},r.a.createElement(H.a.Group,{controlId:"address"},r.a.createElement(H.a.Label,null,"Address"),r.a.createElement(H.a.Control,{type:"text",placeholder:"Enter Address",value:s,onChange:function(e){return u(e.target.value)}})),r.a.createElement(H.a.Group,{controlId:"city"},r.a.createElement(H.a.Label,null,"City"),r.a.createElement(H.a.Control,{type:"text",placeholder:"Enter City",value:p,onChange:function(e){return d(e.target.value)}})),r.a.createElement(H.a.Group,{controlId:"postalCode"},r.a.createElement(H.a.Label,null,"Postal Code"),r.a.createElement(H.a.Control,{type:"text",placeholder:"Enter Postal Code",value:g,onChange:function(e){return h(e.target.value)}})),r.a.createElement(H.a.Group,{controlId:"country"},r.a.createElement(H.a.Label,null,"Country"),r.a.createElement(H.a.Control,{type:"text",placeholder:"Enter Country",value:v,onChange:function(e){return b(e.target.value)}})),r.a.createElement(z.a,{type:"submit",variant:"primary"},"Continue")))},ce=function(e){var t=e.history;Object(o.c)((function(e){return e.cart})).shippingAddress||t.push("/shipping");var a=Object(n.useState)("PayPal"),l=Object(J.a)(a,2),c=l[0],s=l[1],u=Object(o.b)();return r.a.createElement(Z,null,r.a.createElement(re,{step1:!0,step2:!0,step3:!0}),r.a.createElement("h1",null,"Payment Method"),r.a.createElement(H.a,{onSubmit:function(e){var a;e.preventDefault(),u((a=c,function(){var e=Object(R.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"CART_SAVE_PAYMENT_METHOD",payload:a}),localStorage.setItem("paymentMethod",JSON.stringify(a));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),t.push("/placeorder")}},r.a.createElement(H.a.Group,null,r.a.createElement(H.a.Label,{as:"legend"},"Select Method"),r.a.createElement(k.a,null,r.a.createElement(H.a.Check,{type:"radio",label:"PayPal or CreditCard",id:"PayPal",name:"paymentMethod",value:"PayPal",checked:!0,onChange:function(e){return s(e.target.value)}}),r.a.createElement(H.a.Check,{type:"radio",label:"Stripe",id:"Stripe",name:"paymentMethod",value:"Stripe",onChange:function(e){return s(e.target.value)}}))),r.a.createElement(z.a,{type:"submit",variant:"primary"},"Continue")))},oe=function(e){var t=e.history,a=Object(o.b)(),l=Object(o.c)((function(e){return e.cart})),c=function(e){return(Math.round(100*e)/100).toFixed(2)};l.itemsPrice=c(l.cartItems.reduce((function(e,t){return e+t.price*t.quantity}),0)),l.shippingPrice=c(l.itemsPrice>100?0:50),l.taxPrice=c(Number((.15*l.itemsPrice).toFixed(2))),l.totalPrice=(Number(l.itemsPrice)+Number(l.shippingPrice)+Number(l.taxPrice)).toFixed(2);var s=Object(o.c)((function(e){return e.orderCreate})),u=s.order,i=s.success,m=s.error;Object(n.useEffect)((function(){i&&t.push("/order/".concat(u._id))}),[t,i]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(re,{step1:!0,step2:!0,step3:!0,step4:!0}),r.a.createElement(T.a,null,r.a.createElement(k.a,{md:8},r.a.createElement(V.a,{variant:"flush"},r.a.createElement(V.a.Item,null,r.a.createElement("h2",null,"Shipping"),r.a.createElement("p",null,r.a.createElement("strong",null,"Address:"),l.shippingAddress.address,", ",l.shippingAddress.city," ",l.shippingAddress.postalCode,","," ",l.shippingAddress.country)),r.a.createElement(V.a.Item,null,r.a.createElement("h2",null,"Payment Method"),r.a.createElement("strong",null,"Method: "),l.paymentMethod),r.a.createElement(V.a.Item,null,r.a.createElement("h2",null,"Order Items"),0===l.cartItems.length?r.a.createElement(B,null,"Your cart is empty"):r.a.createElement(V.a,{variant:"flush"},l.cartItems.map((function(e,t){return r.a.createElement(V.a.Item,{key:t},r.a.createElement(T.a,null,r.a.createElement(k.a,{md:1},r.a.createElement(q.a,{src:e.image,alt:e.name,fluid:!0,rounded:!0})),r.a.createElement(k.a,null,r.a.createElement(D.Link,{to:"/product/".concat(e.product)},e.name)),r.a.createElement(k.a,{md:4},e.quantity," x \u20b9",e.price," = \u20b9",e.quantity*e.price)))})))))),r.a.createElement(k.a,{md:4},r.a.createElement(w.a,null,r.a.createElement(V.a,{variant:"flush"},r.a.createElement(V.a.Item,null,r.a.createElement("h2",null,"Order Summary")),r.a.createElement(V.a.Item,null,r.a.createElement(T.a,null,r.a.createElement(k.a,null,"Items"),r.a.createElement(k.a,null,"\u20b9",l.itemsPrice))),r.a.createElement(V.a.Item,null,r.a.createElement(T.a,null,r.a.createElement(k.a,null,"Shipping"),r.a.createElement(k.a,null,"\u20b9",l.shippingPrice))),r.a.createElement(V.a.Item,null,r.a.createElement(T.a,null,r.a.createElement(k.a,null,"Tax"),r.a.createElement(k.a,null,"\u20b9",l.taxPrice))),r.a.createElement(V.a.Item,null,r.a.createElement(T.a,null,r.a.createElement(k.a,null,"Total"),r.a.createElement(k.a,null,"\u20b9",l.totalPrice))),m&&r.a.createElement(V.a.Item,null,r.a.createElement(B,{variant:"danger"},m)),r.a.createElement(V.a.Item,null,r.a.createElement(z.a,{type:"button",className:"btn-block",disabled:0===l.cartItems,onClick:function(){a(function(e){return function(){var t=Object(R.a)(C.a.mark((function t(a,n){var r,l,c,o;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:"ORDER_CREATE_REQUEST"}),r=n().userLogin.userInfo,l={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r.token)}},console.log("order",e),t.next=7,A.post("api/order",e,l);case 7:c=t.sent,o=c.data,a({type:"ORDER_CREATE_SUCCESS",payload:o}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),a({type:"ORDER_CREATE_FAIL",payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e,a){return t.apply(this,arguments)}}()}({orderItems:l.cartItems,shippingAddress:l.shippingAddress,paymentMethod:l.paymentMethod,itemsPrice:l.itemsPrice,shippingPrice:l.shippingPrice,taxPrice:l.taxPrice,totalPrice:l.totalPrice}))}},"Place Order")))))))},se=a(82),ue=function(e){var t=e.match.params.id,a=Object(n.useState)(!1),l=Object(J.a)(a,2),c=l[0],s=l[1],u=Object(o.b)(),i=Object(o.c)((function(e){return e.orderDetails})),m=i.order,p=i.loading,d=i.error,E=Object(o.c)((function(e){return e.orderPay})),f=E.success,g=E.loading;return Object(n.useEffect)((function(){var e,a=function(){var e=Object(R.a)(C.a.mark((function e(){var t,a,n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.get("/api/config/paypal");case 2:t=e.sent,a=t.data,(n=document.createElement("script")).type="text/javascript",n.src="https://www.paypal.com/sdk/js?client-id=".concat(a,"&currency=INR"),n.async=!0,n.onload=function(){s(!0)},document.body.appendChild(n);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();!m||f||m._id!==t?(u({type:"ORDER_PAY_RESET"}),u((e=t,function(){var t=Object(R.a)(C.a.mark((function t(a,n){var r,l,c,o;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:"ORDER_DETAILS_REQUEST"}),r=n().userLogin.userInfo,l={headers:{Authorization:"Bearer ".concat(r.token)}},console.log("hitting link api/order/".concat(e)),t.next=7,A.get("api/order/".concat(e),l);case 7:c=t.sent,o=c.data,console.log(o),a({type:"ORDER_DETAILS_SUCCESS",payload:o}),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),a({type:"ORDER_DETAILS_FAIL",payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(e,a){return t.apply(this,arguments)}}()))):m.isPaid||(window.paypal?s(!0):a())}),[u,m,t,f]),p?r.a.createElement(F,null):d?r.a.createElement(B,{varient:"danger"},d):r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Order ",m._id),r.a.createElement(T.a,null,r.a.createElement(k.a,{md:8},r.a.createElement(V.a,{variant:"flush"},r.a.createElement(V.a.Item,null,r.a.createElement("h2",null,"Shipping"),r.a.createElement("p",null,r.a.createElement("strong",null,"Name: ")," ",m.user.name),r.a.createElement("p",null,r.a.createElement("a",{href:"mailto:".concat(m.user.email)},m.user.email)),r.a.createElement("p",null,r.a.createElement("strong",null,"Address:"),m.shippingAddress.address,", ",m.shippingAddress.city," ",m.shippingAddress.postalCode,","," ",m.shippingAddress.country),m.isDelivered?r.a.createElement(B,{varient:"success"},"Delivered on ",m.deliveredAt):r.a.createElement(B,{varient:"danger"},"Not Delivered")),r.a.createElement(V.a.Item,null,r.a.createElement("h2",null,"Payment Method"),r.a.createElement("p",null,r.a.createElement("strong",null,"Method: "),m.paymentMethod),m.isPaid?r.a.createElement(B,{varient:"success"},"Paid on ",m.paidAt):r.a.createElement(B,{varient:"danger"},"Not Paid")),r.a.createElement(V.a.Item,null,r.a.createElement("h2",null,"Order Items"),0===m.orderItems.length?r.a.createElement(B,null,"Order is empty"):r.a.createElement(V.a,{variant:"flush"},m.orderItems.map((function(e,t){return r.a.createElement(V.a.Item,{key:t},r.a.createElement(T.a,null,r.a.createElement(k.a,{md:1},r.a.createElement(q.a,{src:e.image,alt:e.name,fluid:!0,rounded:!0})),r.a.createElement(k.a,null,r.a.createElement(D.Link,{to:"/product/".concat(e.product)},e.name)),r.a.createElement(k.a,{md:4},e.quantity," x \u20b9",e.price," = \u20b9",e.quantity*e.price)))})))))),r.a.createElement(k.a,{md:4},r.a.createElement(w.a,null,r.a.createElement(V.a,{variant:"flush"},r.a.createElement(V.a.Item,null,r.a.createElement("h2",null,"Order Summary")),r.a.createElement(V.a.Item,null,r.a.createElement(T.a,null,r.a.createElement(k.a,null,"Items"),r.a.createElement(k.a,null,"\u20b9",m.itemsPrice))),r.a.createElement(V.a.Item,null,r.a.createElement(T.a,null,r.a.createElement(k.a,null,"Shipping"),r.a.createElement(k.a,null,"\u20b9",m.shippingPrice))),r.a.createElement(V.a.Item,null,r.a.createElement(T.a,null,r.a.createElement(k.a,null,"Tax"),r.a.createElement(k.a,null,"\u20b9",m.taxPrice))),r.a.createElement(V.a.Item,null,r.a.createElement(T.a,null,r.a.createElement(k.a,null,"Total"),r.a.createElement(k.a,null,"\u20b9",m.totalPrice))),r.a.createElement(V.a.Item,null,!m.isPaid&&r.a.createElement(V.a.Item,null,g&&r.a.createElement(F,null),c?r.a.createElement(se.PayPalButton,{amount:m.totalPrice,currency:"INR",shippingPreference:"NO_SHIPPING",onSuccess:function(e){console.log(e),u(function(e,t){return function(){var a=Object(R.a)(C.a.mark((function a(n,r){var l,c,o,s;return C.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n({type:"ORDER_PAY_REQUEST"}),l=r().userLogin.userInfo,c={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(l.token)}},a.next=6,A.put("api/order/".concat(e,"/pay"),t,c);case 6:o=a.sent,s=o.data,n({type:"ORDER_PAY_SUCCESS",payload:s}),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(0),n({type:"ORDER_PAY_FAIL",payload:a.t0.response&&a.t0.response.data.message?a.t0.response.data.message:a.t0.message});case 14:case"end":return a.stop()}}),a,null,[[0,11]])})));return function(e,t){return a.apply(this,arguments)}}()}(t,e))}}):r.a.createElement(F,null))))))))};var ie=function(){return r.a.createElement(D.BrowserRouter,null,r.a.createElement(j,null),r.a.createElement("main",{className:"py-2"},r.a.createElement(S.a,null,r.a.createElement($.d,{path:"/login",component:ee}),r.a.createElement($.d,{path:"/register",component:te}),r.a.createElement($.d,{path:"/profile",component:ne}),r.a.createElement($.d,{path:"/shipping",component:le}),r.a.createElement($.d,{path:"/payment",component:ce}),r.a.createElement($.d,{path:"/placeorder",component:oe}),r.a.createElement($.d,{path:"/product/:id",component:W}),r.a.createElement($.d,{path:"/order/:id",component:ue}),r.a.createElement($.d,{path:"/cart/:id?",component:X}),r.a.createElement($.d,{path:"/",component:Y,exact:!0}))),r.a.createElement(P,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(o.a,{store:y},r.a.createElement(ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},86:function(e,t,a){e.exports=a(118)},95:function(e,t,a){}},[[86,1,2]]]);
//# sourceMappingURL=main.87541bb1.chunk.js.map