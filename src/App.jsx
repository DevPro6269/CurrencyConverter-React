import React from 'react'
import InputBox from './components/InputBox';
import { useCallback, useEffect, useState } from "react";
import useCurrency from "./Hooks/currency";
const App = () => {
  let[from,setfrom]=useState("usd") 
  let[to,setto]=useState("inr")
  let [convertedAmount,setconvertedAmount]=useState(0)
  let [amount,setAmount]=useState()
let [currency,setcurrency] =useState("usd")
  let data = useCurrency(currency)
   let curroptions =  Object.keys(data) 

useEffect(()=>{
  setcurrency(from)
},[from])

function swap(){
    setfrom(to)
    setto(from)
    setAmount(convertedAmount)
    setconvertedAmount(amount)
}

function convert(){
    console.log("working")
 setconvertedAmount(data[to]*amount)
}

  return (
    <div
    
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://plus.unsplash.com/premium_photo-1681487767138-ddf2d67b35c1?q=80&w=1555&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                       convert()
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            curroptions={curroptions}
                          currentCurrency={(select)=>setfrom(select)}
                          getAmount={(val)=>setAmount(val)}
                          amount={amount}
                          from={from}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            curroptions={curroptions}
                           currentCurrency={(select)=>setto(select)}
                           convertedAmount={convertedAmount}
                           to={to}
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg" onClick={convert}  >
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App