import React, { useRef, useState } from "react";
import '../../public/VideoMeetComponent.css'
const server_url = "http://localhost:8000";
var connection = {};

const peerConfigConnection = {
  "iceServer": [{ urls: "stun:stun.l.google.com:19302" }],
};

function VideoMeetComponent() {

    var socketRef = useRef()
    let socketIdRef = useRef()
    let localVideoRef = useRef()

    let [videoAvailable,setVideoAvailable] = useState(true);
    let [audioAvailable,setAudioAvailable] = useState(true);

    let [video,setVideo] = useState();
    let [audio,setAudio] = useState();

    let [screen,setScreen] = useState();

    let [showModel,setModel] = useState();
    let [screenAvailable,setScreenAvailable] = useState();

    let [messages,setMessages] = useState([])
    let [message,setMessage] = useState("")
    
    let [newMessages,setNewMessages] = useState(0)

    let [askForUsername,setAskForUsername] = useState()

    let [username,setUsername] = useState()
    const videoRef = useRef([])

    let [videos,setVideos] = useState([])

    // if(isChrome() === false){}
    
  return <div>
    {
        window.location.href
    }
  </div>;
}

export default VideoMeetComponent;
