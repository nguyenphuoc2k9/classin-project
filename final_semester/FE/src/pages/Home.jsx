import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import { BsSortAlphaDown, BsSortNumericUpAlt } from "react-icons/bs";
import { BsSortAlphaUpAlt } from "react-icons/bs";
import { IconButton} from "@mui/material"
import { IoArrowForwardCircle } from "react-icons/io5";
import Card from '../../components/Card';
import { useSelector,useDispatch } from 'react-redux';
import CreateForm from '../../components/CreateForm';
import { Navigate, useLocation } from 'react-router-dom';
import { AxiosInstance } from '../api/axios';
import { set, sortAs, sortDS } from '../State/movie';
import Detail from '../../components/Detail';
const Home = () => {
    
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch()
    const [detail,setDetail] = useState({})
    const [isPop,setisPop] = useState(false)
    const [showMore,setshowMore] = useState(false)
    const [is_fetched,setisfetched] = useState(false)
    const login_state = useSelector((state)=>state.auth.login_state)
    const handleShowMore = ()=>{
        setshowMore( showMore == false ? true : false)
        console.log(showMore)
    }
    (async()=>{
        if(login_state && !is_fetched){
            const Movie_api = await AxiosInstance.get("/movie/")
            dispatch(set({data:Movie_api.data,length:Movie_api.data.length}))
            setisfetched(true)
        }
    })()
    const closeDetail = ()=>{
        setDetail({})
        setisPop(false)
    }
    const OpenDetail = (movie)=>{
        setDetail(movie)
        setisPop(true)

    }
    console.log(detail)
    const location = useLocation()
    const Movie = useSelector((state)=>state.movie.data)
    let Movie_Render;
    if(!showMore){
         Movie_Render = Movie.slice(0,4)
    }else{
         Movie_Render = Movie
    }
    if(location.pathname == "/login" ||location.pathname=="/registry"){
        document.getElementById("root").style.backgroundImage = "unset"
      }else{
        document.getElementById("root").style.backgroundImage = "linear-gradient(to right top, #e39e34, #e79534, #ea8c36, #ec8338, #ee7a3c)"
      }
    return (
        <div className="home">
        {login_state ==  false ? <Navigate to="/login"/> :""}
            <CreateForm open={open} setOpen={setOpen}/>
            <div className="home-box">
            
                {isPop ==false ? <><Header setOpen={setOpen}/>
                <div className='movie-box'>
                    <div className="movie-header">
                        <div className="title">
                            <h1>MOST POPULAR MOVIES</h1>
                        </div>
                        <div className="icons">
                            <IconButton onClick={()=>dispatch(sortAs())}>
                                <BsSortAlphaDown/>
                            </IconButton>
                            <IconButton onClick={()=>dispatch(sortDS())}>
                                <BsSortAlphaUpAlt/>
                            </IconButton>
                            
                        </div>
                    </div>
                    <div className="movie-content">
                        {Movie_Render.map(movie=>{
                            return <Card OpenDetail={OpenDetail} data={movie} key={movie.id}/>
                        })}
                    </div>
                    <div className="more-button">
                        <IconButton onClick={handleShowMore}>
                            <IoArrowForwardCircle />
                        </IconButton>
                    </div>
                </div></> : <Detail name={detail.name} closeDetail={closeDetail} introduce={detail.introduce} time={detail.time} year={detail.year} image={detail.image}  id={detail.id}userId={detail.userId}/>}
            </div>
            
        </div>
    )
}

export default Home