import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-custom-dark-blue rounded-lg">
        <div className="h-64 bg-red-500 rounded-lg">
          <div className="w-96 bg-yellow-100 rounded-lg">
            {/* BTC */}
          </div>
          <div>
            {/* ETH */}
          </div>
        </div>
        <div className="h-64 bg-red-500 rounded-lg">
          <div>
            {/* ADA */}
          </div>
          <div>
            {/* SOL */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
