"use strict";(self.webpackChunk_streamlit_app=self.webpackChunk_streamlit_app||[]).push([[8427],{18427:(e,t,o)=>{o.r(t),o.d(t,{default:()=>m});var i=o(66845),r=o(25621),s=o(69021),a=o(27466),n=o(63730),d=o(59033),l=o(36989),c=o(1515);const p=(0,c.Z)("button",{target:"elibz2u3"})((e=>{let{theme:t}=e;return{fontSize:t.fontSizes.sm,lineHeight:"1.4rem",color:t.colors.fadedText60,backgroundColor:t.colors.transparent,border:"none",boxShadow:"none",padding:"0px","&:hover, &:active, &:focus":{border:"none",outline:"none",boxShadow:"none"},"&:hover":{color:t.colors.primary}}}),""),u=(0,c.Z)("div",{target:"elibz2u2"})((e=>{let{theme:t}=e;return{display:"flex",flexDirection:"row",gap:t.spacing.lg,"> span":{marginTop:"0.25rem"}}}),""),g=(0,c.Z)("div",{target:"elibz2u0"})((e=>{let{theme:t}=e;return{display:"flex",flexDirection:"column",gap:t.spacing.sm,alignItems:"start",justifyContent:"center",overflow:"hidden",minHeight:"100%",fontSize:t.fontSizes.sm,lineHeight:t.lineHeights.base}}),"");var f=o(22704),h=o(40864);const m=(0,r.b)((function(e){let{theme:t,body:o,icon:r,width:c}=e;const m=function(e){if(e.length>104){let t=e.replace(/^(.{104}[^\s]*).*/,"$1");return t.length>104&&(t=t.substring(0,104).split(" ").slice(0,-1).join(" ")),t.trim()}return e}(o),b=o!==m,[x,w]=(0,i.useState)(!b),[y,v]=(0,i.useState)(0),S=(0,i.useCallback)((()=>{w(!x)}),[x]),T=(0,i.useMemo)((()=>function(e){const t=(0,a.Iy)(e);return{Body:{props:{"data-testid":"stToast"},style:{display:"flex",flexDirection:"row",gap:e.spacing.md,width:e.sizes.sidebar,marginTop:"8px",borderTopLeftRadius:e.radii.default,borderTopRightRadius:e.radii.default,borderBottomLeftRadius:e.radii.default,borderBottomRightRadius:e.radii.default,paddingTop:e.spacing.lg,paddingBottom:e.spacing.lg,paddingLeft:e.spacing.twoXL,paddingRight:e.spacing.twoXL,backgroundColor:t?e.colors.gray10:e.colors.gray90,color:e.colors.bodyText,boxShadow:t?"0px 4px 16px rgba(0, 0, 0, 0.16)":"0px 4px 16px rgba(0, 0, 0, 0.7)"}},CloseIcon:{style:{color:e.colors.fadedText40,width:e.fontSizes.lg,height:e.fontSizes.lg,marginRight:"calc(-1 * ".concat(e.spacing.lg," / 2)"),":hover":{color:e.colors.bodyText}}}}}(t)),[t]),z=(0,i.useMemo)((()=>(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(u,{expanded:x,children:[r&&(0,h.jsx)(f.p,{iconValue:r,size:"xl",testid:"stToastDynamicIcon"}),(0,h.jsxs)(g,{children:[(0,h.jsx)(n.ZP,{source:x?o:m,allowHTML:!1,isToast:!0}),b&&(0,h.jsx)(p,{"data-testid":"toastViewButton",className:"toastViewButton",onClick:S,children:x?"view less":"view more"})]})]})})),[b,x,o,r,m,S]);(0,i.useEffect)((()=>{if(t.inSidebar)return;const e=s.Z.info(z,{overrides:{...T}});return v(e),()=>{s.Z.update(e,{overrides:{Body:{style:{transitionDuration:0}}}}),s.Z.clear(e)}}),[]),(0,i.useEffect)((()=>{s.Z.update(y,{children:z,overrides:{...T}})}),[y,z,T]);const R=(0,h.jsx)(l.Z,{kind:d.h.ERROR,body:"Streamlit API Error: `st.toast` cannot be called directly on the sidebar with `st.sidebar.toast`. See our `st.toast` API [docs](https://docs.streamlit.io/develop/api-reference/status/st.toast) for more information.",width:c});return(0,h.jsx)(h.Fragment,{children:t.inSidebar&&R})}))}}]);