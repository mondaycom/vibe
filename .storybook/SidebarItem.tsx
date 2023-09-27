import React from "react";
import StatusTag from "./StatusTag";

export default function SidebarItem({ children, status }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", flex: 1, marginRight: "16px" }}>
      {children}
      <StatusTag type={status} />
    </div>
  );
}
