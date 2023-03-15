import React from 'react';
import Blogs from './Blogs';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
export const MainBlogs = () => {
    const data = [
        {
            id: "1",
            img: "asset/a.jpg",
            heading: "December 27,2020",
            text: "Review Of Healthy Breakfast Meals For Energy Boost",
        },
        {
            id: "2",
            img: "asset/B.jpg",
            heading: "December 27,2020",
            text: "Mahindra To Lead Fords India Operations New Jv To Focus",
        },
        {
            id: "3",
            img: "asset/C.jpg",
            heading: "December 27,2020",
            text: "Reality Check Corporate Tax Cut Unlikely To Increase Investment Or Employment",
        },
        {
            id: "4",
            img: "asset/d.jpg",
            heading: "December 27,2020",
            text: "How To Choose Perfect Gadgets",
        },
        {
            id: "5",
            img: "asset/e.jpg",
            heading: "December 27,2020",
            text: "Diet Is A Relationship Between You And Your Body",
        },
        {
            id: "6",
            img: "asset/f.jpg",
            heading: "December 27,2020",
            text: "Model Shares Her Packing List For Summer",
        },
        {
            id: "7",
            img: "asset/g.jpg",
            heading: "December 27,2020",
            text: "Interior Inspiration To Hidden In The Middle Of Text",
        },
        {
            id: "8",
            img: "asset/h.jpg",
            heading: "December 27,2020",
            text: "Amazon Gets CCI Nod To Acquire 49% Stake In",
        },
        {
            id: "9",
            img: "asset/i.jpg",
            heading: "December 27,2020",
            text: "Clearing Corporations Get Sebi Nod To Invest In Overnight Funds",
        },
        {
            id: "10",
            img: "asset/j.jpg",
            heading: "December 27,2020",
            text: "Oin Swedish Popstars Icona Pop On Gotland",
        },
        {
            id: "11",
            img: "asset/k.jpg",
            heading: "December 27,2020",
            text: "Xiaomi Posts Slowest Ever Revenue-Growth In Third Quarter",
        },
        {
            id: "12",
            img: "asset/l.jpg",
            heading: "December 27,2020",
            text: "Nothing Compares To Swedish Summerearch Lab N95 Face Mask",
        },
        {
            id: "13",
            img: "asset/m.jpg",
            heading: "December 27,2020",
            text: "Teamwork Of Team Members Together",
        },
        {
            id: "14",
            img: "asset/n.jpg",
            heading: "December 27,2020",
            text: "WhatsApp Shared ‘Technical Jargon’ With Govt Agency, Didn’t",
        },
        {
            id: "15",
            img: "asset/o.jpg",
            heading: "December 27,2020",
            text: "How To Become A Successful Young",
        },
        {
            id: "16",
            img: "asset/p.jpg",
            heading: "December 27,2020",
            text: "The User Can Also Replenish A Balance    ",
        },
    ]
    return (
        <div>
            <div className='mainblog'>
                <div className='container-fulid mx-5'>
                    <div className='row'>
                        {
                            data.map((val) => {
                                return (
                                    <>
                                        <Blogs
                                            img={val.img}
                                            text={val.text}
                                            heading={val.heading}


                                        />
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}


