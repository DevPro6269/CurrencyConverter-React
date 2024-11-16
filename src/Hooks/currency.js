import { useState,useEffect } from "react";

function useCurrency(currency){
    let [data,setdata]=useState({})
    
    useEffect( ()=>{
        console.log("i am re redered")
        let url = `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`
         fetch(url)
         .then((data)=>data.json())
        .then((data)=>{
            setdata((...prev)=>{
              return  {...data[currency]}
            })
        })
    },[currency])
    
   return data
}

  



export default useCurrency;