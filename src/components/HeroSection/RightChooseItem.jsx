import React from 'react'
import { FaGem,FaGift,FaCut,FaShoppingCart } from "react-icons/fa";



const FeatureRightItem =[
    
    {
        icon:<FaGem/>,
        title:"ROI Driven Focus",
        description:"Our solutions are focused towards high ROI and getting the most out of every penny spent."
    },
     {
        icon:<FaGift />,
          title:"Talented Team Of Developers",
        description:"Our team has some very talented individuals in the industry that have a wealth of experience."
    },
     {
        icon:<FaCut/>,
              title:"Continuous Improvement",
        description:"Our strategies and services are constantly evolving with our past experiences which improves our future projects."
    },
     {
        icon:<FaShoppingCart/>,
               title:"Clear Communication",
        description:"We are a firm that listens to our clients and understands them to deliver amazing results."
    }
]

const RightChooseitem = () => {
  return (
    <>
    {
        FeatureRightItem.map((rightItem,index)=>(
            <div key={index} className=" w-full flex  mb-8  ">
      <div className="order-2 md:order-1 sm:order w-3/4">
        <h3 className="text-xl font-semibold mb-2">{rightItem.title}</h3>
        <p className="text-gray-600">{rightItem.description}</p>
      </div>
      <div className="order-1 md:order-2 w-1/4 flex justify-between md:justify-end ">
        <div className="text-3xl text-cyan-500 p-4 border bg-neutral-100 border-cyan-500 rounded-full flex items-center justify-center w-16 h-16">
          {rightItem.icon}
        </div>
      </div>
    </div>
        ))
    }
    
    </>
  )
}

export default RightChooseitem