import React from "react";
import "../../App.css";
import { Link} from "react-router-dom";
import ky from 'ky';

// import { todoapis, changeapi } from "../reducer/index";
// import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import {  useQuery } from 'react-query'

export const Shoping = () => {
  const [t, i18n] = useTranslation()
  const [dataa , setdata] = React.useState([])

  const get_alldata = async () => {
    const data = await ky('', {prefixUrl: `https://fakestoreapi.com/products`}).json()
    setdata(data);
 
    console.log(data)

  };



  React.useEffect(() => {
   
    get_alldata()
    
  }, []);

  const changeData = (cat) =>{
    const changes =  dataa.filter((x) => x.category === cat );
   setdata( changes);
    
  }
 
 
  return (
    <>

    
    <div className="container-fluid">
      <div className="row">
        
      

        <div className="backgro">


          <h1 className="tiltes">{t('Boutique')}</h1>
        </div>
        <div  align='center' className="div">
          <button onClick={() =>get_alldata()}   className="btn btn-dark">ِall catagry</button>
          <button onClick={() =>changeData("women's clothing")} className="btn btn-dark">woman</button>
          <button onClick={() =>changeData("men's clothing")} className="btn btn-dark">men </button>
          <button onClick={() =>changeData('electronics')} className="btn btn-dark">electronics</button>
          <button onClick={() =>changeData('jewelery')} className="btn btn-dark">jewelery</button>

          </div>
          <br />
          <pre>




          </pre>
          
            {dataa
              ? dataa.map((item) => [
                  <div className="col-6 col-md-4 card  ">
                    <p>{item.name}</p>
                    <img key={item.id} src={item.image} /><br />
                    <h3 align='center'> price : {item.price}</h3>

                
                      <br />

                  
                    <div align='center' className="div"> <Link className="btn btn-primary" to={`/photo/${item.id}`}>Detils</Link> <button className="btn btn-dark">add card</button></div>

                   
 
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
