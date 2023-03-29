import Peer from "peerjs";
import { useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import VideocamIcon from "@mui/icons-material/Videocam";
import VideocamOffIcon from "@mui/icons-material/VideocamOff";
import MicOffIcon from "@mui/icons-material/MicOff";
import MicIcon from "@mui/icons-material/Mic";
import axiosInstance from "../../../services/axiosInstance";
const PEER_ID = "833e645f-e7b8-4189-8e1f-5394412b4c55";
export default function VideoClass() {
  const [peerId, setPeerId] = useState("");
  const [callId, setCallId] = useState("");
  const [mediaStreamData, setMediaStreamData] = useState(null);

  const [micON, setMicON] = useState(true);
  const [videoON, setVideoON] = useState(true);
  const currentUserVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const peerInstance = useRef(null);
  const { id } = useParams();
  const [classData, setClassData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const { data } = await axiosInstance.get(`/class/${id}`);
      setClassData(data.data[0]);
    }
    fetchData();
  }, []);
  const toggleVideo = () => {
    setVideoON(!videoON);
  };
  const toggleMic = () => {
    setMicON(!micON);
  };
  useEffect(() => {
    var peer = new Peer(id);
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
          console.log("stream", stream);
          call.answer(stream);
        },
        function (err) {
          console.log("error message : ", err);
        }
      );
    });
    peerInstance.current = peer;
  }, [id]);

  const initiateCall = (contactId) => {
    var getUserMedia =
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia;

    getUserMedia(
      { video: { mediaSource: "screen" }, audio: true },
      function (stream) {
        currentUserVideoRef.current.srcObject = stream;
        currentUserVideoRef.current.play();

        var call = peerInstance.current.call(contactId, stream);

        call.on("stream", function (remoteStream) {
          console.log("remoteStream", remoteStream);
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
        display: "flex",
        height: "100vh",
        width: "100vw",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.8)",
      }}
    >
      <Typography
        style={{
          color: "white",
          fontSize: "2vw",
          marginTop: "2vh",
          fontWeight: "bold",
        }}
      >
        {classData?.title}
      </Typography>
      <video
        style={{
          width: "50vw",
          height: "60vh",
          marginBottom: "auto",
          marginTop: "5vh",
          backgroundColor: "rgb(0,0,0)",
        }}
        ref={currentUserVideoRef}
      />
      <button onClick={initiateCall(callId)}>Connect</button>
      <Box
        style={{
          width: "10vw",
          height: "7vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          borderRadius: "5vh",
          backgroundColor: "rgb(100,100,100)",
          marginBottom: "auto",
        }}
      >
        <Box
          style={{
            width: "7vh",
            height: "7vh",
            borderRadius: "5vw",
            backgroundColor: "rgb(50,50,50)",
            border: "solid black 2px",
            display: "flex",

            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 20px 1px black",
          }}
        >
          {videoON ? (
            <VideocamOffIcon
              style={{ fontSize: "2.5vw", color: "#d93d1e" }}
              onClick={toggleVideo}
            />
          ) : (
            <VideocamIcon
              style={{ fontSize: "2.5vw", color: "#d93d1e" }}
              onClick={toggleVideo}
            />
          )}
        </Box>
        <Box
          style={{
            width: "7vh",
            height: "7vh",
            borderRadius: "5vw",
            backgroundColor: "rgb(50,50,50)",
            border: "solid black 2px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 20px 1px black",
          }}
        >
          {micON ? (
            <MicOffIcon
              style={{ fontSize: "2.5vw", color: "#d93d1e" }}
              onClick={toggleMic}
            />
          ) : (
            <MicIcon
              style={{ fontSize: "2.5vw", color: "#d93d1e" }}
              onClick={toggleMic}
            />
          )}
        </Box>
      </Box>
      <Box
        style={{
          width: "100vw",
          height: "15vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          backgroundColor: "rgba(0,0,0,0.8)",
        }}
      >
        <video style={{ width: "10vh", height: "10vh" }} ref={remoteVideoRef} />
      </Box>
    </Box>
  );
}
