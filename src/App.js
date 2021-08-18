import React,{useEffect,useState}from "react"
import api from "./api"

import MovieRow from "./components/MovieRow/MovieRow"
import FeaturedMovie from "./components/FeaturedMovie/FeaturedMovie"
import Header from "./components/Header/Header"

import './App.css'

export default function App()  {

  const [movieList,setMovieList] = useState([])
  const [featuredMovie,setFeaturedMovie] = useState(null)

  useEffect(() =>{
    const loadAll = async () => {
      //Get movie list
      let list = await api.getHomeList()
      setMovieList(list)

      //Get featured movie
      let originals = list.filter(i => i.slug === 'originals')
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
      let chosen = originals[0].items.results[randomChosen]
      let chosenInfo = await api.getMovieInfo(chosen.id, 'tv')

      setFeaturedMovie(chosenInfo)
     
    }
    loadAll()
  },[])

  return (
    <div className="page">
      <Header />
      {featuredMovie &&
        <FeaturedMovie item={featuredMovie} />
      }

      <section className="lists">
        {movieList.map((item,key) => (
         <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>
    </div>
  )
}