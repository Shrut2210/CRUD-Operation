import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Fac() {
    const [fac, setFac] = useState([]);
    const param = useParams();

    useEffect(() => {
        fetch("https://64da62f5e947d30a260b3301.mockapi.io/faculties").
            then((res) => { return res.json() }).
            then((res) => setFac(res))
    }, [])

    const faculties = fac.map((facs) => {
        return (
            <>
                <div className="col-3" style={{ justifyContent: "center", textAlign: "center" }}>
                    <div class="card m-3" style={{height:"75vh"}}>
                        <img src={facs.avatar} class="card-img-top" alt={facs.avatar} />
                        <div class="card-body">
                            <h3 style={{ color: "blue" }}>{facs.name}</h3>
                            <p class="card-text">{facs.exp}</p>
                            <Link to={"/" + facs.id} className="btn btn-primary">Read More..</Link>
                        </div>
                    </div>
                </div>
            </>
        )
    })
    return (
        <>
            <div className="container">
                <div className="row">
                    {faculties}
               
                <div className="card m-3 icon-box" style={{textAlign: "center", textDecoration: "none"}}>
                    <Link to={"/insert/" + param.id} style={{textDecoration: "none", color: "black", fontWeight: "bolder"}}>ADD
                    </Link>
                </div>
                </div>
            </div>
        </>
    )
}