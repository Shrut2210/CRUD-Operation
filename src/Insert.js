import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";

export default function Insert() {

    const [data, setData] = useState({});
    const nav = useNavigate();
    const param = useParams();

    useEffect(() => {
        fetch("https://64da62f5e947d30a260b3301.mockapi.io/faculties/" + param.id, {method: "GET"}).
        then((res) => {return res.json()}).
        then((res) => setData(res))
    }, [])

    return (
        <>
            <div className="container m-auto p-3">
            <form style={{textAlign: "center", color: "whitesmoke"}}>
                <h2>Fill the form..</h2>
                <div className="row m-3 p-3">
                    <div className="col">
                        <span>Name : </span>
                        <input type="text" value={data.name} onChange={(e) => {
                            setData({...data, name: e.target.value})
                        }} />
                    </div>
                </div>
                <div className="row m-3 p-3">
                    <div className="col">
                        <span>Exp : </span>
                        <input type="text" value={data.exp} onChange={(e) => {
                            setData({...data, exp: e.target.value})
                        }} />
                    </div>
                </div>
                <div className="row m-3 p-3">
                    <div className="col">
                        <span>Img : </span>
                        <input type="text" value={data.avatar} onChange={(e) => {
                            setData({...data, avatar: e.target.value})
                        }} />
                    </div>
                </div>
                <div className="row m-3 p-3">
                    <div className="col">
                    <button onClick={(e) => {
                        if(param.id > 0)
                        {
                            e.preventDefault();
                            fetch("https://64da62f5e947d30a260b3301.mockapi.io/faculties/" + param.id , 
                            {
                                method: 'PUT',
                                body: JSON.stringify(data),
                                headers: {
                                'Content-Type': 'application/json'
                                }
                            } )
                            .then()
                            .then((res) => {
                                nav("/")
                                return setData(res)
                            })
                        }
                        else
                        {
                            e.preventDefault();
                            fetch("https://64da62f5e947d30a260b3301.mockapi.io/faculties", 
                            {
                                method: 'POST',
                                body: JSON.stringify(data),
                                headers: {
                                'Content-Type': 'application/json'
                                }
                            })
                            .then()
                            .then((res) => {
                                nav("/")
                                return setData(res)
                            })
                        }
                    }}>Submit</button>
                    </div>
                </div>
            </form>
        </div>
        </>
    )
}