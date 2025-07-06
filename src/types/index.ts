export interface CanvasComponent {
  id: string;
  type: 'label' | 'rectangle' | 'oval' | 'line';
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
  opacity: number;
  text?: string;
  fontSize?: number;
  fontFamily?: string;
  imageSrc?: string;
}