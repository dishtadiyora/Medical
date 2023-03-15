import React from 'react'
import { Seller } from './Seller'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export const Mainseller = () => {
    const data =[
        {
            id: "1",
            img: "asset/b1.jpg",
            heading:"Hospital equipment",
            text: "Dairy Milk Whole nut",
            price: "$12.00"
        },
        {
            id: "2",
            img: "asset/b2.jpg",
            heading:"Accessories,medical",
            text: "Anti-septic Dry Handel Gel",
            price: "$12.00"
        },
        {
            id: "3",
            img: "asset/b3.jpg",
            heading:"Medical",
            text: "Anti-septic Dry Handel Gel",
            price: "$12.00"
        },
        {
            id: "4",
            img: "asset/b4.jpg",
            heading:"supplies",
            text: "Independent Living",
            price: "$2.00"
        }
    ]
  return (
    <>
    <div>
            <div className='mainproduct'>
            <div className='container-fulid mx-5'>
                    <div className='row'>                      
                        {
                            data.map((val) => {
                                return (
                                    <>
                                        <Seller
                                            img={val.img}
                                            text={val.text}
                                            heading={val.heading}
                                            price={val.price}
                                       
                                        />
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
