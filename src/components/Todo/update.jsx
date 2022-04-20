import React from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";

import ky from 'ky';


const Update = () => {
  const { id } = useParams();
  // const dispatch = useDispatch();
  const [detils , setdetils] = React.useState([])  //vlaue image


  
//function get data by id and pass vlaue in input 
  const get_databyid = async () => {
    const data = await ky('', {prefixUrl: `https://fakestoreapi.com/products/${id}`}).json()
    setdetils(data);
 
    console.log(data)

  };



  React.useEffect(() => {
    get_databyid();  //call function 
    
  }, []);
  return (
    <>

    <div className="countainer">
      <div className="row">
        <div className="col-12">
          <span>{detils.title}</span>

        </div>
        <div className="col-12 col-md-6"><span>{detils.description}</span></div>

        <div align='center' className="col-12 col-md-6">
          <img src={detils.image} alt="" />
        </div>


<div className="col-12">
  

<h3>payment 
</h3> 
</div>
      </div>
    </div>
      

    </>
  );
};

export default Update;
