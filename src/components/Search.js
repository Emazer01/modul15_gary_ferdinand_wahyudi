import { Header } from "./Header";
import Footer from "./Footer";
import {useNavigate, useRouteLoaderData} from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useParams } from "react-router-dom";

/*Silakan edit code di bawah agar dapat menampilkan daftar buku baru dari API secara dinamis */
/* HINT : Gunakan mapping array */
export const Search= ()=>{
    const navigate = useNavigate()
    const {judul} = useParams()
    console.log(judul);
    const url = "https://api.itbook.store/1.0/search/" + judul
    console.log(url)
    const [data,setData] = useState([])

    useEffect(()=>{
        axios
            .get(url)
            .then((res) => {
                console.log(res);
                setData(res.data.books);
            })
            .catch((err) => {
                console.log(err)
            })
    },[])

    console.log(data[0])
    const hasil = data.map((key) => {
        const path = "../" + key["isbn13"]
        return(
            <div className="card flex-row flex-wrap book-card" style={{width:"48rem",marginTop:"30px"}} onClick={()=>{navigate(path)}}>
                    <div className="border-0 book-foto">
                        <img src={key["image"]} alt="Buku.jpg" height="220" className="px-4 book-logo"/>
                    </div>
                    <div className="card-block p-4" style={{width:"50%"}}>
                        <h4 className="card-title">{key["title"]}</h4>
                        <p className="card-text">{key["subtitle"]}</p>
                        <p className="text-muted">{key["isbn13"]}</p>
                        <h5>{key["price"]}</h5>
                    </div>
                </div>
        )
    })

    return(
        <html>
        <div className="container">
            <Header/>
            <div className="d-flex justify-content-end flex-column" style={{alignItems:"center"}}>
                <h3 style={{width:"48rem",marginTop:"30px"}} >Search</h3>
                <div className="search-box">
                    <h4>Search for a book</h4>
                    <div className="flex-row">
                        <input style={{borderRadius:5,width:240}} id="judul" placeholder={judul}/>
                        <IconButton aria-label="search" size="large" 
                        onClick={() => {
                            const title = document.getElementById("judul").value
                            const path = "../search/" + title
                            console.log(path)
                            navigate(path)
                            window.location.reload()
                          }}>
                            <SearchIcon sx={{fontSize:30}}/>
                        </IconButton>
                    </div>
                </div>
                <h3 style={{width:"48rem",marginTop:"30px"}} >Search Result</h3>
                {hasil}
            </div>
            <div id="hasil"></div>
            <Footer />
        </div>
        </html>

    )
}
