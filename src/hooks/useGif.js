
import axios from "axios";
import { useState,useEffect } from "react";
 

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {

  const [gif,setgif] = useState("")
  
  const [loading, setLoading] = useState(false)
    
  async function fetchData(tag) {
    setLoading(true)
    // const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const {data} = await axios.get(tag ? `${url}&tag=${tag}` : url)
      // console.log(output)
    const output = data.data.images.downsized_large.url
    setgif(output)
    setLoading(false)
  }

  useEffect( () => {
    fetchData(tag); 
    console.log("h")
    // this will decide the first gif because we are passing an argument in case of tag component
  },[tag])
 
  return {gif, loading, fetchData}

};
    
export default useGif;
