import React from "react";

const initState={
    title:"",
    gender:"M",
    price:"",
    category:"",
    image:"",
};
function ProductForm(){
    const [formData,setFormData]=React.useState(initState);
    const handleChange=(e)=>{
        let {name,value}=e.target;
        setFormData((prev)=>({...prev,[name]:value}));
    }
    const  onSubmit=(e)=>{
        e.preventDefault();
        let res=fetch(`http://localhost:3000/posts/`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(formData)
        });
        res.then((res)=>res.json())
        .then(console.log(res))
        .catch((err)=>console.log(err));
    }



    const {title,gender,price,category,image}=formData;
    return (
          <>
            <form onSubmit={onSubmit}>
                <label>Product Title <input onChange={handleChange} type="text" name="title" value={title} placeholder="Enter Product title"/></label>
                <br/>
                <label> Gender <select name="gender" value={gender} onChange={handleChange}>
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                    <option value="O">Other</option>
                </select></label>
                <br/>
                <label>Price <input onChange={handleChange} type="number" name="price" placeholder="Enter Price" value={price}/></label>
                <br/>
                <label>Category <input onChange={handleChange} name="category" value={category}/></label>
                <br/>
                <label>Image <input onChange={handleChange} type="text" name="image" value={image}/></label>
                <br/>
                <input type="submit"/>
            </form>
          </>
    );

}

export default ProductForm;