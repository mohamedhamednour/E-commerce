import React from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { updateItem } from "../reducer/index";
// import { useSelector, useDispatch } from "react-redux";
import ky from 'ky';


const Update = () => {
  const { id } = useParams();
  // const dispatch = useDispatch();
  const [detils , setdetils] = React.useState([])  //vlaue image
  // const [namess , setnames] = React.useState('') //vlaue name
  // const [des , setdes] = React.useState('') //vlaue Descraption

  
//function get data by id and pass vlaue in input 
  const get_databyid = async () => {
    // const { data } = await axios.get(`http://127.0.0.1:8000/shoping/${id}`);
    const data = await ky('', {prefixUrl: `http://127.0.0.1:8000/shoping/${id}`}).json()
    setdetils(data);
    // setnames(data);
    // setdes(data);
    console.log(data)

  };

//function update 

//   const  handelform = async()=> {

//     let formField = new FormData();
//     formField.append("name",namess );
//     formField.append("description",des );

//     if (image !== null) {
//       formField.append("image",image );
//     }
//  dispatch(updateItem([formField,id])) //pass id and all data in array 
//   }

  React.useEffect(() => {
    get_databyid();  //call function 
    
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
        {/* <form  >

        <div className="row">
          <div className="col-6 offset-3 mt-3">
            <h2>update photo</h2>
            <div className="form-group">
              <label htmlFor="title">name</label>
              <input
                onChange={(e)=>setnames(e.target.value)}

              name="name"
                type="text"
                className="form-control"
                id="title"
                required
                value={namess.name}
              />
            </div>
            <div className="form-group">
              <label htmlFor="title">Descraption</label>
              <input
                 onChange={(e)=>setdes(e.target.value)}

                value={des.description}
                name="description"
                type="text"
                className="form-control"
                id="Descraption"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="Description">image</label>
              <input
                // value={data_id.image}
                className="form-control"
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
            <button onClick={handelform}  type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
        </form > */}

    </>
  );
};

export default Update;
