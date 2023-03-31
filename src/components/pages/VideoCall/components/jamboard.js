import React, { useRef, useEffect, useState } from 'react';

const Jamboard = () => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [brushColor, setBrushColor] = useState("black");
  const [brushSize, setBrushSize] = useState(2);
  const [isErasing, setIsErasing] = useState(false);
  const [savedDrawing, setSavedDrawing] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    const context = canvas.getContext("2d");
    context.scale(2, 2);
    context.lineCap = "round";
    context.strokeStyle = brushColor;
    context.lineWidth = brushSize;
    contextRef.current = context;
  }, []);

  useEffect(() => {
    contextRef.current.strokeStyle = brushColor;
  }, [brushColor]);

  useEffect(() => {
    const savedDrawing = localStorage.getItem('savedDrawing');
    if (savedDrawing) {
      const image = new Image();
      image.src = savedDrawing;
      image.onload = () => {
        contextRef.current.drawImage(image, 0, 0);
      };
    }
  }, []);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const stopDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
    setSavedDrawing(canvasRef.current.toDataURL());
    localStorage.setItem('savedDrawing', canvasRef.current.toDataURL());
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    if (isErasing) {
      contextRef.current.globalCompositeOperation = "destination-out";
      contextRef.current.lineWidth = brushSize + 2;
    } else {
      contextRef.current.globalCompositeOperation = 'source-over';
      contextRef.current.lineWidth = brushSize;
    }
    contextRef.current.stroke();
  };

  const clearCanvas = () => {
    contextRef.current.clearRect(0, 0, window.innerWidth * 2, window.innerHeight * 2);
    setSavedDrawing(null);
    localStorage.removeItem('savedDrawing');
  };

  const saveDrawing = () => {
    const link = document.createElement('a');
    link.download = 'drawing.png';
    link.href = savedDrawing;
    link.click();
  };

  return (
    <div>
      <div>
        <button onClick={clearCanvas} color="red">Clear</button>
        <input type="color" value={brushColor} onChange={(e) => setBrushColor(e.target.value)} />
        <select value={brushSize} onChange={(e) => setBrushSize(parseInt(e.target.value))}>
          <option value={5}>Small</option>
          <option value={10}>Medium</option>
          <option value={15}>Large</option>
        </select>
        <button onClick={() => setIsErasing(!isErasing)}>Eraser</button>
        {savedDrawing && (
          <button onClick={saveDrawing}>Save</button>
        )}
      </div>

      <canvas
        onMouseDown={startDrawing}
        onMouseUp={stopDrawing}
        onMouseMove={draw}
        ref={canvasRef}
      />
    </div>
  );
};

export default Jamboard;