import React from 'react';

interface CanvasProps {
  children?: React.ReactNode;
}

const Canvas: React.FC<CanvasProps> = ({ children }) => {
  return (
    <div className="w-[595px] h-[842px] bg-white border border-gray-300 relative overflow-auto mx-auto">
      {children}
    </div>
  );
};

export default Canvas;