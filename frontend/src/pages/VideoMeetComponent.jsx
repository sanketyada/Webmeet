import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React, { useEffect, useRef, useState } from "react";
import "../../public/VideoMeetComponent.css";
const server_url = "http://localhost:8000";
var connection = {};

const peerConfigConnection = {
  iceServer: [{ urls: "stun:stun.l.google.com:19302" }],
};

function VideoMeetComponent() {
  var socketRef = useRef();
  let socketIdRef = useRef();
  let localVideoRef = useRef();

  let [videoAvailable, setVideoAvailable] = useState(true);
  let [audioAvailable, setAudioAvailable] = useState(true);

  let [video, setVideo] = useState();
  let [audio, setAudio] = useState();

  let [screen, setScreen] = useState();

  let [showModel, setModel] = useState();
  let [screenAvailable, setScreenAvailable] = useState();

  let [messages, setMessages] = useState([]);
  let [message, setMessage] = useState("");

  let [newMessages, setNewMessages] = useState(0);

  let [askForUsername, setAskForUsername] = useState(true);

  let [username, setUsername] = useState();
  const videoRef = useRef([]);

  let [videos, setVideos] = useState([]);

  // if(isChrome() === false){}
  const getPermission = async () => {
    try {
      //videoPermission Given
      const videoPermssion = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      if (videoPermssion) {
        setVideoAvailable(true);
      } else {
        setVideoAvailable(false);
      }

      //audioPermission Given
      const audioPermssion = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });
      if (audioPermssion) {
        setAudioAvailable(true);
      } else {
        setAudioAvailable(false);
      }
      
      //screeenShare Permission Given
      if(navigator.mediaDevices.getDisplayMedia){
        setScreenAvailable(true)
      }else{
        setScreenAvailable(false)
      }
      
      //stream
      if(videoAvailable || audioAvailable){
        const usereMediaStream = await navigator.mediaDevices.getUserMedia({
          video:videoAvailable,
          audio:audioAvailable
        })

        if(usereMediaStream){
          window.localStream = usereMediaStream;

          if(localVideoRef.current){
            localVideoRef.current.srcObject = usereMediaStream
          }
        }
      }

    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    getPermission();
  }, []);

  let getUserMediaSuccess=(stream)=>{

  }

  let getUserMedia = ()=>{
    if((video && videoAvailable) ||(audio && audioAvailable) ){
      navigator.mediaDevices.getUserMedia({video:video,audio:audio})
      .then(()=>{}) //TODO;getusermediaSucceess
      .then((stream)=>{})
      console.log((e)=>console.log(e))
    }else{
      try {
        let tracks = localVideoRef.current.srcObject.getTracks();
        tracks.forEach(track =>track.stop())
      } catch (error) {
        
      }
    }
  }

  useEffect(()=>{
    if(video ===undefined && audio === undefined){
      getUserMedia()
    }
  },[audio,video])

  let getMedia = ()=>{
    setVideo(videoAvailable)
    setAudio(audioAvailable)
    // connectToSocketServer()
  }

  let connect = () =>{
    setAskForUsername(false);
    getMedia();
  }

  return (
    <div>
      {askForUsername === true ? (
        <div>
          <h2>Enter into Lobby</h2>
          <TextField
            id="outlined-suffix-shrink"
            label="Username"
            variant="outlined"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <Button variant="contained" onClick={connect}>Connect</Button>

          <div>
            <video ref={localVideoRef} autoPlay muted></video>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default VideoMeetComponent;
