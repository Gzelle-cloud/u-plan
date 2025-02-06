import DateAndQuote from "./DateAndQuote";
import Tasks from "./Tasks";


function Today() {

  return(
    <div>
      <div className="wrapper">     
        <DateAndQuote />
        <Tasks />
      </div> 
    </div>
  )
}

export default Today;