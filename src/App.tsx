import './App.css'
import {Offer} from "./Offer.tsx";
import "@fontsource/montserrat"; // Defaults to weight 400
import "@fontsource/montserrat/200.css"; // Specify weight
import "@fontsource/montserrat/300.css"; // Specify weight
import "@fontsource/montserrat/400.css"; // Specify weight
import "@fontsource/montserrat/500.css"; // Specify weight
import "@fontsource/montserrat/600.css"; // Specify weight
import "@fontsource/montserrat/700.css"; // Specify weight
import {FaEnvelope, FaLinkedinIn, FaCity} from "react-icons/fa";

import img from "./assets/fa_photo.jpg"

function App() {

    return (
        <>
            <div
                className="font-montserrat flex flex-col justify-between gap-4 px-4 md:px-12 pt-12 md:pt-24 items-center">
                <div className="w-full flex gap-8 max-w-[80rem] flex-col lg:flex-row">
                    <div className="flex w-fit justify-start flex-col items-start gap-4">
                        <div className=" sticky top-12 pt-2 flex flex-row md:flex-col gap-8">
                            <img className="rounded-full object-cover w-24 h-24 lg:h-32 lg:w-32" src={img}
                                 alt="Filip Akkad Image"/>
                            <div className="text-left flex flex-col gap-2">
                                <h1 className="text-left whitespace-nowrap text-2xl md:text-4xl">Filip Akkad</h1>
                                <a className="text-xs flex gap-2 items-center"
                                   href="mailto:filip.akkad@gmail.com"><FaEnvelope/> filip.akkad@gmail.com</a>
                                <a className="text-xs flex gap-2 items-center"
                                   href="https://www.linkedin.com/in/filip-akkad/"><FaLinkedinIn/>@filipakkad</a>
                                <span className="text-xs flex gap-2 items-center"><FaCity/> Warsaw, Poland</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full justify-start">
                        <Offer/>
                    </div>
                </div>
                <footer>
                    <div className="px-4 py-12 w-full font-light">
                        designed and implemented by Filip Akkad
                    </div>
                </footer>
            </div>
        </>
    )
}

export default App
