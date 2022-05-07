import React, { useState } from "react";
import "./style.css";
import Send from "./assets/send_white_24dp.svg"
import Mic from "./assets/mic_black_24dp.svg"
import Attach from "./assets/attach_file_black_24dp.svg"
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";


function SendBox() {
  const [message, setMessage] = useState("");
  const [postText, setPostText] = useState("");


  const postsCollectionRef = collection(db, "users");
  let navigate = useNavigate();
  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      message,
      postText,
      timestamp:serverTimestamp(),
      author: {  name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
  };

 

  return (
    <>
      
      <input className="send-message" type="file" id="image" onChange={(event) => {setPostText(event.target.value);}} />
        <label className="icon attach_file" for="image">
          <img src={Attach} alt="" />
        </label>
        <img className="icon mic" src={Mic} alt="" />
        <input placeholder="Type a message" onChange={(event) => {setMessage(event.target.value);}} />
        <button className="send_paper" onClick={createPost} >
          <img  src={Send}/>
          </button>
    
    </>
  );
}

export default SendBox;
