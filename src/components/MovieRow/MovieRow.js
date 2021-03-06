import React,{useState} from "react"
import './movieRow.css'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'

const MovieRow = ({title,items}) => {
  const [scrollX,setScrollX] = useState(-400)

  const handleLeftArrow = () => {
    let x  = scrollX + Math.round(window.innerWidth/2)
    if(x > 0) {
      x = 0
    }
    setScrollX(x)
  }

  const handleRightArrow = () => {
    
  }

  return (
    <div className="movieRow">
      <h2>{title}</h2>

      <div className="movieRow--left">
        <NavigateBeforeIcon style={{fontSize:50}} onClick={handleLeftArrow}/>
      </div>

      <div className="movieRow--right">
        <NavigateNextIcon style={{fontSize:50}} onClick={handleRightArrow}/>
      </div>

      <div className="movieRow--listarea">
        <div className="movieRow--list" style={{marginLeft:scrollX, width:items.results.length * 150}}>
          {items.results.length > 0 && items.results.map((item, key) => (
              <div key={key} className="movieRow--listitem">
                <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>

              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default MovieRow