import React from "react";
import Product from "./Product";

function ProductListing(){
    const [data,setData]=React.useState([]);
    const [currPage,setCurrPage]=React.useState(1);

    React.useEffect(()=>{
    fetch(`http://localhost:3000/posts/?_page=${currPage}&_limit=5`)
    .then((res)=>res.json())
    .then(
        (res)=>setData(res)
    )
    },[currPage]);



    // const getData=()=>{
    //         fetch(`http://localhost:3000/posts/?_page=${currPage}&_limit=3`)
    //         .then((res)=>res.json())
    //         .then(
    //             (res)=>setData(res)
    //         )
    // }
    if(data.length==0){
     return(   <div>
            {data.length==0 && <h1>Loading...</h1>}
        </div>
     )

    }

    return (<div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)"}}>
        {
            data.map((e)=><Product key={e.id} data={e}/>)
        }
        <div>
            <button disabled={currPage==1} onClick={()=>{setCurrPage((prev)=>prev==1 ? prev:prev-1)}}>PREV</button>
            <p>{currPage}</p>
            <button disabled={data.length<3} onClick={()=>{setCurrPage((prev)=>data.length<3? prev:prev+1)}}>NEXT</button>
        </div>
    </div>)
}

export default ProductListing;