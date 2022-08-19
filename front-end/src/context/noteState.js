import React from "react";
import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState=(props)=>{
  const[token,setToken]=useState("");

  const[id, setId]=useState()

    return(
        <NoteContext.Provider value={{token,setToken,id,setId}}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState;