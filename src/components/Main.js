import { Header } from "./Header";
import Footer from "./Footer";
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

/*Silakan edit code di bawah agar dapat menampilkan daftar buku baru dari API secara dinamis */
/* HINT : Gunakan mapping array */
export const Main= ()=>{
    const navigate = useNavigate()
    const [data,setData] = useState([])

    useEffect(()=>{
        axios
            .get("https://api.itbook.store/1.0/new")
            .then((res) => {
                console.log(res);
                setData(res.data.books);
            })
            .catch((err) => {
                console.log(err)
            })
    },[])

    console.log(data[0])
    const result = data.map((key) => {
        return(
            <div className="card flex-row flex-wrap book-card" style={{width:"48rem",marginTop:"30px"}} onClick={()=>{navigate(key["isbn13"])}}>
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
                <h3 style={{width:"48rem",marginTop:"30px"}} >New Arrival</h3>
                {result}
            </div>
            <Footer />
        </div>
        </html>

    )
}