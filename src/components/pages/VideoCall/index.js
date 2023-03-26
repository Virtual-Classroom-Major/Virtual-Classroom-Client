// for students

import Peer from "peerjs";
import { useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Jamboard from './components/jamboard';

const PEER_ID = "833e645f-e7b8-4189-8e1f-5394412b4c55";
export default function VideoCall() {
  const [peerId, setPeerId] = useState("");
  const [callId, setCallId] = useState("");
  const [mediaStreamData, setMediaStreamData] = useState(null);

  const currentUserVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const peerInstance = useRef(null);
  const { id } = useParams();

  const App = () => {
    const [showJamboard, setShowJamboard] = useState(false);
  
    const handleShowJamboard = () => {
      setShowJamboard(true);
    };
  
    return (
      <div>
        <button onClick={handleShowJamboard}>Jamboard</button>
        {showJamboard && <Jamboard />}
      </div>
    );
  };
  
  useEffect(() => {
    setCallId(id);
    var peer = new Peer();
    console.log("peer:", peer);

    peer.on("open", function (id) {
      console.log("this is my id:", id);
      setPeerId(id);
    });

    peer.on("call", function (call) {
      var getUserMedia =
        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia;

      getUserMedia(
        { video: true, audio: true },
        function (stream) {
          call.answer(stream);
        },
        function (err) {
          console.log("error message : ", err);
        }
      );
    });
    peerInstance.current = peer;
    initiateCall(callId);
  }, [id]);

  const initiateCall = (contactId) => {
    var getUserMedia =
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia;

    getUserMedia(
      { video: true, audio: true },
      function (stream) {
        currentUserVideoRef.current.srcObject = stream;
        currentUserVideoRef.current.play();
        var call = peerInstance.current.call(contactId, stream);
        call.on("stream", function (remoteStream) {
          console.log(remoteStream);
          remoteVideoRef.current.srcObject = remoteStream;
          remoteVideoRef.current.play();
        });
      },
      function (err) {
        console.log("error message : ", err);
      }
    );
  };
  return (
    <Box
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#e4c198",
        backgroundImage: `url('${process.env.PUBLIC_URL}/classroom.png')`,
        backgroundSize: "100vw 100vh",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Jamboard/>
      <video
        style={{
          marginTop: "25vh",
          marginBottom: "auto",
          marginRight:"8vw",
          width: "30vw",
          borderRadius: "10px",
          boxShadow: "0 0 20px 2px gray",
        }}
        ref={remoteVideoRef}
      />
      <Box
        style={{
          width: "100vw",
          height: "16vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      >
        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
        <img
          src={`${process.env.PUBLIC_URL}/youtube.png`}
          alt="YouTube"
          style={{
            width: "3rem",
            height: "3rem",
            margin: "0 2rem",
          }}
        />
      </a>
        <video
          style={{ width: "15vh", height: "15vh", borderRadius: "10px" }}
          ref={currentUserVideoRef}
        ></video>
      </Box>
    </Box>
  );
}
