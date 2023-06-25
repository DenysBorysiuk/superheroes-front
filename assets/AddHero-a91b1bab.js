import{n as a,a as f,c as g,r as b,j as e,L as j,d as w,e as y}from"./index-aba5b5ec.js";import{u as _,b as v}from"./selectors-4131a8f5.js";import{F as k,a as F,E as L,b as S,s as E}from"./schema-a689c3ef.js";const H=a.div`
  margin: 0 auto;
  max-width: 458px;
  padding: 20px;

  background-color: #ffffff;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 40px;

  > h1 {
    margin-bottom: 20px;
  }
`,I=a(k)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
`,s=a.label`
  position: relative;
  width: 100%;
  text-align: left;
`,i=a(F)`
  width: 100%;
  padding: 9px 15px;
  outline: none;
  border-radius: 40px;
  border: 1px solid #5735a3;
`,R=a.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  > input::file-selector-button {
    padding: 10px 20px;
    outline: none;
    border-radius: 10px;
    border: none;
    background-color: rgba(87, 53, 163, 0.7);
    color: #ebd8ff;
    cursor: pointer;
  }
`,z=a.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  > img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 10px;
  }
`,A=a.div`
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
`,p=a(L)`
  position: absolute;
  bottom: -15px;
  left: 20px;
  font-size: 12px;
  font-weight: 400;
  line-height: calc(16 / 12);
  color: #f43f5e;
`,C={nickname:"",real_name:"",origin_description:"",superpowers:"",catch_phrase:""},D=()=>{const l=_(),d=f(v),x=g(),[c,m]=b.useState([]),u=c.map(n=>URL.createObjectURL(n)),h=async(n,{resetForm:r})=>{const t=new FormData;t.append("nickname",n.nickname.trim()),t.append("real_name",n.real_name.trim()),t.append("origin_description",n.origin_description.trim()),t.append("superpowers",n.superpowers.trim()),t.append("catch_phrase",n.catch_phrase.trim()),c.forEach(o=>t.append("images",o)),l(w(t)).then(o=>{if(!o.error){x("/"),r(),y.success("Hero created");return}}).catch(o=>console.log(o))};return e.jsx(S,{initialValues:C,validationSchema:E,onSubmit:h,children:e.jsxs(H,{children:[e.jsx("h1",{children:"Add superhero"}),e.jsxs(I,{children:[e.jsxs(s,{children:["Nickname",e.jsx(i,{type:"text",name:"nickname"}),e.jsx(p,{name:"nickname",component:"div"})]}),e.jsxs(s,{children:["Real name",e.jsx(i,{type:"text",name:"real_name"}),e.jsx(p,{name:"real_name",component:"div"})]}),e.jsxs(s,{children:["Origin description",e.jsx(i,{type:"text",name:"origin_description"}),e.jsx(p,{name:"origin_description",component:"div"})]}),e.jsxs(s,{children:["Superpowers",e.jsx(i,{type:"text",name:"superpowers"}),e.jsx(p,{name:"superpowers",component:"div"})]}),e.jsxs(s,{children:["Catch phrase",e.jsx(i,{type:"text",name:"catch_phrase"}),e.jsx(p,{name:"catch_phrase",component:"div"})]}),e.jsxs(R,{children:[e.jsx("span",{children:"Upload images"}),e.jsx("input",{type:"file",accept:"image/*",multiple:!0,onChange:n=>{const r=n.target.files;if(r.length>5){alert("Only 5 files are allowed to upload."),n.target.value=null;return}if(r){const t=[...r];m(t)}}})]}),e.jsx(z,{children:u.map((n,r)=>{const t=c[r].name;return e.jsx("img",{src:n,alt:t},r)})}),e.jsxs(A,{children:[e.jsx(j,{to:"/",children:"Cancel"}),e.jsx("button",{type:"submit",disabled:d,children:"Submit"})]})]})]})})},M=()=>e.jsx(D,{});export{M as default};
