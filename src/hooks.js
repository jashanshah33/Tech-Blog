import { useState } from "react";

export function usePosts(inital) {
    const [value , setValue] = useState(inital)
  
    function change(e) {
      setValue(e.target.value)
    }
  
    return{
      value,
      setValue,
      onChange: change
    }
  }