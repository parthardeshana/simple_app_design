import { Button } from '@mui/material'
import React, { useState } from 'react'

// brand images 
import paytm from '../assets/images/paytm.png'
import zomato from '../assets/images/zomato.png'
import dunzo from '../assets/images/dunzo.png'
import bigbasket from '../assets/images/basket.png'
import groffers from '../assets/images/groffers.png'

// icons 
import HomeIcon from '@mui/icons-material/Home';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DoneIcon from '@mui/icons-material/Done';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

function Simpl() {
    const [paymentMethod, setpaymentMethod] = useState('')
    // temporary data 
    const brandArr = [
        {
            image: zomato,
            name: "Zomato"
        },
        {
            image: dunzo,
            name: "Dunzo"
        },
        {
            image: bigbasket,
            name: "Bigbasket"
        },
        {
            image: groffers,
            name: "groffers"
        },
        {
            image: bigbasket,
            name: "Bigbasket2"
        },
        {
            image: zomato,
            name: "Zomato"
        },
        {
            image: dunzo,
            name: "Dunzo"
        },
        {
            image: paytm,
            name: "Paytm"
        },
        {
            image: groffers,
            name: "groffers"
        },
        {
            image: bigbasket,
            name: "Bigbasket3"
        },
        {
            image: zomato,
            name: "Zomato"
        },
        {
            image: dunzo,
            name: "Dunzo"
        },
        {
            image: bigbasket,
            name: "Bigbasket4"
        },
        {
            image: groffers,
            name: "groffers"
        },
        {
            image: bigbasket,
            name: "Bigbasket5"
        },
        {
            image: zomato,
            name: "Zomato"
        },
        {
            image: dunzo,
            name: "Dunzo"
        },
        {
            image: bigbasket,
            name: "Bigbasket6"
        },
        {
            image: groffers,
            name: "groffers"
        },
        {
            image: bigbasket,
            name: "bigbasket7"
        },
    ]
    return (
        <div className="mx-auto bg-gray-100 items-center relative"> {/* remove class : max-w-sm */}
            <div className='p-6 card-bg justify-between flex items-start mb-8 card-wrapper'>
                <div className="shrink-0 flex items-center">
                    <div className='rounded-full border-2 border-white p-1 text-white '>
                        RM
                    </div>
                    <div className='mx-2'>
                        <p className="text-gray-300 text-justify">Hello</p>
                        <div className='flex'>
                            <div className="text-xl font-medium text-white">
                                Parth
                            </div>
                            <div className='mx-2 my-auto'>
                                <ArrowForwardIosIcon className='text-white' style={{ fontSize: "13px" }} />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-gray-300">Upgrade credit limit </p>
                    <div className='flex justify-end'>
                        <div className="text-xl font-medium text-white">
                            ₹16,000
                        </div>
                        <div className='mx-2 my-auto'>
                            <ArrowForwardIosIcon className='text-white' style={{ fontSize: "13px" }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='mainContent w-full' >
                <div className="p-6 mx-auto w-11/12 bg-white rounded-xl shadow-lg items-center ">  {/* remove class : max-w-sm */}
                    <div className='justify-between flex items-center '>
                        <div className="shrink-0">
                            <p className="text-gray-500">Amount due</p>
                        </div>
                        <div>
                            <div className="text-xl font-medium text-black">₹26,000</div>
                            <p className="text-black-200 text-xs">Due by April 20</p>
                        </div>
                    </div>
                    <hr className='border-dashed border-gray-400 mt-6 mb-4 ' />
                    <div className='justify-between flex items-center '>
                        <div className='flex items-center'>
                            <DescriptionOutlinedIcon fontSize='small' />
                            <p className="text-gray-500 my-4 mx-2">Bill Amount</p>
                        </div>
                        <div>
                            <p className="text-gray-500">₹41,000</p>
                        </div>
                    </div>
                    <hr className='border-solid border-gray-400 my-4' />
                    <div className='justify-between flex items-right '>
                        <div className="shrink-0">
                            <div className='flex items-center'>
                                <DoneIcon fontSize='small' />
                                <p className="text-gray-500 my-4 mx-2">Paid on April 18</p>
                            </div>
                            <div className='flex items-center'>
                                <DoneIcon fontSize='small' />
                                <p className="text-gray-500 my-4 mx-2">Paid on April 19</p>
                            </div>
                            <div className='flex items-center'>
                                <ErrorOutlineIcon className="text-red-500" fontSize='small' />
                                <p className="text-gray-500 my-4 text-red-500 mx-2">Autopay failed</p>
                            </div>
                            <div className='flex items-center'>
                                <ErrorOutlineIcon className="text-red-500" fontSize='small' />
                                <p className="text-gray-500 my-4 text-red-500 mx-2">Autopay failed</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-gray-500 my-4 text-right">₹8,000</p>
                            <p className="text-gray-500 my-4 text-right">2 x ₹8,000</p>
                            <p className="text-gray-500 my-4 text-right text-red-500">2 x ₹4,000</p>
                            <p className="text-gray-500 my-4 text-right text-red-500">₹8,000</p>
                        </div>
                    </div>
                    <div className='justify-between flex items-center mt-6'>
                        <div className="shrink-0">
                            <div className='flex'>
                                <img className="h-8 w-8 p-2 object-contain bg-pink-50 rounded-full" src={paymentMethod ? paymentMethod.image : paytm} alt="ChitChat Logo"></img>
                                <p className="text-gray-500 mx-2">{paymentMethod ? paymentMethod.name : "paytm"}</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-black-600">Change</p>
                        </div>
                    </div>
                    <div className='my-8 bg-cyan-300'>
                        <Button onClick={() => alert("Payment is successfully completed")} style={{ backgroundColor: '#00D1C1' }} variant="contained" fullWidth>PAY NOW</Button>
                    </div>
                </div>
                <div className="p-6 mx-auto w-11/12  my-6 bg-white rounded-xl shadow-lg items-center "> {/* remove class : max-w-sm */}
                    <p className="text-gray-400 text-sm mb-4 text-left">Use Simpl on 4500+ merchants</p>
                    <div>
                        <div className='flex overflow-y-scroll'>
                            {brandArr.map((e, index) => (
                                <div onClick={() => setpaymentMethod(e)} className="brandCard max-w-sm mx-auto h-24 w-16 bg-rose-50 rounded-xl shadow-lg items-center mx-2">
                                    <img className="h-16 w-16 m-auto p-2 object-contain bg-rose-50 rounded-full" src={e.image} alt="Payment Logo"></img>
                                    <p className="text-black-500 text-center text-xs mx-2">{e.name}</p>
                                </div>
                            ))
                            }
                        </div>

                    </div>
                </div>
                <div className="p-4 mx-auto mt-6 bg-gray-200 shadow-lg items-center">
                    <div className='flex justify-between'>
                        <div className='text-center _icon'>
                            <HomeIcon fontSize="large" />
                            <p className="text-black-500"> Home </p>
                        </div>
                        <div className='text-center _icon'>
                            <DescriptionOutlinedIcon fontSize="large" />
                            <p className="text-black-500"> Passbook </p>
                        </div>
                        <div className='text-center _icon'>
                            <AccountBalanceWalletOutlinedIcon fontSize="large" />
                            <p className="text-black-500"> Billbox </p>
                        </div>
                        <div className='text-center _icon'>
                            <MoreVertIcon fontSize="large" />
                            <p className="text-black-500"> More </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Simpl
