import { useState } from "react";
import "./index.css";

function App() {
  return (
    <div className="flex h-screen">
      <div className="w-1/4 bg-gray-100 p-4">Component Panel</div>
      <div className="flex-1 bg-gray-200">Canvas</div>
      <div className="w-1/4 bg-gray-100 p-4">Properties Panel</div>
    </div>
  );
}

export default App;