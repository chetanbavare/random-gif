
import { useState } from "react"
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

export default function Tag() {

  const [tag,setTag] = useState("death note") //here we are setting initial text value for consistency use 
  // tag in usegif instead of a string value

  const {fetchData, gif, loading} = useGif(tag)

  return (
    <div className=" w-1/2 flex flex-col bg-green-400 rounded-lg border border-black items-center gap-y-5 mt-[15px]">
      <h1 className=" mt-3 uppercase underline text-2xl font-bold">random {tag} gif</h1>
      {
        loading ? <Spinner/> : <img src={gif} width={450} alt="img"/>
      }
      <input
        type="text"
        value={tag}
        onChange={ (event) => {setTag(event.target.value)}}
      />
      <button className="mb-3 uppercase rounded-lg w-11/12 py-2 text-lg bg-yellow-500" onClick={() => {fetchData(tag);}}>
        generate
      </button>
    </div>
  )
}
