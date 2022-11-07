import {useParams} from 'react-router-dom';
import { Header } from './Header';
import Footer from './Footer';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const Details = ()=>{
    //Line Code berikur merupakan fungsi untuk menerima parameter dari URL
    const {isbn} = useParams()
    const [data,setData] = useState([])
    const url = "https://api.itbook.store/1.0/books/" + isbn
    useEffect(()=>{
        axios
            .get(url)
            .then((res) => {
                console.log(res);
                setData(res.data);
            })
            .catch((err) => {
                console.log(err)
            })
    },[])

    //Silakan edit code berikut supaya dapat menampilkan buku sesuai dengan parameter ISBN di URL
    return(
        <>
        <div className="container">
            <Header/>
            <div className="d-flex justify-content-end flex-column" style={{alignItems:"center"}}>
                {/*Berikut ini merupakan template untuk informasi buku */}
                <h3 style={{width:"48rem",marginTop:"30px"}} >Details</h3>
                <div className="card flex-row flex-wrap book-card" style={{width:"50rem",marginTop:"20px"}}>
                    <div className="border-0 book-foto" style={{display:"flex",alignItems:"flex-start"}}>
                        <img src={data["image"]} alt="Buku.jpg" width="250" height="270" className="px-4 book-logo"/>
                    </div>
                    <div className="card-block p-4" style={{width:"58%"}}>
                        <table>
                            <tr>
                                <td><h5 className="card-title">Title</h5></td>
                                <td><h4 className="card-title">{data["title"]}</h4></td>
                            </tr>
                            <tr>
                                <td><h5 className="card-text">Subtitle</h5></td>
                                <td><p className="card-text">{data["subtitle"]}</p></td>
                            </tr>
                            <tr>
                                <td><h5 className="card-text">Authors</h5></td>
                                <td><p className="card-text">{data["authors"]}</p></td>
                            </tr>
                            <tr>
                                <td><h5 className="card-text">Publisher</h5></td>
                                <td><p className="card-text">{data["publisher"]}</p></td>
                            </tr>
                            <tr>
                                <td><h5 className="card-text">Year</h5></td>
                                <td><p className="card-text">{data["year"]}</p></td>
                            </tr>
                            <tr>
                                <td><h5 className="card-text">ISBN10</h5></td>
                                <td><p className="card-text">{data["isbn10"]}</p></td>
                            </tr>
                            <tr>
                                <td><h5 className="card-text">ISBN13</h5></td>
                                <td><p className="card-text">{data["isbn13"]}</p></td>
                            </tr>
                            <tr>
                                <td><h5 className="card-text">Language</h5></td>
                                <td><p className="card-text">{data["language"]}</p></td>
                            </tr>
                            <tr>
                                <td><h5 className="card-text">Pages</h5></td>
                                <td><p className="card-text">{data["pages"]}</p></td>
                            </tr>
                            <tr>
                                <td><h5 className="card-text">Price</h5></td>
                                <td><p className="card-text">{data["price"]}</p></td>
                            </tr>
                            <tr>
                                <td><h5 className="card-text">Rating</h5></td>
                                <td><p className="card-text">{data["rating"]}</p></td>
                            </tr>
                            <tr>
                                <td><h5 className="card-text">Desc</h5></td>
                                <td><p className="card-text">{data["desc"]}</p></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><a href="#" onClick={()=>{window.open(data["pdf"]["Free eBook"])}}>Learn More!</a></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        </>
    )
}