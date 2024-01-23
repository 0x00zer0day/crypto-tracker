import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import bitcoin from './assets/bitcoin.png'
import ethereum from './assets/ethereum.png'
import solana from './assets/solana.png'
import usdt from './assets/usdt.png'

function App() {

  const [count, setCount] = useState(0)

  const [BTCprice, setBTCPrice] = useState("")
  const [ETHprice, setETHPrice] = useState("")
  const [SOLprice, setSOLPrice] = useState("")
  const [USDTprice, setUSDTPrice] = useState("")

  const apiKey = '6c1e5086-47ca-4a43-82fe-e018c704c0ed'

  const api = axios.create({
    method: 'GET',
    baseURL: '/api',
    headers: {
      'X-CMC_PRO_API_KEY':apiKey,
      Accept:'application/json',
    },
  })

  useEffect(() => {
    api('/v1/cryptocurrency/quotes/latest?symbol=BTC&convert=INR')
      .then(response => {
        const BTCprice = response.data.data.BTC.quote.INR.price
        const BTCpriceFloat = parseFloat(BTCprice.toFixed(4))
        setBTCPrice(BTCpriceFloat)
      })
      .catch(error => console.log(error))

    api('/v1/cryptocurrency/quotes/latest?symbol=ETH&convert=INR')
      .then(response => {
        const ETHprice = response.data.data.ETH.quote.INR.price
        const ETHpriceFloat = parseFloat(ETHprice.toFixed(4))
        setETHPrice(ETHpriceFloat)
      })
      .catch(error => console.log(error))

    api('/v1/cryptocurrency/quotes/latest?symbol=SOL&convert=INR')
      .then(response => {
        const SOLprice = response.data.data.SOL.quote.INR.price
        const SOLpriceFloat = parseFloat(SOLprice.toFixed(4))
        setSOLPrice(SOLpriceFloat)
      })
      .catch(error => console.log(error))

    api('/v1/cryptocurrency/quotes/latest?symbol=USDT&convert=INR')
      .then(response => {
        const USDTprice = response.data.data.USDT.quote.INR.price
        const USDTpriceFloat = parseFloat(USDTprice.toFixed(4))
        setUSDTPrice(USDTpriceFloat)
      })
      .catch(error => console.log(error))
  }, [count]);

  return (
    <div className="flex flex-col justify-center items-center lg:h-dvh w-screen">
      <div className="flex flex-col grid grid-cols-1 xl:grid-cols-2 grid-rows-2 gap-4 rounded-xl bg-custom-orange p-4">
        <div className="flex flex-col bg-custom-dark-blue h-[300px] w-[600px] rounded-xl border-solid border-4 border-custom-light-yellow">
          <div className="flex flex-row bg-custom-dark-blue rounded-xl">
            <img src={bitcoin} className="object-scale-down h-16 w-16 bg-custom-dark-blue m-4 mr-0"/>
            <p className="font-black text-6xl text-slate-200 m-4 bg-custom-dark-blue">Bitcoin</p>
          </div>
          <p className="font-black text-4xl text-slate-200 m-4 bg-custom-dark-blue">Rs.<span className="font-black text-4xl bg-custom-dark-blue">{BTCprice}</span></p>
        </div>
        <div className="flex flex-col bg-custom-dark-blue h-[300px] w-[600px] rounded-xl border-solid border-4 border-custom-light-yellow">
          <div className="flex flex-row bg-custom-dark-blue rounded-xl">
            <img src={ethereum} className="object-scale-down h-16 w-16 bg-custom-dark-blue m-4 mr-0"/>
            <p className="font-black text-6xl text-slate-200 m-4 bg-custom-dark-blue">Ethereum</p>
          </div>
          <p className="font-black text-4xl text-slate-200 m-4 bg-custom-dark-blue">Rs.<span className="font-black text-4xl bg-custom-dark-blue">{ETHprice}</span></p>
        </div>
        <div className="flex flex-col bg-custom-dark-blue h-[300px] w-[600px] rounded-xl border-solid border-4 border-custom-light-yellow">
          <div className="flex flex-row bg-custom-dark-blue rounded-xl">
            <img src={solana} className="object-scale-down h-16 w-16 bg-custom-dark-blue m-4 mr-0"/>
            <p className="font-black text-6xl text-slate-200 m-4 bg-custom-dark-blue">Solana</p>
          </div>
          <p className="font-black text-4xl text-slate-200 m-4 bg-custom-dark-blue">Rs.<span className="font-black text-4xl bg-custom-dark-blue">{SOLprice}</span></p>
        </div>
        <div className="flex flex-col bg-custom-dark-blue h-[300px] w-[600px] rounded-xl border-solid border-4 border-custom-light-yellow">
          <div className="flex flex-row bg-custom-dark-blue rounded-xl">
            <img src={usdt} className="object-scale-down h-16 w-16 bg-custom-dark-blue m-4 mr-0"/>
            <p className="font-black text-6xl text-slate-200 m-4 bg-custom-dark-blue">USDT</p>
          </div>
          <p className="font-black text-4xl text-slate-200 m-4 bg-custom-dark-blue">Rs.<span className="font-black text-4xl bg-custom-dark-blue">{USDTprice}</span></p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center m-4">
        <button className="flex justify-center items-center text-4xl font-black text-custom-dark-blue bg-custom-light-yellow mt-5 p-5 w-[1250px] rounded-xl hover:bg-custom-orange hover:text-custom-light-yellow"
                onClick={() => setCount(count+1)}>
          Refresh Prices
        </button>
      </div>
    </div>
  )
}

export default App
