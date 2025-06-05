import React from 'react'
import { FaLifeRing } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaUmbrella } from "react-icons/fa";
import { FaCoffee } from "react-icons/fa";


const FeatureLeftItem =[
    
    {
        icon:<FaLifeRing/>,
              title:"Affordable Web Services",
              description:"All our services are offered at competitive market rates which offer excellent value for your money."
    },
     {
        icon:<FaStar/>,
              title:"Great Support",
              description:"We have a robust support structure which you can utilize 24/7, getting answers to all queries."
    },
     {
        icon:<FaUmbrella/>,
              title:"We Are On Time And Budget",
              description:"You can stay assured that we will never go over budget as fees are paid upfront."
    },
     {
        icon:<FaCoffee/>,
              title:"Social Marketing",
              description:"We create social marketing tactics that are creative and geared towards gaining traffic quickly and efficiently."
    }
]

const LeftChooseitem = () => {
  return (
    <>
    {
        FeatureLeftItem.map((leftItem,index)=>(
            <div key={index} className="flex mb-8">
        
      <div className="w-1/4">
        <div className="text-3xl text-cyan-500 p-4 border bg-neutral-100 border-cyan-500 rounded-full flex items-center justify-center w-16 h-16">

          {leftItem.icon}
        </div>
      </div>
      <div className="w-3/4">
        <h3 className="text-xl font-semibold mb-2">{leftItem.title}</h3>
        <p className="text-gray-600">{leftItem.description}</p>
      </div>
    </div>
        ))
    }
    
    </>
  )
}

export default LeftChooseitem