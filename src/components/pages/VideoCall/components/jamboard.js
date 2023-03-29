// import { useState, useEffect, useRef } from 'react';

// const Jamboard = () => {
//   const canvasRef = useRef(null);
//   const contextRef = useRef(null);
//   const [isDrawing, setIsDrawing] = useState(false);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     canvas.width = window.innerWidth * 2;
//     canvas.height = window.innerHeight * 2;
//     canvas.style.width = `${window.innerWidth}px`;
//     canvas.style.height = `${window.innerHeight}px`;

//     const context = canvas.getContext('2d');
//     context.scale(2, 2);
//     context.lineCap = 'round';
//     context.strokeStyle = 'black';
//     context.lineWidth = 5;
//     contextRef.current = context;
//   }, []);

//   const startDrawing = ({ nativeEvent }) => {
//     const { offsetX, offsetY } = nativeEvent;
//     contextRef.current.beginPath();
//     contextRef.current.moveTo(offsetX, offsetY);
//     setIsDrawing(true);
//   };

//   const stopDrawing = () => {
//     contextRef.current.closePath();
//     setIsDrawing(false);
//   };

//   const draw = ({ nativeEvent }) => {
//     if (!isDrawing) {
//       return;
//     }
//     const { offsetX, offsetY } = nativeEvent;
//     contextRef.current.lineTo(offsetX, offsetY);
//     contextRef.current.stroke();
//   };

//   return (
//     <canvas

//       onMouseDown={startDrawing}
//       onMouseUp={stopDrawing}
//       onMouseMove={draw}
//       ref={canvasRef}
//     />
//   );
// };

// export default Jamboard;
import { SketchPicker } from "react-color";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import { useState, useEffect, useRef } from "react";
import { Button } from "@mui/material";
const Jamboard = ({ setJamboardOpen }) => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [brushColor, setBrushColor] = useState("black");
  const [brushSize, setBrushSize] = useState(2);
  const [isErasing, setIsErasing] = useState(false);

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

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const stopDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
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
      contextRef.current.globalCompositeOperation = "source-over";
      contextRef.current.strokeStyle = brushColor;
      contextRef.current.lineWidth = brushSize;
    }
    contextRef.current.stroke();
  };

  const clearCanvas = () => {
    contextRef.current.clearRect(
      0,
      0,
      window.innerWidth * 2,
      window.innerHeight * 2
    );
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
        borderRadius: "1vh",
        boxShadow: "0 0 100px 10px black",
      }}
    >
      <div
        style={{
          backgroundColor: "gray",
          width: "100%",
          borderTopLeftRadius: "1vh",
          borderTopRightRadius: "1vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Button
          onClick={clearCanvas}
          style={{
            marginLeft: "2vw",
            backgroundColor: "yellow",
            color: "black",
            fontWeight: "bold",
          }}
        >
          Clear
        </Button>

        <Button
          onClick={() => setIsErasing(!isErasing)}
          style={{
            marginLeft: "2vw",
            backgroundColor: "coral",
            color: "black",
            fontWeight: "bold",
          }}
        >
          Erase
        </Button>
        <div
          style={{
            width: "15vw",
            height: "4vh",
            backgroundColor: "white",
            borderRadius: "2vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            marginLeft: "2vw",
          }}
        >
          <div
            style={{
              width: "3vh",
              height: "3vh",
              borderRadius: "3vh",
              backgroundColor: "#ed0a3b",
            }}
            onClick={() => setBrushColor("#ed0a3b")}
          ></div>
          <div
            style={{
              width: "3vh",
              height: "3vh",
              borderRadius: "3vh",
              backgroundColor: "#3e9243",
            }}
            onClick={() => setBrushColor("#3e9243")}
          ></div>
          <div
            style={{
              width: "3vh",
              height: "3vh",
              borderRadius: "3vh",
              backgroundColor: "#014be9",
            }}
            onClick={() => setBrushColor("#014be9")}
          ></div>
          <div
            style={{
              width: "3vh",
              height: "3vh",
              borderRadius: "3vh",
              backgroundColor: "#413896",
            }}
            onClick={() => setBrushColor("#413896")}
          ></div>
          <div
            style={{
              width: "3vh",
              height: "3vh",
              borderRadius: "3vh",
              backgroundColor: "#e36227",
            }}
            onClick={() => setBrushColor("#e36227")}
          ></div>
          <div
            style={{
              width: "3vh",
              height: "3vh",
              borderRadius: "3vh",
              backgroundColor: "#eeb400",
            }}
            onClick={() => setBrushColor("#eeb400")}
          ></div>
          <div
            style={{
              width: "3vh",
              height: "3vh",
              borderRadius: "3vh",
              backgroundColor: "#8e2f47",
            }}
            onClick={() => setBrushColor("#8e2f47")}
          ></div>
        </div>

        <div
          style={{
            width: "10vw",
            height: "4vh",
            backgroundColor: "white",
            borderRadius: "4vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            marginLeft: "2vw",
          }}
        >
          <div
            style={{
              width: "1vh",
              height: "1vh",
              borderRadius: "2vh",
              backgroundColor: "rgb(100,100,100)",
              border: `${brushSize === 2 ? "0.5vh" : "0"} solid #22f522`,
            }}
            onClick={() => setBrushSize(2)}
          ></div>

          <div
            style={{
              width: "1.5vh",
              height: "1.5vh",
              borderRadius: "2vh",
              backgroundColor: "rgb(100,100,100)",
              border: `${brushSize === 4 ? "0.5vh" : "0"} solid #22f522`,
            }}
            onClick={() => setBrushSize(4)}
          ></div>

          <div
            style={{
              width: "2vh",
              height: "2vh",
              borderRadius: "3vh",
              backgroundColor: "rgb(100,100,100)",
              border: `${brushSize === 6 ? "0.5vh" : "0"} solid #22f522`,
            }}
            onClick={() => setBrushSize(6)}
          ></div>
          <div
            style={{
              width: "2.5vh",
              height: "2.5vh",
              borderRadius: "3vh",
              backgroundColor: "rgb(100,100,100)",
              border: `${brushSize === 8 ? "0.5vh" : "0"} solid #22f522`,
            }}
            onClick={() => setBrushSize(8)}
          ></div>
        </div>

        <Button
          variant="contained"
          onClick={() => setJamboardOpen(false)}
          style={{ marginLeft: "auto", backgroundColor: "red" }}
        >
          <CloseSharpIcon style={{ fontSize: "4vh", color: "white" }} />
        </Button>
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
