(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8790],{46438:function(e,t,n){Promise.resolve().then(n.bind(n,1438))},75826:function(e,t,n){"use strict";var s=n(92173),l=n(99110),a=n(99231),c=n.n(a);let o=new l.Z,r=s.Z.create({baseURL:"http://localhost:8000/api"});r.interceptors.request.use(e=>{let t=o.get("authToken");return c()(t)||(e.headers.Authorization="Bearer ".concat(t)),e},e=>Promise.reject(e)),r.interceptors.response.use(e=>e.data,e=>e.response?Promise.reject({status:e.response.status,data:e.response.data}):Promise.reject(e.request?e.request:e.message)),t.Z=r},1438:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Documentdetail}});var s=n(57437),l=n(2265),a=n(35302),c=n(52955),o=n(75826),r=n(24033),i=n(24010),u=n(32713),d=n(54737),h=n(14666),x=n(69255);function DownloadIcon(e){let{size:t,color:n,className:l,solid:a}=e;return(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:l,width:null!=t?t:16,height:null!=t?t:16,fill:null!=n?n:"white",viewBox:"0 0 16 16",children:(0,s.jsx)("path",{d:"M13.333 9.333c.368 0 .667.298.667.667v1.333a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10c0-.368.298-.667.667-.667s.667.298.667.667v1.333c0 .368.298.667.667.667h8c.368 0 .667-.298.667-.667V10c0-.368.298-.667.667-.667zM8.001 2.666c.368 0 .667.298.667.667h0v5.391l1.861-1.861c.26-.26.682-.26.943 0s.26.682 0 .943h0l-2.527 2.527c-.521.521-1.365.521-1.886 0h0L4.53 7.804c-.26-.26-.26-.682 0-.943s.682-.26.943 0h0l1.862 1.862V3.333c0-.368.299-.667.667-.667z"})})}var m=n(7516),f=n.n(m),p=n(78399),g=n(61939);let{Text:v}=a.default;function Documentdetail(){let e=(0,r.useSearchParams)(),t=e.get("documentId")||"";console.log({documentId:t});let[n,a]=(0,l.useState)(""),[m,j]=(0,l.useState)(""),[N,w]=(0,l.useState)(""),[b,C]=(0,l.useState)(""),[_,y]=(0,l.useState)(0),[R,O]=(0,l.useState)(0),[k,D]=(0,l.useState)(""),[A,L]=(0,l.useState)(""),[S,I]=(0,l.useState)(0),[F,E]=(0,l.useState)(!1),[B,Z]=(0,l.useState)(-1),[M,T]=(0,l.useState)(!1),[z,P]=(0,l.useState)(0),[Y,G]=(0,l.useState)(""),[U,V]=(0,l.useState)(0),q=(0,r.useRouter)(),likeReq=e=>{Z(0),o.Z.post("page/like/",{pageId:t,pageType:"D",score:e}).then(e=>{"Successfully like!"===e.message&&(Z(1),I(S+1))}).catch(e=>{})},H="f"===N[N.length-1]||"F"===N[N.length-1]?"PDF":"IMG";(0,l.useEffect)(()=>{o.Z.get("/document/getDocumentById",{params:{id:t}}).then(e=>{a(e.name),j(e.subject),w(e.link),C(e.userName),D(e.subjectId),y(e.like),O(e.download),L(e.studentId),V(e.createdAt),console.log(e),console.log(e.createdAt)}).catch(e=>{console.log("Lỗi khi gọi API:",e)}),console.log(A),o.Z.get("/users/"+A).then(e=>{G(e.avatar),console.log(Y)}).catch(e=>{console.log(e)})},[t,_,Y,A,_]),(0,l.useEffect)(()=>{console.log(t,S);let e="page/like/D/".concat(t,"/");o.Z.get(e).then(e=>{console.log(e),P(e.likes),1===e.userLike?E(!0):E(!1)}).catch(e=>{})},[t,S]);let W=new Date(U),K=Date.now(),$=K-U,J="";return J=$<=5e3?"Vừa xong":$<6e4?"".concat(Math.floor($/1e3)," gi\xe2y trước"):$<36e5?"".concat(Math.floor($/6e4)," ph\xfat trước"):$<864e5?"".concat(Math.floor($/36e5)," giờ trước"):$<31536e6?"".concat(Math.floor($/864e5)," ng\xe0y trước"):$<31536e6?W.toLocaleDateString("en-GB",{day:"numeric",month:"short"}):W.toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"}),(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(i.default,{title:"T\xe0i liệu",children:[(0,s.jsx)(h.Z,{title:n,boxContent:H,size:"ultra"}),(0,s.jsxs)("div",{className:"font-medium text-xl my-[5px] text-orange-500 hover:text-orange-300 cursor-pointer",onClick:function(){q.push("/all-subjects/documents?subjectId="+k)},children:[" ",(0,s.jsx)("span",{className:"text-black",children:"trong"})," ",m]}),(0,s.jsx)("div",{className:"mt-4 flex justify-between",children:(0,s.jsxs)("div",{className:"flex items-center cursor-pointer",onClick:function(){console.log(A),q.push("/settings/profile?studentid="+A)},children:[(0,s.jsx)(u.Z,{className:"mr-4",src:Y,size:36}),(0,s.jsx)("div",{style:{marginRight:"auto",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:(0,s.jsxs)(v,{strong:!0,style:{fontSize:"14px"},children:[b," ",(0,s.jsx)("span",{style:{color:"#6F767E"},children:" gửi v\xe0o l\xfac "})," ",J]})})]})}),(0,s.jsxs)("div",{className:"flex justify-between mb-4",children:[(0,s.jsx)("div",{}),(0,s.jsxs)("div",{className:"product__btns flex items-center",children:[(0,s.jsx)("div",{className:0===B?"flex items-center":"hidden items-center",children:(0,s.jsx)(f(),{color:"#2A85FF",size:24,cssOverride:{borderWidth:"4px"}})}),(0,s.jsxs)("button",{className:"button-stroke product__favorite mx-4",onClick:()=>{F?likeReq(0):likeReq(1)},children:[(0,s.jsx)(x.Z,{size:24,solid:F,solidOnHover:!0,className:"mr-2"}),z]}),(0,s.jsx)("a",{href:N,download:n,target:"_blank",children:(0,s.jsxs)("button",{className:"button product__buy",children:[(0,s.jsx)("span",{className:"product__price",children:"100"}),(0,s.jsxs)("span",{className:"product__inner",children:["Download",(0,s.jsx)("span",{children:(0,s.jsx)(DownloadIcon,{size:24,className:"ml-2"})})]})]})})]})]}),(0,s.jsxs)("div",{className:"flex mb-8",children:[(0,s.jsxs)("div",{className:"max-w-full max-h-full min-w-full min-h-full",children:[("f"===N[N.length-1]||"F"===N[N.length-1])&&(0,s.jsx)("embed",{src:N,width:"100%",height:"700px"}),("g"===N[N.length-1]||"G"===N[N.length-1])&&(0,s.jsx)(c.Z,{src:N,alt:"Kh\xf4ng tải được ảnh",width:"100%"})]}),(0,s.jsx)(p.Z,{reportInfo:{pageId:t,pageType:"D"},onSave:e=>{o.Z.post("/report/",{content:null==e?void 0:e.content,pageType:null==e?void 0:e.pageType,pageId:null==e?void 0:e.pageId,type:null==e?void 0:e.type}).then(e=>{console.log(e),T(!1)}).catch(e=>{console.log(e)})},open:M,onCancel:()=>T(!1)})]}),(0,s.jsx)("div",{style:{display:"flex",flexDirection:"row-reverse",marginBottom:"16px"},children:(0,s.jsxs)("button",{className:"actions__option",style:{width:"30%",alignItems:"start"},onClick:()=>T(!M),children:[(0,s.jsx)("div",{children:(0,s.jsx)(g.Z,{size:"20px",className:"icon"})}),(0,s.jsxs)("div",{className:"flex",style:{flexDirection:"column"},children:[(0,s.jsx)(v,{style:{textAlign:"left"},children:" B\xe1o c\xe1o t\xe0i liệu"}),(0,s.jsxs)("div",{style:{wordWrap:"break-word",textAlign:"left",fontSize:"12px"},children:[" Ch\xfang t\xf4i sẽ kh\xf4ng cho ",b.name," biết ai đ\xe3 b\xe1o c\xe1o."]})]})]})}),(0,s.jsx)(d.Z,{pageId:t,pageType:"D"})]})})}},69255:function(e,t,n){"use strict";n.d(t,{Z:function(){return HeartIcon}});var s=n(57437);function HeartIcon(e){let{size:t,color:n,className:l,solid:a}=e;return(0,s.jsx)("svg",{viewBox:"0 0 16 16",width:null!=t?t:20,height:null!=t?t:20,fill:null!=n?n:"rgb(246,80,102)",className:l,children:a?(0,s.jsx)("path",{d:"M7.867 3.475L8 3.611l.133-.136c1.495-1.523 3.923-1.523 5.418 0a3.93 3.93 0 0 1 0 5.485l-4.123 4.202a2 2 0 0 1-2.855 0L2.449 8.961a3.93 3.93 0 0 1 0-5.485c1.495-1.523 3.923-1.523 5.418 0z"}):(0,s.jsx)("path",{d:"M7.867 3.475L8 3.611l.133-.136c1.495-1.523 3.923-1.523 5.418 0a3.93 3.93 0 0 1 0 5.485l-4.123 4.202a2 2 0 0 1-2.855 0L2.449 8.961a3.93 3.93 0 0 1 0-5.485c1.495-1.523 3.923-1.523 5.418 0zM3.4 4.409c-.979.998-.979 2.62 0 3.618l4.123 4.202c.261.266.69.266.952 0l4.123-4.202c.979-.998.979-2.62 0-3.618a2.45 2.45 0 0 0-3.514 0l-.609.621c-.125.128-.297.2-.476.2s-.35-.072-.476-.2l-.609-.621a2.45 2.45 0 0 0-3.514 0z"})})}},82881:function(e,t,n){"use strict";n.d(t,{Z:function(){return MyButtonWrapper}});var s=n(57437),l=n(88110),a=n.n(l),c=n(49385),o=n(2265),r=n(23986),i=n(44143),u=n(25727),d=n.n(u),h=n(54952),x=n(52410);function MyButtonWrapper(e){var t;let{displayChildrenWhenLoading:n=!0}=e,l="p-1 h-fit w-fit  border-0 group hover:!border-contrast hover:!text-contrast",[u,m]=(0,o.useState)(null!==(t=e.loading)&&void 0!==t&&t),f=(0,o.useCallback)(()=>{g(!0),setTimeout(()=>{var t;g(!1),m(!1),null===(t=e.onDoneAnimationEnd)||void 0===t||t.call(e)},1500)},[e]),[p,g]=(0,o.useState)(!1);return e.rounded&&(l+=" rounded-full"),(0,s.jsx)(a(),{...d()(e,["rounded","loading"]),onClick:t=>{var n;(0,i.$)(e.onClick)?(m(!0),e.onClick().then(()=>{f()})):null===(n=e.onClick)||void 0===n||n.call(e,t)},className:(0,r.m)(l,e.className),disabled:u&&!p,children:(0,s.jsxs)("div",{className:"flex gap-3 items-center",children:[u?n&&e.children:e.children,u&&(p?(0,s.jsx)(x.DVR,{size:"1.2em"}):(0,s.jsx)(c.default,{indicator:(0,s.jsx)(h.default,{}),className:"text-current"}))]})})}},58861:function(e,t,n){"use strict";n.d(t,{k:function(){return SaveButton}});var s=n(57437);n(2265);var l=n(23986),a=n(82881);function SaveButton(e){let t="group text-white px-3 py-[6px] bg-primary\n        hover:bg-dark-primary font-semibold hover:!text-white\n    ";return t=(0,l.m)(t,e.className),(0,s.jsx)(a.Z,{...e,className:t,children:e.children})}},36045:function(e,t,n){"use strict";var s=n(57437),l=n(35302),a=n(99231),c=n.n(a),o=n(33147),r=n(2265),i=n(23986);let{Text:u}=l.default,d=["#7bb8ea","#FFBC99","#FFD88D","#B5E4CA","#CABDFF","#B1E5FC","#E0C9C1"];t.Z=r.memo(e=>{let{color:t,className:n,children:l}=e;return(c()(t)&&(t=d[(0,o.Z)(d.length-1)]),l)?(0,s.jsx)("div",{className:(0,i.m)("min-h-8 px-1 min-w-8 rounded-md flex items-center justify-center text-center",n),style:{backgroundColor:t},children:(0,s.jsx)(u,{strong:!0,className:"font-semibold text-xl",children:l})}):(0,s.jsx)("div",{className:(0,i.m)("h-8 w-4 rounded",n),style:{backgroundColor:t}})})},24010:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Main}});var s=n(57437),l=n(89271),a=n(35302);n(2265);var c=n(23986),o=n(78073);function BackTopIcon(e){let{size:t,color:n,className:l}=e;return(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:null!=t?t:30,height:null!=t?t:30,fill:null!=n?n:o.C.ROYAL_GRAY_COLOR,className:l,children:(0,s.jsx)("path",{d:"M17.71,9.88l-4.3-4.29a2,2,0,0,0-2.82,0L6.29,9.88a1,1,0,0,0,0,1.41,1,1,0,0,0,1.42,0L11,8V19a1,1,0,0,0,2,0V8l3.29,3.29a1,1,0,1,0,1.42-1.41Z"})})}let{Title:r}=a.default;function Main(e){let{className:t,children:n,title:a,goToTop:o=!0}=e;return(0,s.jsxs)("div",{className:"flex flex-col ml-layout-el w-auto mr-body-pd",children:[a&&(0,s.jsx)(r,{level:2,className:"mt-3",children:a}),(0,s.jsxs)("main",{className:(0,c.m)("\n                bg-secondary\n                rounded-layout-el\n                p-8\n                min-h-[calc(100vh-109px)]\n                shadow\n            ",t),children:[n,o&&(0,s.jsx)(l.Z.BackTop,{icon:(0,s.jsx)(BackTopIcon,{className:"absolute top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2 group-hover:fill-black"}),className:"group"})]})]})}},78073:function(e,t,n){"use strict";n.d(t,{C:function(){return s}});let s={PRIMARY_COLOR:"#4096ff",DARK_PRIMARY_COLOR:"#19619D",LIGHT_PRIMARY_COLOR:"#c6e0f6",SECONDARY_COLOR:"#FFFFFF",SECONDARY_CONTRAST_COLOR:"#1A1D1F",ROYAL_GRAY_COLOR:"#6F767E",TABLE_BORDER_COLOR:"rgba(75, 85, 99)",DANGER_COLOR:"#FF4D4F",PRIMARY_ICON_COLOR:"#7D7C7C",UNDERGROUND_COLOR:"#f4f4f4",CLICKABLE_COLOR:"#4096ff",LAYOUT_ELEMENT_SPACE:"15px",LAYOUT_ELEMENT_BORDER_RADIUS:"15px",BODY_PADDING:"12px"}},44143:function(e,t,n){"use strict";function isUndefined(e){return void 0===e}function isAsyncFunction(e){return!!e&&"AsyncFunction"===e.constructor.name}n.d(t,{$:function(){return isAsyncFunction},o:function(){return isUndefined}})}},function(e){e.O(0,[2400,9020,1718,9273,2808,350,260,3986,5022,3954,8110,9271,9385,6912,3071,2863,3038,1299,8943,4737,2971,2472,1744],function(){return e(e.s=46438)}),_N_E=e.O()}]);