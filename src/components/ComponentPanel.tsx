import { type CanvasComponent } from "../types";

interface ComponentPanelProps {
  addComponent: (type: CanvasComponent["type"]) => void;
}

const ComponentPanel: React.FC<ComponentPanelProps> = ({ addComponent }) => {
  return (
    <div className="flex flex-col gap-4">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={() => addComponent("label")}
      >
        Add Label
      </button>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={() => addComponent("rectangle")}
      >
        Add Rectangle
      </button>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={() => addComponent("oval")}
      >
        Add Oval
      </button>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={() => addComponent("line")}
      >
        Add Line
      </button>
    </div>
  );
};

export default ComponentPanel;
