import{c as x,e as u,v as g,a as _}from"./use-translate.c431c781.js";import{w as C}from"./with-install.6654422d.js";import{C as S}from"./index.c58eb23d.js";import{F as B}from"./index.2f4c869f.js";import{F as b}from"./index.28a2de14.js";import{B as j}from"./index.f77b2820.js";import{S as D}from"./index.0fb18d07.js";import{z as v,G as w,x as E,e as a,C as y,r as V,o as k,c as F,w as T,A as d}from"./vue-libs.cab43f37.js";import{T as h}from"./function-call.c0e76344.js";import"./use-route.1ad21ca2.js";import"./index.73431c4d.js";import"./constant.80c6de18.js";import"./use-expose.cd1f8e82.js";import"./use-id.af5595af.js";import"./index.7c2cb6fe.js";import"./mount-component.3889b323.js";import"./index.949f0f09.js";import"./interceptor.17973404.js";import"./use-touch.0cf4a6e6.js";import"./use-lazy-render.c492e2a8.js";import"./on-popup-reopen.6de6ab9a.js";import"./index.c2bf76af.js";const[A,s,n]=x("contact-edit"),m={tel:"",name:""},L={isEdit:Boolean,isSaving:Boolean,isDeleting:Boolean,showSetDefault:Boolean,setDefaultLabel:String,contactInfo:{type:Object,default:()=>u({},m)},telValidator:{type:Function,default:g}};var U=v({name:A,props:L,emits:["save","delete","change-default"],setup(t,{emit:l}){const e=w(u({},m,t.contactInfo)),i=()=>{t.isSaving||l("save",e)},c=()=>l("delete",e),f=()=>a("div",{class:s("buttons")},[a(j,{block:!0,round:!0,type:"danger",text:n("save"),class:s("button"),loading:t.isSaving,nativeType:"submit"},null),t.isEdit&&a(j,{block:!0,round:!0,text:n("delete"),class:s("button"),loading:t.isDeleting,onClick:c},null)]),p=()=>a(D,{modelValue:e.isDefault,"onUpdate:modelValue":o=>e.isDefault=o,size:24,onChange:o=>l("change-default",o)},null),r=()=>{if(t.showSetDefault)return a(S,{title:t.setDefaultLabel,class:s("switch-cell"),border:!1},{"right-icon":p})};return E(()=>t.contactInfo,o=>u(e,m,o)),()=>a(B,{class:s(),onSubmit:i},{default:()=>[a("div",{class:s("fields")},[a(b,{modelValue:e.name,"onUpdate:modelValue":o=>e.name=o,clearable:!0,label:n("name"),rules:[{required:!0,message:n("nameEmpty")}],maxlength:"30",placeholder:n("name")},null),a(b,{modelValue:e.tel,"onUpdate:modelValue":o=>e.tel=o,clearable:!0,type:"tel",label:n("tel"),rules:[{validator:t.telValidator,message:n("telInvalid")}],placeholder:n("tel")},null)]),r(),f()]})}});const I=C(U);const ne=v({setup(t){const l=_({"zh-CN":{defaultLabel:"\u8BBE\u4E3A\u9ED8\u8BA4\u8054\u7CFB\u4EBA"},"en-US":{defaultLabel:"Set as the default contact"}}),e=y({}),i=()=>h(l("save")),c=()=>h(l("delete"));return(f,p)=>{const r=V("demo-block");return k(),F(r,{title:d(l)("basicUsage")},{default:T(()=>[a(d(I),{"is-edit":"","show-set-default":"","contact-info":e.value,"set-default-label":d(l)("defaultLabel"),onSave:i,onDelete:c},null,8,["contact-info","set-default-label"])]),_:1},8,["title"])}}});export{ne as default};
