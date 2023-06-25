import{n as l,R as m,c as C,r as y,j as t,L as E,g as H,h as N,e as v,i as q,a as D}from"./index-aba5b5ec.js";import{F,a as L,E as P,b as T,s as M}from"./schema-a689c3ef.js";import{P as p}from"./index-11d6c2c6.js";import{u as V,s as A}from"./selectors-4131a8f5.js";const B=l.div`
  position: relative;
  margin: 0 auto;
  max-width: 700px;
  padding: 50px 20px 20px 20px;

  background-color: #ffffff;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 40px;

  > h1 {
    margin-bottom: 20px;
  }
`,W=l(F)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
`,h=l.label`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;

  > span {
    display: flex;
    justify-content: flex-start;
    width: 30%;
    font-weight: 500;
  }

  > input::file-selector-button {
    padding: 10px 20px;
    outline: none;
    border-radius: 10px;
    border: none;
    background-color: rgba(87, 53, 163, 0.7);
    color: #ebd8ff;
    cursor: pointer;
  }
`,f=l(L)`
  border: none;
  outline: none;
  border-bottom: 1px solid #5735a3;
  width: 50%;
  height: 40px;
`,U=l.input`
  width: 50%;
`,G=l.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`,w=l.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 10px;
`,J=l.div`
  display: flex;
  justify-content: space-evenly;
  gap: 20px;

  > a {
    padding: 10px 20px;
    border-radius: 10px;
    text-decoration: none;
    color: #373737;
    font-weight: 500;
    font-size: 18px;
    line-height: calc(22 / 18);
    text-transform: uppercase;
    cursor: pointer;
    will-change: transform;
    transition: transform 300ms ease-in-out;

    &:hover,
    &:focus {
      transform: scale(1.05);
    }
  }

  > button {
    padding: 10px 20px;
    border-radius: 10px;
    font-weight: 500;
    font-size: 18px;
    line-height: calc(22 / 18);
    text-transform: uppercase;
    color: #ebd8ff;
    background-color: #5735a3;
    outline: none;
    border: none;
    cursor: pointer;
    will-change: transform;
    transition: transform 300ms ease-in-out;

    &:hover,
    &:focus {
      transform: scale(1.05);
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }
`,g=l(P)`
  position: absolute;
  bottom: -15px;
  right: 250px;
  font-size: 12px;
  font-weight: 400;
  line-height: calc(16 / 12);
  color: #f43f5e;
`,$=l.button`
  position: absolute;
  top: 10px;
  right: 20px;
  width: 50px;
  height: 50px;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  transition: transform 300ms ease-in-out;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`,K=l.button`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  transition: transform 300ms ease-in-out;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;var O={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},_=m.createContext&&m.createContext(O),d=globalThis&&globalThis.__assign||function(){return d=Object.assign||function(e){for(var a,n=1,s=arguments.length;n<s;n++){a=arguments[n];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e},d.apply(this,arguments)},Q=globalThis&&globalThis.__rest||function(e,a){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&a.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(e);i<s.length;i++)a.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(e,s[i])&&(n[s[i]]=e[s[i]]);return n};function z(e){return e&&e.map(function(a,n){return m.createElement(a.tag,d({key:n},a.attr),z(a.child))})}function X(e){return function(a){return m.createElement(Y,d({attr:d({},e.attr)},a),z(e.child))}}function Y(e){var a=function(n){var s=e.attr,i=e.size,x=e.title,j=Q(e,["attr","size","title"]),b=i||n.size||"1em",u;return n.className&&(u=n.className),e.className&&(u=(u?u+" ":"")+e.className),m.createElement("svg",d({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,s,j,{className:u,style:d(d({color:e.color||n.color},n.style),e.style),height:b,width:b,xmlns:"http://www.w3.org/2000/svg"}),x&&m.createElement("title",null,x),e.children)};return _!==void 0?m.createElement(_.Consumer,null,function(n){return a(n)}):a(O)}function k(e){return X({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"}}]})(e)}const R=({hero:e})=>{const a=V(),n=C(),[s,i]=y.useState([]),[x,j]=y.useState(e.images),b=s.map(r=>URL.createObjectURL(r)),u=()=>{a(H(e._id)).then(r=>{if(!r.error){n("/");return}}).catch(r=>console.log(r))},I=r=>{const o=new FormData;o.append("nickname",r.nickname.trim()),o.append("real_name",r.real_name.trim()),o.append("origin_description",r.origin_description.trim()),o.append("superpowers",r.superpowers.trim()),o.append("catch_phrase",r.catch_phrase.trim()),o.append("images",JSON.stringify(x)),s.forEach(c=>o.append("files",c)),a(N([e._id,o])).then(c=>{if(!c.error){v.success("Hero updated");return}}).catch(c=>v.error(c))},S=r=>{j(o=>o.filter(c=>c!==r))};return t.jsx(T,{initialValues:{nickname:e.nickname,real_name:e.real_name,origin_description:e.origin_description,superpowers:e.superpowers,catch_phrase:e.catch_phrase},validationSchema:M,onSubmit:I,children:t.jsxs(B,{children:[t.jsx($,{type:"button",onClick:u,children:t.jsx(k,{size:20,color:"red"})}),t.jsxs(W,{children:[t.jsxs(h,{children:[t.jsx("span",{children:"Nickname:"}),t.jsx(f,{type:"text",name:"nickname"}),t.jsx(g,{name:"nickname",component:"div"})]}),t.jsxs(h,{children:[t.jsx("span",{children:"Real name:"}),t.jsx(f,{type:"text",name:"real_name"}),t.jsx(g,{name:"real_name",component:"div"})]}),t.jsxs(h,{children:[t.jsx("span",{children:"Origin description:"}),t.jsx(f,{type:"text",name:"origin_description"}),t.jsx(g,{name:"origin_description",component:"div"})]}),t.jsxs(h,{children:[t.jsx("span",{children:"Superpowers:"}),t.jsx(f,{type:"text",name:"superpowers"}),t.jsx(g,{name:"superpowers",component:"div"})]}),t.jsxs(h,{children:[t.jsx("span",{children:"Catch phrase:"}),t.jsx(f,{type:"text",name:"catch_phrase"}),t.jsx(g,{name:"catch_phrase",component:"div"})]}),t.jsxs(h,{children:[t.jsx("span",{children:"Upload images"}),t.jsx(U,{type:"file",accept:"image/*",multiple:!0,onChange:r=>{const o=r.target.files;if(o.length>5){alert("Only 5 files are allowed to upload."),r.target.value=null;return}if(o){const c=[...o];i(c)}}})]}),t.jsxs(G,{children:[x.map(r=>t.jsxs("div",{children:[t.jsx(w,{src:`https://superheroes-f2qf.onrender.com/${r}`,alt:r}),t.jsx(K,{type:"button",onClick:()=>S(r),children:t.jsx(k,{color:"red"})})]},r)),b.map((r,o)=>{const c=s[o].name;return t.jsx(w,{src:r,alt:c},o)})]}),t.jsxs(J,{children:[t.jsx(E,{to:"/",children:"Cancel"}),t.jsx("button",{type:"submit",children:"Save"})]})]})]})})};R.propTypes={hero:p.shape({_id:p.string.isRequired,nickname:p.string.isRequired,real_name:p.string.isRequired,origin_description:p.string.isRequired,superpowers:p.string.isRequired,catch_phrase:p.string.isRequired,images:p.arrayOf(p.string.isRequired).isRequired})};const ne=()=>{const{heroId:e}=q(),n=D(A).find(s=>s._id===e);return t.jsx(R,{hero:n})};export{ne as default};
