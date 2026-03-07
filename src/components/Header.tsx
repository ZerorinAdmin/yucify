import React from "react";

const LOGO_HEIGHT = 40;

export function Header() {
  return (
    <header
      className="shrink-0 px-4 flex items-center"
      style={{
        height: "auto",
        minHeight: `${LOGO_HEIGHT}px`,
        paddingTop: "24px",
      }}
    >
      <div className="max-w-6xl mx-auto w-full flex items-center">
        <a href="#" className="flex items-center">
          <img
            src="/yutric-logo.png"
            alt="YUTRIC"
            style={{ height: `${LOGO_HEIGHT}px`, width: "auto" }}
            className="block object-contain object-left"
          />
        </a>
      </div>
    </header>
  );
}
