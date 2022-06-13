import React from "react";

function Product( {data}){

    return (
        <div style={{borderRadius:"20px",margin:"30px",padding:"20px",  width:"300px",border:"1px solid grey",display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
        <div><img style={{height:"150px",width:"150px",objectFit:"contain"}} src={data.image}/></div>
            <div style={{display:"flex",flexDirection:"column"}}>
            <div style={{display:"flex",flexDirection:"column"}}>
            <span style={{fontWeight:"bold"}}>Title</span> 
            <span>{data.title}</span> 
            </div>
            <div  style={{display:"flex",flexDirection:"column"}}>
            <span style={{fontWeight:"bold"}}>Gender</span> 
            <span>{data.gender}</span> 
            </div>
            <div style={{display:"flex",flexDirection:"column"}}>
            <span style={{fontWeight:"bold"}}>Price</span> 
            <span>{data.price}</span> 
            </div>
            <div  style={{display:"flex",flexDirection:"column"}}>
            <span style={{fontWeight:"bold"}}>Category</span> 
            <span>{data.category}</span>

            </div>
            </div>
        </div>
    )
}

export default Product;