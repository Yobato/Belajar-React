import {useParams, Outlet, Link} from "react-router-dom";
import { useState, useEffect } from "react";

function Detail() {
    const{ id } = useParams();
    const [user, setUser] = useState(null)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(resp => resp.json())
        .then((data)=>{setUser(data)} )
        .catch(err => console.log(err));
    }, [id]);
    // console.log("Detail  ~ params", params);
    return (
        <>
        <h1>Detail Page</h1>
        <h2>Params id: {id}</h2>
        <pre>
            {JSON.stringify(user, null, 2)}
        </pre>
        <hr/>
        <nav>
            <Link to="post">Post</Link> | <Link to="product">Product</Link>
        </nav>
        <Outlet/>
        </>
    )
}

export default Detail