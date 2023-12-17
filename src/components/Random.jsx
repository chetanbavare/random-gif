
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

export default function Random() {

  const {fetchData, gif, loading} = useGif()

  return (
    <div className=" w-1/2 flex flex-col bg-green-400 rounded-lg border border-black items-center gap-y-5 mt-[15px]">
      <h1 className=" mt-3 uppercase underline text-2xl font-bold">A random gif</h1>
      {
        loading ? <Spinner/> : <img src={gif} width={450} alt="img"/>
      }
      
      <button className="mb-3 uppercase rounded-lg w-11/12 py-2 text-lg bg-yellow-500" onClick={() => { fetchData()}}>
        generate
      </button>
    </div>
  )
}
