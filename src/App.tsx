import './App.css'
import {Offer} from "./Offer.tsx";
import "@fontsource/montserrat"; // Defaults to weight 400
import "@fontsource/montserrat/200.css"; // Specify weight
import "@fontsource/montserrat/300.css"; // Specify weight
import "@fontsource/montserrat/400.css"; // Specify weight
import "@fontsource/montserrat/500.css"; // Specify weight
import "@fontsource/montserrat/600.css"; // Specify weight
import "@fontsource/montserrat/700.css"; // Specify weight

import img from "./assets/fa_photo.jpg"

function App() {

  return (
    <>
      <div className="font-montserrat flex gap-4 justify-center px-4 md:px-12 py-12 md:py-24">
          <div className="w-full flex gap-8 max-w-[80rem] flex-col lg:flex-row">
              <div className="flex w-fit justify-start flex-col items-start gap-4">
                  <div className=" sticky top-12 pt-2 flex flex-col gap-6">
                  <img className="rounded-full object-cover w-24 h-24 lg:h-32 lg:w-32" src={img}  alt="Filip Akkad Image"/>
                  <h1 className="text-left whitespace-nowrap text-2xl md:text-4xl">Filip Akkad</h1>
                  </div>
              </div>
              <div className="flex w-full justify-start">
                  <Offer />
              </div>
          </div>
      </div>
    </>
  )
}

export default App
