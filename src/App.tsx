import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { DndContext, type DragEndEvent, MouseSensor, useSensor, useSensors } from '@dnd-kit/core';
import Canvas from './components/Canvas';
import ComponentPanel from './components/ComponentPanel';
import DraggableComponent from './components/DraggableComponent';
import { type CanvasComponent } from './types';
import './index.css';

function App() {
  const [components, setComponents] = useState<CanvasComponent[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const sensors = useSensors(useSensor(MouseSensor, { activationConstraint: { distance: 5 } }));

  const addComponent = (type: CanvasComponent['type']) => {
    const newComponent: CanvasComponent = {
      id: uuidv4(),
      type,
      x: 50,
      y: 50,
      width: type === 'line' ? 100 : 100,
      height: type === 'line' ? 2 : 50,
      color: '#000000',
      opacity: 1,
      ...(type === 'label' && { text: 'New Label', fontSize: 16, fontFamily: 'Arial' }),
    };
    setComponents([...components, newComponent]);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, delta } = event;
    const componentId = active.id;
    setComponents((prev) =>
      prev.map((comp) =>
        comp.id === componentId
          ? { ...comp, x: comp.x + delta.x, y: comp.y + delta.y }
          : comp
      )
    );
  };

  const handleSelect = (id: string) => {
    setSelectedId(id);
  };

  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
      <div className="flex h-screen">
        <div className="w-1/4 bg-gray-100 p-4">
          <ComponentPanel addComponent={addComponent} />
        </div>
        <div className="flex-1 bg-gray-200 flex items-center justify-center">
          <Canvas>
            {components.map((comp) => (
              <DraggableComponent
                key={comp.id}
                component={comp}
                isSelected={selectedId === comp.id}
                onSelect={() => handleSelect(comp.id)}
              />
            ))}
          </Canvas>
        </div>
        <div className="w-1/4 bg-gray-100 p-4">Properties Panel</div>
      </div>
    </DndContext>
  );
}

export default App;