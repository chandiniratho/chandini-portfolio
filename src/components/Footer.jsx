import React from "react";

export default function Footer(){
  return (
    <div>
      <div style={{marginBottom:8}}>© {new Date().getFullYear()} Chandini Ratho</div>
      <div style={{fontSize:12, color:"var(--muted)"}}>Built with React • Available for frontend roles</div>
    </div>
  );
}
