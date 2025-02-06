import { useState } from "react";
import { data } from "./data";

import previos from "../../assets/Previos.png"
import next from "../../assets/Next.png"

function Slides() {

  const [screenshot, setScreenshot] = useState(0);
  const images = data[0].image;

  const previosScreenshot = () => {
    setScreenshot( (screenshot => {
      screenshot--;
      if (screenshot < 0) {
        return images.length - 1;
      }
      return screenshot;
    } ))
  }

  const nextScreenshot = () => {
    setScreenshot( (screenshot => {
      screenshot++;
      if (screenshot > images.length - 1) {
        screenshot = 0;
      }
      return screenshot;
    }))
  }

  return(
    <>

    <div className="container">
      <button className="icon" onClick={previosScreenshot}>
        <img src={previos}/>
      </button>
      <img className="screenshot" src={images[screenshot]} />
      <button className="icon" onClick={nextScreenshot}>
        <img src={next}/>
      </button>
    </div>

    
    </>
  )
}

export default Slides;