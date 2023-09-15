import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Details()
{
    const param = useParams();
    const [fac, setFac] = useState([]);
    const nav = useNavigate();

    useEffect(() => {
        fetch("https://64da62f5e947d30a260b3301.mockapi.io/faculties/" + param.id, {method: "GET"}).
        then((res) => {return res.json()}).
        then((res) => setFac(res))
    }, [])

    return (
        <>
            <div className="container m-3 p-3">
                <div className="row">
                    <div className="col-3" style={{textAlign: "center"}}>
                        <img src={fac.avatar} class="img-fluid" alt={fac.avatar} />
                    </div>
                    <div className="col">
                        <div class="card-body">
                            <h3 style={{color: "white"}}>{fac.name}</h3>
                            <p class="card-text" style={{color: "white"}}>{fac.exp}</p>
                            <Link className="btn btn-primary m-1" onClick={() =>
                            {
                                fetch("https://64da62f5e947d30a260b3301.mockapi.io/faculties/" + param.id, {method: "DELETE"})
                                .then((res) => {return res.json()})
                                .then(() => {nav("../")})
                            }}>Delete</Link>
                            <Link to={'/insert/'+ fac.id} className="btn btn-primary m-1">
                            Edit
                            </Link>
                            <Link to={"/"} className="btn btn-primary">Back</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}