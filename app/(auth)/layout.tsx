import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>Flat 20% Off</div>
      {children}
    </>
  );
}

export default layout;
