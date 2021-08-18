import React,{useEffect,useState}from "react"
import api from "./api"
import MovieRow from "./components/MovieRow/MovieRow.js"
import './App.css'

export default function App()  {

  const [movieList,setMovieList] = useState([])

  useEffect(() =>{
    const loadAll = async () => {
      //Get movie list
      let list = await api.getHomeList()
      setMovieList(list)
    }
    loadAll()
  },[])

  return (
    <div className="page">
      <section className="lists">
        {movieList.map((item,key) => (
         <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>
    </div>
  )
}