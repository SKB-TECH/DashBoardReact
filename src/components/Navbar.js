import React from 'react';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line} from 'react-icons/ri';
import { FiShoppingCart } from 'react-icons/fi';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useEffect } from 'react';


import avatar from '../data/avatar.jpg'
import {Notification,Carts,Chat,UserProfileData} from '.';
import { useStateContext } from '../context/ContextProvider';
import { icons } from 'react-icons';

const NavButton=({title,customFun,icon,color,dotColor})=>(
    <TooltipComponent content={title} position="BottomCenter" >
        <button type='button' onClick={customFun} style={{color}}
        className="relative text-xl rounded-full p-2 m-2 hover:bg-light-gray">
            <span style={{background:dotColor}} className="absolute inline-flex rounded-full h-2 w-2 right-2 left-2">
                {icon}
            </span>
        </button>
    </TooltipComponent>
)

const handlClick=({cart})=>{

}

const Navbar = () => {
    const {activeMenu,setActiveMenu,ischecked,setChecked,handlClick}=useStateContext();
    return (
        <div className='flex justify-between p-2 md:mx-6 relative'>
            <NavButton title="Menu" customFun={()=>setActiveMenu((preActiveMenu)=>!preActiveMenu)} color="blue" icon={<AiOutlineMenu/>}/>
            <div className='flex'>
                <NavButton title="Cart" 
                    customFun={()=>handlClick('Cart')} 
                    color="blue" 
                    icon={<FiShoppingCart/>}
                />
                <NavButton title="Chat" 
                    customFun={()=>handlClick('Chat')} 
                    dotColor="#03c9d7" 
                    color="blue"
                    icon={<BsChatLeft/>}
                />

                <NavButton title="Notification" 
                    customFun={()=>handlClick('Notification')} 
                    dotColor="#03c9d7" 
                    color="blue"
                    icon={<RiNotification3Line/>}
                />
                <TooltipComponent content="profil" position="BottomCenter">
                    <div className='flex item-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-b-lg'>
                        <img src={avatar}  className="rounded-full w-8 h-8"/>
                        <p className='p-1'>
                            <span className='text-gray-400 text-14'>Hi,</span>{" "}
                            <span className='text-gray-400 font-bold ml-4 text-14'>Skb-tech</span>
                        </p>
                        <MdKeyboardArrowDown className='text-gray-400 text-14 '/>
                    </div>
                    
                </TooltipComponent>

                { ischecked.cart && <Carts/>}
                { ischecked.chat && <Chat/>}
                { ischecked.useProfile&& <useProfile/>}
                { ischecked.notification && <Notification/>}
            </div>
        </div>
    );
};

export default Navbar;