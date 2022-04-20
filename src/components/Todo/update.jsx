import React from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";

import ky from 'ky';

 


const Update = () => {
  const { id } = useParams();
  // const dispatch = useDispatch();
  const [detils , setdetils] = React.useState([])  //vlaue image

  const { isLoading, error, data } = get_databyid('repoData', () =>
   ky('', {prefixUrl: `http://127.0.0.1:8000/shoping/${id}`}).json()
  

)

  




  React.useEffect(() => {
   
    
  }, []);
  return (
    <>

    <div className="countainer">
      <div className="row">
        <div className="col-12">
          <span>{detils.name}</span>

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
