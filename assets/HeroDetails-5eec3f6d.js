import{n as c,R as u,c as S,r as y,j as t,L as C,e as E,g as I,h as N,a as q}from"./index-23b039c9.js";import{F,a as H,E as L,b as D,s as P}from"./schema-43565549.js";import{P as p}from"./index-dd716d79.js";import{u as T,s as M}from"./selectors-66016dc0.js";const V=c.div`
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
`,A=c(F)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
`,x=c.label`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  /* gap: 40px; */

  > span {
    display: flex;
    justify-content: flex-start;
    width: 30%;
    font-weight: 500;
  }
`,f=c(H)`
  border: none;
  outline: none;
  border-bottom: 1px solid #5735a3;
  width: 50%;
  height: 40px;
`,B=c.label``,W=c.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`,v=c.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 10px;
`,U=c.div`
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
`,g=c(L)`
  position: absolute;
  bottom: -15px;
  right: 250px;
  font-size: 12px;
  font-weight: 400;
  line-height: calc(16 / 12);
  color: #f43f5e;
`,G=c.button`
  position: absolute;
  top: 10px;
  right: 20px;
  width: 50px;
  height: 50px;
  border: none;
  outline: none;
  background-color: transparent;
`;var _={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},w=u.createContext&&u.createContext(_),d=globalThis&&globalThis.__assign||function(){return d=Object.assign||function(e){for(var a,r=1,s=arguments.length;r<s;r++){a=arguments[r];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},d.apply(this,arguments)},J=globalThis&&globalThis.__rest||function(e,a){var r={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&a.indexOf(s)<0&&(r[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(e);o<s.length;o++)a.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(r[s[o]]=e[s[o]]);return r};function k(e){return e&&e.map(function(a,r){return u.createElement(a.tag,d({key:r},a.attr),k(a.child))})}function $(e){return function(a){return u.createElement(K,d({attr:d({},e.attr)},a),k(e.child))}}function K(e){var a=function(r){var s=e.attr,o=e.size,h=e.title,b=J(e,["attr","size","title"]),j=o||r.size||"1em",m;return r.className&&(m=r.className),e.className&&(m=(m?m+" ":"")+e.className),u.createElement("svg",d({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,s,b,{className:m,style:d(d({color:e.color||r.color},r.style),e.style),height:j,width:j,xmlns:"http://www.w3.org/2000/svg"}),h&&u.createElement("title",null,h),e.children)};return w!==void 0?u.createElement(w.Consumer,null,function(r){return a(r)}):a(_)}function Q(e){return $({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"}}]})(e)}const O=({hero:e})=>{const a=T(),r=S(),[s,o]=y.useState([]),[h,b]=y.useState(e.images),j=s.map(n=>URL.createObjectURL(n)),m=()=>{a(E(e._id)).then(n=>{if(!n.error){r("/");return}}).catch(n=>console.log(n))},z=n=>{const i=new FormData;i.append("nickname",n.nickname.trim()),i.append("real_name",n.real_name.trim()),i.append("origin_description",n.origin_description.trim()),i.append("superpowers",n.superpowers.trim()),i.append("catch_phrase",n.catch_phrase.trim()),i.append("images",JSON.stringify(h)),s.forEach(l=>i.append("files",l)),a(I([e._id,i])).then(l=>{if(!l.error){o([]);return}}).catch(l=>console.log(l))},R=n=>{console.log(n),b(i=>i.filter(l=>l!==n)),console.log(h)};return t.jsx(D,{initialValues:{nickname:e.nickname,real_name:e.real_name,origin_description:e.origin_description,superpowers:e.superpowers,catch_phrase:e.catch_phrase},validationSchema:P,onSubmit:z,children:t.jsxs(V,{children:[t.jsx(G,{type:"button",onClick:m,children:t.jsx(Q,{size:20,color:"red"})}),t.jsxs(A,{children:[t.jsxs(x,{children:[t.jsx("span",{children:"Nickname:"}),t.jsx(f,{type:"text",name:"nickname"}),t.jsx(g,{name:"nickname",component:"div"})]}),t.jsxs(x,{children:[t.jsx("span",{children:"Real name:"}),t.jsx(f,{type:"text",name:"real_name"}),t.jsx(g,{name:"real_name",component:"div"})]}),t.jsxs(x,{children:[t.jsx("span",{children:"Origin description:"}),t.jsx(f,{type:"text",name:"origin_description"}),t.jsx(g,{name:"origin_description",component:"div"})]}),t.jsxs(x,{children:[t.jsx("span",{children:"Superpowers:"}),t.jsx(f,{type:"text",name:"superpowers"}),t.jsx(g,{name:"superpowers",component:"div"})]}),t.jsxs(x,{children:[t.jsx("span",{children:"Catch phrase:"}),t.jsx(f,{type:"text",name:"catch_phrase"}),t.jsx(g,{name:"catch_phrase",component:"div"})]}),t.jsxs(B,{children:[t.jsx("span",{children:"Upload images"}),t.jsx("input",{type:"file",accept:"image/*",multiple:!0,onChange:n=>{const i=n.target.files;if(i.length>5){alert("Only 5 files are allowed to upload."),n.target.value=null;return}if(i){const l=[...i];o(l)}}})]}),t.jsxs(W,{children:[h.map(n=>t.jsxs("div",{children:[t.jsx(v,{src:`https://superheroes-f2qf.onrender.com/${n}`,alt:n}),t.jsx("button",{type:"button",onClick:()=>R(n),children:"del"})]},n)),j.map((n,i)=>{const l=s[i].name;return t.jsx(v,{src:n,alt:l},i)})]}),t.jsxs(U,{children:[t.jsx(C,{to:"/",children:"Cancel"}),t.jsx("button",{type:"submit",children:"Save"})]})]})]})})};O.propTypes={hero:p.shape({_id:p.string.isRequired,nickname:p.string.isRequired,real_name:p.string.isRequired,origin_description:p.string.isRequired,superpowers:p.string.isRequired,catch_phrase:p.string.isRequired,images:p.arrayOf(p.string.isRequired).isRequired})};const te=()=>{const{heroId:e}=N(),r=q(M).find(s=>s._id===e);return t.jsx(O,{hero:r})};export{te as default};
