(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5287],{70172:function(e,s,l){Promise.resolve().then(l.bind(l,60603))},75826:function(e,s,l){"use strict";var t=l(92173),a=l(99110),i=l(99231),n=l.n(i);let c=new a.Z,d=t.Z.create({baseURL:"http://localhost:8000/api"});d.interceptors.request.use(e=>{let s=c.get("authToken");return n()(s)||(e.headers.Authorization="Bearer ".concat(s)),e},e=>Promise.reject(e)),d.interceptors.response.use(e=>e.data,e=>e.response?Promise.reject({status:e.response.status,data:e.response.data}):Promise.reject(e.request?e.request:e.message)),s.Z=d},60603:function(e,s,l){"use strict";l.r(s),l.d(s,{default:function(){return Profile}});var t=l(57437),a=l(2265),i=l(9547),n=l(91492),c=l(60077),d=l(35302),r=l(54637),x=l(2114),o=l(80568),m=l(16691),h=l.n(m),f=l(75826),u=l(99110),p=l(74548),g=l.n(p);l(93330);var j=l(24033);let{Paragraph:N}=d.default,b=new u.Z;function Profile(){let e=(0,j.useSearchParams)(),s=e.get("studentid")||"";console.log({studentid:s});let[l,d]=(0,a.useState)("Ho\xe0ng Minh Th\xe1i"),[m,u]=(0,a.useState)("2003-01-13"),[p,v]=(0,a.useState)("21020034"),[y,w]=(0,a.useState)("amogus"),[P,S]=(0,a.useState)(!1),[Z,k]=(0,a.useState)(!0),[C,B]=(0,a.useState)(!0),[E,F]=(0,a.useState)(!0),[D,I]=(0,a.useState)(!1),[M,U]=(0,a.useState)([]),_=(0,j.useRouter)();var A=70;let T=b.get("studentid"),[z,G]=(0,a.useState)(""),[H,R]=(0,a.useState)(null);(0,a.useEffect)(()=>{console.log(s),s!=T&&I(!0),console.log(D),f.Z.get("/users/"+s).then(e=>{G(e.avatar),v(e.studentId),d(e.name),u(e.date),w(e.bio)}).catch(e=>{401==e.response.status?_.push("/signin"):e.response.status}),f.Z.get("/document/getMyDocumentByStudentId",{params:{studentId:s}}).then(e=>{console.log(e),U(e)}).catch(e=>{})},[s,T,D,_]);let handleFinishEditName=e=>{d(e),f.Z.put("/users/",{name:e,avatar:z,birth:m}).then(e=>{console.log(e)}).catch(e=>{}),console.log(e)},handleFinishEditBio=e=>{w(e),f.Z.post("/users/changeBio",{bio:e}).then(e=>{console.log(e)}).catch(e=>{}),console.log(e)};return(0,t.jsxs)("main",{className:"bg-slate-100 p-6",children:[(0,t.jsx)("div",{className:"text-3xl text-black font-bold ml-5",children:"Profile"}),(0,t.jsxs)("div",{className:"flex",children:[(0,t.jsxs)("div",{className:"m-4 bg-white border rounded-2xl shadow-lg w-full",children:[D?(0,t.jsxs)("div",{className:"flex p-12 gap-[100px]",children:[(0,t.jsx)("div",{children:(0,t.jsx)(x.ZP,{src:z,className:"",alt:"Profile Pic",size:100})}),(0,t.jsxs)("div",{className:"flex-col",children:[(0,t.jsx)("label",{className:"font-light text-gray-500",children:"Họ v\xe0 t\xean"}),(0,t.jsx)(N,{className:"font-semibold text-lg pt-3",children:l})]}),(0,t.jsxs)("div",{className:"flex-col",children:[(0,t.jsx)("label",{className:"font-light text-gray-500",children:"Ng\xe0y sinh"}),(0,t.jsx)(N,{className:"font-semibold text-lg pt-3",children:m})]}),(0,t.jsxs)("div",{className:"flex-col",children:[(0,t.jsx)("label",{className:"font-light text-gray-500",children:"M\xe3 số sinh vi\xean"}),(0,t.jsx)(N,{className:"font-semibold text-lg pt-3",children:p})]})]}):(0,t.jsxs)("div",{className:"flex",children:[(0,t.jsx)("div",{className:"p-12",children:(0,t.jsx)(x.ZP,{src:z,className:"",alt:"Profile Pic",size:100})}),(0,t.jsxs)("div",{className:"flex flex-col my-10 mr-10",children:[(0,t.jsxs)("div",{className:"flex mt-8",children:[(0,t.jsx)("input",{type:"file",accept:"image/*",onChange:e=>{var s;let l=null===(s=e.target.files)||void 0===s?void 0:s[0];l?R(l):R(null)},className:"w-full text-sm text-slate-500   file:mr-4 file:py-2 file:px-4   file:rounded-full file:border-0   file:text-sm file:font-semibold   file:bg-primary file:text-white   hover:file:bg-dark-primary   "}),(0,t.jsx)("button",{className:"text-sm border py-2 px-4 rounded-full font-semibold hover:shadow-lg",onClick:()=>{if(H){let e=H.name.split(".").pop();if(e&&["jpg","jpeg","png"].includes(e)){let e=new FileReader;e.onload=e=>{if(e.target){let s=e.target.result;G(s),P||(A+=20),S(!0)}},e.readAsDataURL(H);let s=new FormData;s.append("up",H),f.Z.post("/users/changeAvatar",s,{headers:{"Content-Type":"multipart/form-data"}}).then(e=>{console.log(e)}).catch(e=>{})}else alert("Vui l\xf2ng upload ảnh bằng JPG hoặc PNG.")}},children:"Upload"})]}),(0,t.jsx)("text",{className:"text-lg py-4",children:"Upload ảnh đại diện mới bằng JPG hoặc PNG"})]})]}),(0,t.jsxs)("div",{className:"w-full border-t-2 flex flex-col items-center p-10",children:[!D&&(0,t.jsxs)("div",{className:"w-full bg-white border rounded-2xl hover:shadow hover:bg-gray-100",children:[(0,t.jsx)("div",{className:"flex p-6 justify-between",children:(0,t.jsx)("text",{className:"font-bold text-2xl",children:"Th\xf4ng tin c\xe1 nh\xe2n"})}),(0,t.jsxs)("div",{className:"flex gap-[120px] px-6 pb-6",children:[(0,t.jsxs)("div",{className:"flex-col",children:[(0,t.jsx)("label",{className:"font-light text-gray-500",children:"Họ v\xe0 t\xean"}),(0,t.jsx)(N,{className:"font-semibold text-lg pt-3",editable:{onChange:e=>{handleFinishEditName(e)}},children:l})]}),(0,t.jsxs)("div",{className:"flex-col",children:[(0,t.jsx)("label",{className:"font-light text-gray-500",children:"Ng\xe0y sinh"}),(0,t.jsx)("p",{className:"p-1"}),(0,t.jsx)(o.default,{className:"font-semibold text-lg",onChange:(e,s)=>{u(s),f.Z.put("/users/",{name:l,avatar:z,birth:s}).then(e=>{console.log(e)}).catch(e=>{}),console.log(s)},value:g()(m,"YYYY-MM-DD")})]}),(0,t.jsxs)("div",{className:"flex-col",children:[(0,t.jsx)("div",{className:"font-light text-gray-500",children:"M\xe3 số sinh vi\xean"}),(0,t.jsx)(N,{className:"font-semibold text-lg pt-3",children:p})]})]})]}),(0,t.jsxs)("div",{className:"w-full bg-white border rounded-2xl hover:shadow hover:bg-gray-100 m-10",children:[(0,t.jsx)("div",{className:"flex p-6 justify-between",children:(0,t.jsx)("div",{className:"font-bold text-2xl",children:"Bio"})}),D?(0,t.jsx)(N,{className:" px-6 pb-6 text-xl font-semibold pt-3",children:y}):(0,t.jsx)(N,{className:" px-6 pb-6 text-xl font-semibold pt-3",editable:{onChange:e=>{handleFinishEditBio(e)}},children:y})]}),(0,t.jsxs)("div",{className:"w-full bg-white border rounded-2xl hover:shadow hover:bg-gray-100 p-6",children:[(0,t.jsx)("div",{className:"font-bold text-2xl mb-4",children:"T\xe0i liệu"}),(0,t.jsx)("div",{children:M.map(e=>(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"border hover:bg-gray-100 hover:shadow bg-white p-6 m-4 flex",children:[(0,t.jsx)(h(),{src:e.link,height:100,width:100,alt:"Document Image",className:"mr-5"}),(0,t.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,t.jsx)("p",{className:"text-blue-400 text-2xl",children:e.name}),(0,t.jsx)("div",{className:"flex gap-10",children:(0,t.jsxs)("div",{className:"flex",children:[(0,t.jsx)("p",{children:e.like}),(0,t.jsx)(i.Z,{})]})})]})]})}))})]})]})]}),(0,t.jsxs)("div",{className:"m-4 bg-white border rounded-2xl shadow-lg flex flex-col p-6 gap-3 max-h-full",children:[(0,t.jsx)("text",{className:"font-bold text-xl",children:"Ho\xe0n th\xe0nh profile"}),(0,t.jsx)(r.default,{type:"circle",percent:A,strokeColor:"#1dc14e",strokeWidth:10,size:200}),Z?(0,t.jsxs)("div",{className:"flex gap-2",children:[(0,t.jsx)(n.default,{}),(0,t.jsx)("p",{className:"font-medium text-sm",children:"Setup Account"}),(0,t.jsx)("p",{className:"font-medium text-gray-400 text-sm",children:"20%"})]}):(0,t.jsxs)("div",{className:"flex gap-2",children:[(0,t.jsx)(c.default,{}),(0,t.jsx)("p",{className:"font-medium text-gray-400 text-sm",children:"Setup Account"}),(0,t.jsx)("p",{className:"text-green-400 font-semibold text-sm",children:"20%"})]}),P?(0,t.jsxs)("div",{className:"flex gap-2",children:[(0,t.jsx)(n.default,{}),(0,t.jsx)("p",{className:"font-medium text-sm",children:"Upload your photo"}),(0,t.jsx)("p",{className:"font-medium text-gray-400 text-sm",children:"30%"})]}):(0,t.jsxs)("div",{className:"flex gap-2",children:[(0,t.jsx)(c.default,{}),(0,t.jsx)("p",{className:"font-medium text-gray-400 text-sm",children:"Upload your photo"}),(0,t.jsx)("p",{className:"text-green-400 font-semibold text-sm",children:"30%"})]}),C?(0,t.jsxs)("div",{className:"flex gap-2",children:[(0,t.jsx)(n.default,{}),(0,t.jsx)("p",{className:"font-medium text-sm",children:"Personal Info"}),(0,t.jsx)("p",{className:"font-medium text-gray-400 text-sm",children:"30%"})]}):(0,t.jsxs)("div",{className:"flex gap-2",children:[(0,t.jsx)(c.default,{}),(0,t.jsx)("p",{className:"font-medium text-gray-400 text-sm",children:"Personal Info"}),(0,t.jsx)("p",{className:"text-green-400 font-semibold text-sm",children:"30%"})]}),E?(0,t.jsxs)("div",{className:"flex gap-2",children:[(0,t.jsx)(n.default,{}),(0,t.jsx)("p",{className:"font-medium text-sm",children:"Biography"}),(0,t.jsx)("p",{className:"font-medium text-gray-400 text-sm",children:"20%"})]}):(0,t.jsxs)("div",{className:"flex gap-2",children:[(0,t.jsx)(c.default,{}),(0,t.jsx)("p",{className:"font-medium text-gray-400 text-sm",children:"Biography"}),(0,t.jsx)("p",{className:"text-green-400 font-semibold text-sm",children:"20%"})]})]})]})]})}}},function(e){e.O(0,[9020,1718,9273,2808,350,260,8110,413,4343,3524,2971,2472,1744],function(){return e(e.s=70172)}),_N_E=e.O()}]);