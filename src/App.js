import React,{useEffect,useState}from "react"
import api from "./api"

import MovieRow from "./components/MovieRow/MovieRow"
import FeaturedMovie from "./components/FeaturedMovie/FeaturedMovie"
import Header from "./components/Header/Header"

import './App.css'

export default function App()  {

  const [movieList,setMovieList] = useState([])
  const [featuredMovie,setFeaturedMovie] = useState(null)
  const [blackHeader,setBlackHeader] = useState(false)

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


   useEffect(() =>{
     const scrollListner = () => {
      if(window.scrollY > 20){
        setBlackHeader(true)
      }else{
        setBlackHeader(false)
      }
     }

     window.addEventListener('scroll', scrollListner)

     return () => {
       window.removeEventListener('scroll', scrollListner)
     }
   })

  return (
    <div className="page">

      <Header black={blackHeader}/>

      {featuredMovie &&
        <FeaturedMovie item={featuredMovie} />
      }

      <section className="lists">
        {movieList.map((item,key) => (
         <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>

      <footer>
         Feito com <span role="img" aria-label="heart">❤️</span> <br/>
         Direitos de imagem a Netflix<br/>
         Dados extraidos do site <a href="https://www.themoviedb.org/">The Movie DB</a>
      </footer>
    </div>
  )
}