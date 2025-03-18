import clsx from 'clsx'
import {useState } from 'react';
import {  Link } from 'react-router-dom';
import logo from '../../../assets/img/logo.png'
import styles from './style.module.css'
import Iphone_menu from './iphone_menu';
import Cart from '../../../assets/svg/cart/Cart';
import Signin from '../../../assets/svg/sign_in/sign_in';

const Header = () => {
  // transition duration-200 md:hidden fixed left-[100%]  h-[100vh] w-[50vw] top-0  bg-green-50 opacity-90    justify-between gap-[20px] text-black font-semibold  text-center 
  const[topMenu,setTopmenu]=useState(false)
  let ulStyle = "transition-all duration-900 translate-x-[-100%]   delay-1000 md:hidden fixed left-[100%]  h-[100vh] w-[50vw] top-0  bg-green-50 opacity-90    justify-between gap-[20px] text-black font-semibold  text-center " 
  var liStyle ='relative text-[22px] transition-all  delay-75 hover:scale-110'
 const dataPath =[
    {
      path:'/',
      title:'Trang chủ'
    },
    {
      path:'/Blogs',
      title:'blogs'
    },
    {
      path:'/lienhe',
      title:'liên hệ'
    },
    {
      path:'/duan',
      title:'Dự án'
    },
    {
      path:'/tuvan',
      title:'Tư vấn thiết kế'
    }
  ]
  function handleChange(){
   setTopmenu(!topMenu)
  }
  
    
    return (
        <>
            <header className=' bg-gradient-to-t from-[#FFFAF0] bg-[#ebffc6] '>
      <nav className="  text-[#00573d] p-2  container   sm:w-[100%] md:w-[1200px]  lg:w-[1700px] flex justify-between md:justify-around  lg:justify-between items-center mx-auto -50  sticky__header  " > 
     <img src={logo} alt=" bị lỗi" className='w-[80px] md:w-[100px] p-2' />
      {/* nav-bar */}
      <ul className='hidden md:flex justify-between gap-[35px] font-normal '>
       {dataPath.map(
        (item,index)=>{
          
      return(<li  key={index}><Link className={clsx(liStyle,styles.liUnderline)} to={item.path} >{item.title}</Link></li>)
        
        }
         )}
      </ul>
      {/* nav-bar responsive */}
      {!topMenu && (
        <Iphone_menu handleChange={handleChange} ulStyle={ulStyle} /> ) }
      {/* button */}
    <div className='mr-5 hidden lg:flex gap-2'>
      <button className='  md:flex items-center justify-center transition-all  delay-75 px-2 h-10 w-30 bg-white rounded-full text-black hover:bg-amber-50  hover:text-black  hover:scale-110 first-letter:uppercase'>
        Đăng kí  <Signin/>
        </button>
        
      <button className='  md:flex items-center justify-center   transition-all  delay-75 hover:scale-110 px-2 h-10 w-30 bg-green-300 rounded-full  text-white hover:text-black'>
         đăng nhập 
         </button>
         
        <Cart/>
    </div>
    {/* toggle-icon */}
    <svg onClick={handleChange}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#00573d" className="size-8 md:hidden sm:inline">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"  />
    </svg>
    </nav>
    
    
    </header>
        </>
    );
};

export default Header;