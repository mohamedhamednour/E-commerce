import React from "react";
import "../../App.css";
import { Link} from "react-router-dom";

import { todoapis, deleteitem } from "../reducer/index";
import { useSelector, useDispatch } from "react-redux";

export const Shoping = () => {
  const dispatch = useDispatch(); 
  const { isloading, books, error } = useSelector((state) => state.apiSlice); 

  React.useEffect(() => {
    //call api get shoping by useEffect
    dispatch(todoapis());
    console.log(`dbfhh${books}`);
  }, [dispatch]);

 
  return (
    <>
    <div className="container-fluid">
      <div className="row">
        
      

        <div className="backgro">


          <h1 className="tiltes">Boutique</h1>
        </div>
        
          <br />
          <pre>




          </pre>
            {books
              ? books.map((item) => [
                  <div className="col-6 col-md-4 card  ">
                    <p>{item.name}</p>
                    <img key={item.id} src={item.image} />
                    <form >
                      <br />

                  
                    {/* <input  className="btn btn-danger" onClick={() => dispatch(deleteitem(item.id))} type='submit' value='Delete' /> */}
                   {/* <button className="btn btn-primary"> Detils  </button> */}
                     <Link className="btn btn-primary" to={`/photo/${item.id}`}>Detils</Link>

                    </form>
 
                  </div>,
                  
                ])
              : ""}
<pre>




</pre>
<div className="footers">
  <div className="row">
    <div className="col-12  col-md-4"><h1 className="tiltes">Boutique</h1></div>

    <div className="col-12 col-md-3 colors">service</div>
    <div className="col-12 col-md-3 colors">contact us</div>


  </div>



</div>
          </div>
      </div>
    </>
  );
};
