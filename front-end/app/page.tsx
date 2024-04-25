"use client"

import { useEffect, useState } from "react";
import { io } from 'socket.io-client'

export default function Home() {
  
  const [socket, setSocket] = useState<any>(undefined);
  const [message, setMessage] = useState<any>([]);

  useEffect(()=>{
    const socket = io("https://special-fishstick-rvq5wgg459jcx7rq-4000.app.github.dev/");

    socket.on('books', (data) => {
      console.log('data: ', data, " ------ \n");
      setMessage(data);
    });

    setSocket(socket);
  }, [])

  return (<div>hello world : {message} </div>);

  // emit('uplaod', message){
  //   //set flag 1
  // }
    // emit(message){
  //   //set flag 2
  // }
    // emit(message){
  //   //set flag 2
  // }
  //if (1)
      //display componant one
      //message = start uploading
  //if (2)
    //display componant one
    //uploadin is 10% 20% ....
  ///if (3)
    //display componant one
    //uploading is finished
    
}
