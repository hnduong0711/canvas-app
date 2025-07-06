import { useDraggable } from '@dnd-kit/core';
import { motion } from 'framer-motion';
import { type CanvasComponent } from '../types';

interface DraggableComponentProps {
  component: CanvasComponent;
  isSelected: boolean;
  onSelect: () => void;
}

const DraggableComponent: React.FC<DraggableComponentProps> = ({ component, isSelected, onSelect }) => {
  const { id, type, x, y, width, height, color, opacity, text, fontSize, fontFamily } = component;
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
    data: { component },
  });

  const style: React.CSSProperties = {
    position: 'absolute',
    left: transform ? x + transform.x : x,
    top: transform ? y + transform.y : y,
    width,
    height,
    backgroundColor: type !== 'line' ? color : undefined,
    border: isSelected ? '2px solid blue' : type === 'line' ? `2px solid ${color}` : '1px solid black',
    opacity,
    borderRadius: type === 'oval' ? '50%' : undefined,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'move',
    fontSize: type === 'label' ? fontSize : undefined,
    fontFamily: type === 'label' ? fontFamily : undefined,
  };

  return (
    <motion.div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      onClick={onSelect}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {type === 'label' && text}
    </motion.div>
  );
};

export default DraggableComponent;