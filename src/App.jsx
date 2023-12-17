import Random from "./components/Random"
import Tag from "./components/Tag"

export default function App() {

  return (
    <div className="background w-full h-screen flex flex-col items-center overflow-x-hidden" >
      <h1 className=" px-10 py-4 text-3xl font-bold w-11/12 bg-white rounded-xl text-center mt-[40px]">RANDOM GIFS</h1>
      <div className="flex flex-col w-full items-center gap-x-8 mt-[30px]">
        <Random/>
        <Tag/>
      </div>
    </div>
  )
}
