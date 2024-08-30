import { useState } from "react"
function App() {
 
  const [color, setColor]=useState("#81864A")

  return (
    <>
    <div className="w-full h-screen duration-2000" style={{backgroundColor:color}}>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap gap-3 shadow-lg bg-white rounded-3xl px-3 py-2">
          <button onClick={() => setColor("red")} className="outline-none px-4 rounded-full"style={{
            backgroundColor:"red"
          }}>Red</button>
          <button  onClick={() => setColor("blue")}  className="outline-none px-4 rounded-full"style={{
            backgroundColor:"blue"
          }}>Blue</button>
          <button  onClick={() => setColor("yellow")}  className="outline-none px-4 rounded-full"style={{
            backgroundColor:"yellow"
          }}>Yellow</button>
          <button  onClick={() => setColor("orange")}  className="outline-none px-4 rounded-full"style={{
            backgroundColor:"orange"
          }}>Orange</button>

        </div>
      </div>
    </div>
   
    </>
  )
}

export default App
