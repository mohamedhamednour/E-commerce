import React from "react";
import { postdata } from "../reducer/index";

import {  useDispatch } from "react-redux";    
const Create = () => {
  const dispatch = useDispatch();
  const [images, setImage] = React.useState(null); //vlaue image  useState

  const names = React.useRef();   //refrance value name 
  const Descraption = React.useRef(); //refrance value name
const handel = (e) =>    e.preventDefault()  //handel form
//#region // handelform method create photo 
  const handelform =  () => {
   try{
     //create forma data pass in post  api in reducer
    let formField = new FormData();
    formField.append("name", names.current.value); //value name
    formField.append("description", Descraption.current.value); //value  Descraption

    if (images !== null) {
      formField.append("image", images); //value image
    }

     dispatch(postdata(formField)); // import postdata from store redux by  dispatch

   }catch(error){
     
    console.log(error)
   }
  };

   //#endregion
  

  return (
    <>
    <form >

    <div className="row">

      <div className="col-6 offset-3 mt-3">
        <h2>Insert photo</h2>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            ref={names}
            type="text"
            className="form-control"
            id="title"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">Descraption</label>
          <input
            ref={Descraption}
            type="text"
            className="form-control"
            id="Descraption"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="Description">image</label>
          <input
            className="form-control"
            type="file"
            onChange={(e) => setImage(e.target.files[0])}  
          />
        </div>
       <button onClick={handelform} type="submit" className="btn btn-primary">
          Submit
        </button>
     
      </div>
    </div>
    </form>
    </>
  );
};

export default Create;
