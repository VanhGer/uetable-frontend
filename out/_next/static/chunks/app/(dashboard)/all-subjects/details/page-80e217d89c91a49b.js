(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3005],{59411:function(e,t,l){Promise.resolve().then(l.bind(l,47582))},33610:function(e,t,l){"use strict";l.d(t,{R:function(){return DocumentAPI}});var n=l(41962),a=l(75826),r=l(60171),i=l(2890),s=l.n(i),c=l(15230);let DocumentAPI=class DocumentAPI{static async getTopDocumentsOfSubject(e,t){try{return await a.Z.get("/document/getDocumentOfSubject",{params:{subjectId:e,limit:t}})}catch(e){return console.log(e),r.toast.error("Fetch t\xe0i liệu thất bại"),[]}}static async userUploadFiles(e){console.log("haha");try{return await Promise.all(e.files.map(async t=>{let l=new FormData;console.log(t.name),l.append("request",JSON.stringify({name:t.name,category:e.category,subjectId:e.subjectId})),t.originFileObj&&l.append("up",t.originFileObj);try{await a.Z.post("/document/createDocument",l,{headers:{"Content-Type":"multipart/form-data"}})}catch(e){console.log(e),r.toast.error("Tải t\xe0i liệu thất bại")}})),{ok:!0}}catch(e){return console.log(e),r.toast.error("Tải t\xe0i liệu thất bại"),{ok:!1}}}static async getMySubjectDocs(e,t){try{let l=await a.Z.get("/document/getMyDocumentByStudentId",{params:{studentId:t}});if(l=l.filter(t=>t.subjectId+""===e),0===l.length)return[];let n=s().map(s().groupBy(l,"category"),(e,t)=>({category:t,files:s().map(e,e=>({name:e.name,ext:(0,c.N)(e.link).ext.toUpperCase(),id:e.id,link:e.link,createdAt:new Date(e.createdAt)}))}));return n}catch(e){throw console.log(e),r.toast.error("Lấy m\xf4n học của bạn thất bại"),e}}static async deleteMySubjectDoc(e){return await (0,n.g)(2e3),{ok:!0}}static async getAllDocumentsOfSubject(e){try{let t=await a.Z.get("/document/getDocumentOfSubject",{params:{subjectId:e}});return t.map(e=>({...e,createdAt:new Date(e.createdAt)}))}catch(e){return console.log(e),r.toast.error("Fetch document thất bại"),[]}}static async toggleShare(e){return await (0,n.g)(2e3),{ok:!0}}}},47582:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return AllSubjectsDetailsPage}});var n=l(57437),a=l(20911),r=l(72287),i=l(27012),s=l(80326),c=l(24010),o=l(40155),u=l(35302),d=l(42333),x=l(54737),h=l(38371),m=l(24033);let{Text:f,Title:j}=u.default,g=(0,h.Z)();function AllSubjectsDetailsPage(){let e=(0,m.useSearchParams)(),t=e.get("subjectId")||"";console.log({subjectId:t});let{data:l,isLoading:u}=(0,d.ZP)([g,t],e=>{let[t,l]=e;return a.i.getSubjectById(l)});return(0,n.jsx)(c.default,{title:"Th\xf4ng tin học phần",children:(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsxs)("div",{className:"flex flex-col gap-8 w-3/4",children:[(0,n.jsx)(i.Z,{subject:l}),(0,n.jsx)(o.default,{}),(0,n.jsx)(r.Z,{subjectId:t}),(0,n.jsx)(o.default,{}),(0,n.jsx)(x.Z,{pageId:t,pageType:"S"})]}),(0,n.jsx)(o.default,{type:"vertical",className:"h-auto"}),(0,n.jsx)("div",{className:"w-1/4 pl-5",children:(0,n.jsx)(s.Z,{subjectCode:null==l?void 0:l.code})})]})})}},72287:function(e,t,l){"use strict";l.d(t,{Z:function(){return Documents}});var n=l(57437),a=l(14666),r=l(93406),i=l(80338),s=l(35302),c=l(61396),o=l.n(c),u=l(49394),d=l(64685);l(47793);var x=l(2265),h=l(62510),m=l(82881);let f={superLargeDesktop:{breakpoint:{max:4e3,min:3e3},items:5},desktopfasdjk:{breakpoint:{max:3e3,min:1024},items:4},tablet:{breakpoint:{max:1024,min:464},items:3},mobile:{breakpoint:{max:464,min:0},items:2}};function MultiCarousel(e){let{children:t,width:l,gap:a=16}=e;return(0,n.jsx)("div",{style:{width:null!=l?l:0,marginLeft:-a/2},children:(0,n.jsx)(d.default,{arrows:!1,responsive:f,customButtonGroup:(0,n.jsx)(CustomButtonGroup,{}),children:x.Children.map(t,e=>(0,n.jsx)("div",{className:"mb-10",style:{marginRight:a/2,marginLeft:a/2},children:e}))})})}function CustomRightArrow(e){let{onClick:t}=e;return(0,n.jsx)(m.Z,{onClick:t,rounded:!0,className:"border-transparent border-2 p-2 absolute top-full -translate-y-full translate-x-[120%] right-1/2",children:(0,n.jsx)(h.dhL,{className:"fill-royal-gray "})})}function CustomLeftArrow(e){let{onClick:t}=e;return(0,n.jsx)(m.Z,{onClick:()=>null==t?void 0:t(),rounded:!0,className:"border-transparent border-2 p-2 absolute top-full -translate-y-full -translate-x-[120%] left-1/2",children:(0,n.jsx)(h.Wuc,{className:"fill-royal-gray"})})}let CustomButtonGroup=e=>{let{next:t,previous:l}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(CustomRightArrow,{onClick:()=>null==t?void 0:t()}),(0,n.jsx)(CustomLeftArrow,{onClick:()=>null==l?void 0:l()})]})};var j=l(42333),g=l(33610),p=l(38371);let{Text:v}=s.default,b=(0,p.Z)();function Documents(e){let{subjectId:t}=e,{data:l,isLoading:s}=(0,j.ZP)([b,t],e=>{let[t,l]=e;return g.R.getTopDocumentsOfSubject(l,5)});return(0,n.jsxs)(i.default,{direction:"vertical",size:"large",className:"w-full",children:[(0,n.jsx)(a.Z,{title:(0,n.jsx)(o(),{href:(0,r.A)("/all-subjects/documents",{subjectId:t}),children:"T\xe0i liệu nổi bật"}),size:"middle"}),l&&l.length>0?(0,n.jsxs)(MultiCarousel,{width:"58vw",children:[(null!=l?l:[,,,,,].fill(null)).map((e,t)=>{var l,a;return(0,n.jsx)(u.Z,{imgHeight:130,url:"",title:null!==(l=null==e?void 0:e.name)&&void 0!==l?l:"",info:(0,n.jsx)(v,{type:"secondary",strong:!0,children:"".concat(null==e?void 0:e.download," lượt tải, ").concat(null==e?void 0:e.like," lượt th\xedch")}),loading:s},null!==(a=null==e?void 0:e.id)&&void 0!==a?a:t)}),(0,n.jsx)(o(),{href:"",children:(0,n.jsx)(m.Z,{className:"w-full rounded-xl border-2 h-[130px] flex items-center justify-center gap-3",children:(0,n.jsx)(v,{className:"text-xl font-semibold",children:"Xem th\xeam"})})})]}):(0,n.jsx)(v,{type:"secondary",italic:!0,children:"Đang cập nhật t\xe0i liệu"})]})}},27012:function(e,t,l){"use strict";l.d(t,{Z:function(){return Overview}});var n=l(57437),a=l(15567),r=l(95381),i=l(14666),s=l(65460),c=l(38371),o=l(77013),u=l(42072),d=l(21161),x=l(89158),h=l(26782),m=l(80338),f=l(68939),j=l(35302),g=l(99231),p=l.n(g),v=l(2265),b=l(72053);let{Title:y,Text:w}=j.default,Z=["id","credits","gpa","lecturers"];function Overview(e){let{subject:t}=e,[l,a]=(0,v.useState)(!1),r=p()(t);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"flex gap-12",children:[(0,n.jsxs)("div",{className:"flex flex-col flex-[7] gap-5",children:[(0,n.jsx)(i.Z,{title:r?(0,n.jsx)(h.Z.Input,{active:!0,className:"!w-[80%]"}):(0,n.jsxs)("div",{className:"flex gap-4 items-center animate__animated animate__fadeIn",children:[(0,n.jsx)(y,{level:3,className:"!mb-0",children:"".concat(null==t?void 0:t.name)}),(0,n.jsx)(s.l1,{grade:(0,u.rX)(t),className:"py-1"})]})}),(0,n.jsx)(h.Z,{round:!0,active:!0,loading:r,children:(null==t?void 0:t.description)?t.description:(0,n.jsx)(w,{type:"secondary",italic:!0,strong:!0,children:"Đang cập nhật m\xf4 tả"})})]}),(0,n.jsxs)("div",{className:"flex flex-col flex-[3] gap-3",children:[(0,n.jsx)(i.Z,{title:"Th\xf4ng tin"}),(0,n.jsx)(h.Z,{round:!0,active:!0,loading:r,children:(0,n.jsx)(x.Z,{dataSource:Z,renderItem:e=>(0,n.jsx)(Info,{type:e,subject:t,onClick:handleOpenDrawer}),rowKey:e=>e,itemLayout:"vertical",className:" animate__animated animate__fadeIn"})})]})]}),(0,n.jsx)(d.Z,{width:500,open:l,onClose:function(){a(!1)},closeIcon:!1,children:(0,n.jsx)(LecturersList,{subject:t})})]});function handleOpenDrawer(){a(!0)}}function Info(e){let{type:t,subject:l,onClick:r}=e;return(0,n.jsx)(x.Z.Item,{children:(0,n.jsx)(w,{strong:!0,className:"whitespace-nowrap",children:(()=>{switch(t){case"id":return"M\xe3 học phần: ".concat(null==l?void 0:l.code);case"credits":return"Số t\xedn chỉ: ".concat(null==l?void 0:l.credits);case"gpa":return(0,n.jsxs)("span",{children:["GPA: ",(0,u.SB)(l)?(0,u.w4)(l):(0,n.jsx)(w,{type:"secondary",children:"Đang cập nhật"})]});case"lecturers":return(0,n.jsx)(m.default,{children:(0,n.jsx)(a.Z,{onClick:r,children:"Danh s\xe1ch giảng vi\xean"})})}})()})})}function LecturersList(e){let{subject:t}=e,[l,a]=(0,v.useState)(""),u=(0,b.y1)(e=>{a(e)},300);return(0,n.jsxs)(m.default,{direction:"vertical",size:"large",className:"w-full",children:[(0,n.jsx)(i.Z,{title:"Danh s\xe1ch giảng vi\xean"}),(0,n.jsx)(r.Z,{placeholder:"T\xecm giảng vi\xean",className:"w-full h-[40px]",onChange:e=>u(e.target.value)}),p()(null==t?void 0:t.lecturers)||p()(t)?(0,n.jsx)(w,{type:"secondary",italic:!0,strong:!0,children:"Danh s\xe1ch đang cập nhật"}):(0,n.jsx)(f.Z,{dataSource:(0,o.Z)(l,t.lecturers,["name","email"]),columns:[{key:"name",title:"T\xean giảng vi\xean",render:(e,t)=>({children:(0,n.jsx)(s.J5,{children:t.name})})},{key:"email",title:"Th\xf4ng tin li\xean lạc",render(e,t){var l;return{children:(0,n.jsx)(s.J5,{children:null!==(l=t.email)&&void 0!==l?l:(0,n.jsx)(w,{italic:!0,type:"secondary",children:"Đang cập nhật"})})}}}],rowKey:e=>(0,c.Z)(),pagination:!1})]})}},80326:function(e,t,l){"use strict";l.d(t,{Z:function(){return RelatedSubject}});var n=l(57437),a=l(20911),r=l(82881),i=l(49394),s=l(14666),c=l(38371),o=l(93406),u=l(89158),d=l(80338),x=l(35302),h=l(2890),m=l.n(h),f=l(42333),j=l(61396),g=l.n(j);let{Text:p}=x.default,v=(0,c.Z)();function RelatedSubject(e){let{subjectCode:t}=e,{data:l,isLoading:x}=(0,f.ZP)([v,t],e=>{let[t,l]=e;if(!(0,h.isUndefined)(l))return a.i.getRelatedSubject(l,6)});return(0,n.jsxs)(d.default,{size:"large",direction:"vertical",className:"w-full",children:[(0,n.jsx)(s.Z,{title:(0,n.jsx)(g(),{href:"/all-subjects",children:"M\xf4n học li\xean quan"})}),(0,n.jsx)(u.Z,{dataSource:null!=l?l:m().fill(Array(6),null),renderItem:e=>{var l,a;return(0,n.jsx)("div",{className:"mb-5",children:(0,n.jsx)(i.Z,{imgSrc:null==e?void 0:e.imgLink,url:(0,o.A)("/all-subjects/details",{subjectId:null!==(l=null==e?void 0:e.code)&&void 0!==l?l:""}),title:null!==(a=null==e?void 0:e.name)&&void 0!==a?a:"",loading:x||(0,h.isUndefined)(t),imgHeight:180})})},rowKey:e=>{var t;return null!==(t=null==e?void 0:e.code)&&void 0!==t?t:(0,c.Z)()}}),(0,n.jsx)(g(),{href:"/all-subjects",children:(0,n.jsx)(r.Z,{className:"p-2 border-2 w-full rounded-lg text-lg",children:(0,n.jsx)("div",{className:"flex items-center justify-center gap-3 w-full",children:(0,n.jsx)(p,{strong:!0,className:"text-fs-inherit hover:text-contrast",children:"Xem th\xeam"})})})})]})}},15567:function(e,t,l){"use strict";l.d(t,{Z:function(){return ClickableText}});var n=l(57437);function ClickableText(e){let{onClick:t,children:l}=e;return(0,n.jsx)("span",{className:"cursor-pointer hover:text-clickable",onClick:t,children:l})}l(2265)},49394:function(e,t,l){"use strict";l.d(t,{Z:function(){return Preview}});var n=l(57437),a=l(93406),r=l(26782),i=l(35302),s=l(16691),c=l.n(s),o=l(24033),u=l(2265),d=l(99231),x=l.n(d),h=l(33147);let{Text:m,Title:f}=i.default;function Preview(e){let{imgSrc:t,imgAlt:l,star:i,stared:s=!1,url:c,newTab:u=!1,params:d,title:h,info:m,tag:g,loading:p=!1,imgHeight:v=200,children:b}=e,y=(0,o.useRouter)();return p?(0,n.jsxs)("div",{className:"flex flex-col gap-3 w-full",children:[(0,n.jsx)(r.Z.Image,{active:!0,className:"!w-full",style:{height:v}}),(0,n.jsx)(r.Z.Input,{active:!0,size:"small",style:{width:"70%",height:15}}),(0,n.jsx)(r.Z.Input,{active:!0,size:"small",style:{width:"70%",height:15}})]}):(0,n.jsxs)("div",{className:"group/preview cursor-pointer flex flex-col gap-3 w-full h-fit relative animate__animated animate__fadeIn",onClick:()=>{x()(c)||(u?(0,a.R)(c,d):y.push((0,a.A)(c,d)))},children:[(0,n.jsxs)("div",{className:"relative overflow-hidden",style:{height:v},children:[(0,n.jsx)(j,{imgSrc:t,imgAlt:l,url:c}),(0,n.jsx)("div",{className:"absolute top-0 left-0 group-hover/preview:bg-[rgba(17,19,21,0.8)] w-full h-full transition-all duration-300 rounded-[15px]"}),(0,n.jsx)("div",{className:"z-20 absolute top-4 right-4 ".concat(s?"":"hidden opacity-0 group-hover/preview:block group-hover/preview:opacity-100 transition-opacity duration-300"),children:i})]}),(0,n.jsxs)("div",{className:"flex gap-5 w-full",children:[(0,n.jsxs)("div",{className:"flex flex-col flex-1 items-start text-start",children:[(0,n.jsx)(f,{level:5,className:"group-hover/preview:text-[#69b1ff]",children:h}),m]}),(0,n.jsx)("div",{className:"",children:g})]})]})}let j=u.memo(function(e){let{imgSrc:t,imgAlt:l,url:a}=e;return(0,n.jsx)(c(),{src:t||"/images/preview/".concat((0,h.Z)(7),".png"),alt:null!=l?l:a,className:"rounded-[12px]",fill:!0,objectFit:"cover"})})},15230:function(e,t,l){"use strict";function getExtOfFile(e){let t,l;let n=e.lastIndexOf(".");return -1!==n?(t=e.slice(0,n),l=e.slice(n+1)):(t=e,l=""),{ext:l,name:t}}l.d(t,{N:function(){return getExtOfFile}})}},function(e){e.O(0,[2400,1866,2306,9020,1718,9273,2808,350,260,3986,5022,3954,8110,9271,9385,5623,6912,3574,2333,2838,413,5895,1396,8466,2510,3071,2863,8105,3038,5366,8838,4737,2971,2472,1744],function(){return e(e.s=59411)}),_N_E=e.O()}]);