// for students

import Peer from "peerjs";
import { useEffect, useRef, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useParams } from "react-router-dom";
import GestureSharpIcon from "@mui/icons-material/GestureSharp";
import Jamboard from "./components/jamboard";

const PEER_ID = "833e645f-e7b8-4189-8e1f-5394412b4c55";
export default function VideoCall() {
  const [peerId, setPeerId] = useState("");
  const [callId, setCallId] = useState("");
  const [mediaStreamData, setMediaStreamData] = useState(null);
  const [jamboardOpen, setJamboardOpen] = useState(false);
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
        { video: { mediaSource: "screen" }, audio: true },
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
      <Box
        style={{
          display: jamboardOpen ? "block" : "none",
          position: "absolute",
          width: "60vw",
          height: "60vh",
          zIndex: 9,

          borderRadius: "1vh",
          backgroundColor: "white",
        }}
      >
        <Jamboard setJamboardOpen={setJamboardOpen} />
      </Box>
      <video
        style={{
          marginTop: "25vh",
          marginBottom: "auto",
          marginRight: "8vw",
          width: "30vw",

          borderRadius: "10px",
          boxShadow: "0 0 20px 2px gray",
        }}
        ref={remoteVideoRef}
      />
      <Box
        style={{
          width: "100%",
          height: "5vh",
          backgroundColor: "rgba(10,10,10,0.9)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          variant="contained"
          style={{ backgroundColor: "black" }}
          onClick={() => setJamboardOpen(!jamboardOpen)}
        >
          <GestureSharpIcon style={{ fontsize: "3vh", color: "yellow" }} />
          <Typography style={{ fontsize: "1vh", color: "yellow" }}>
            Jamboard
          </Typography>
        </Button>
      </Box>
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
        <Box
          style={{
            height: "100%",
            width: "10%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(10,10,10,0.7)",
          }}
        >
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`${process.env.PUBLIC_URL}/youtube.png`}
              alt="YouTube"
              style={{
                width: "50%",
                margin: "0 2rem",
              }}
            />
          </a>
        </Box>
        <button onClick={initiateCall(callId)}>Connect</button>
        <video
          style={{
            marginLeft: "2vw",
            width: "15vh",
            height: "15vh",
            borderRadius: "1vh",
          }}
          ref={currentUserVideoRef}
        ></video>
      </Box>
    </Box>
  );
}
