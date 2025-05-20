import {useState} from 'react'
import './styles/App.css'

function App() {
   const [count, setCount] = useState(0)

   return (
      <>
         <div>
            <h1>Art U 시작</h1>
            <div className="min-h-screen flex justify-center items-center bg-blue-100">
               <h1 className="text-sm font-bold underline">
                  Hello world!
               </h1>
            </div>

         </div>
         <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
               count is {count}
            </button>
         </div>
      </>
   )
}

export default App
