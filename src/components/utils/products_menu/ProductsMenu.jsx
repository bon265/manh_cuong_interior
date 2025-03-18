// @flow strict
import { Link } from "react-router-dom";
import { useState } from "react";

import Banghe_dropdown from "./itemMenu/Banghedropdown"
import Giuongdropdown from "./itemMenu/Giuong_dropdown";
import Tuao from "./itemMenu/Tuao";
import styles from './style.module.css'
import ArrowDown from "../../../assets/svg/Arrow_down/ArrowDown";
import Banphan from "./itemMenu/Banphan";



function ProductsMenu() {

    var linkStyle='relative hover:bg-[#ecfaf6] p-3 flex gap-2 '
    const [isSelected,setIsSElect] =useState(false)
    const handleSelect = ()=>{
        setIsSElect(true)

    }
    return (
     
         <div className=" font-bold mt-10 p-4 ">
            <nav className=" uppercase flex  text-[#00573d] p-2  flex items-center mx-auto  relative ">
                {/* tiêu đề danh mục */}
                    <div className="cursor-pointer flex flex-row-reverse items-center mr-[%] ">  
                        <h2 className="whitespace-nowrap ">DANH MỤC</h2>
                        <svg   xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#00573d" className="size-4 mr-2  sm:inline">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"  />
                </svg>
                    </div>
                {/* menu-bar */}
                <menu className="whitespace-nowrap relative   lg:left-[5%] lg:flex md:grid md:grid-rows-2 hidden md:block" >
                    <ul className="right-0 relative   flex " >
                    {/* item1-bàn ghế */}
                    <li className={styles.menu} >   
                    <Link className={linkStyle} onClick={handleSelect}  to="/">  <ArrowDown/>  Bàn ghế </Link>
                    <Banghe_dropdown item1={styles.dropdown} /> 
                    </li>   
              
                    {/* item2-giường */}
                     <li className={styles.menu} >
                     <Link className={linkStyle} onClick={handleSelect} to="/"> <ArrowDown/> giường</Link>    
                     <Giuongdropdown item2={styles.dropdown} /> 
                     </li>  
                        {/* item3-tuao */}
                        <li className={styles.menu}>
                        <Link onClick={handleSelect} className={linkStyle} to="/"> <ArrowDown/>  tủ áo</Link>
                        <Tuao item3= {styles.dropdown}/>
                        </li>
                        {/*item4  */}
                        <li className={styles.menu}>
                             <Link onClick={handleSelect} className={linkStyle} to="/"> <ArrowDown/> bàn phấn</Link>
                             <Banphan item4={styles.dropdown}/>
                             </li>
                       
                       {/* item5 */}
                        <li className={styles.menu}>  <Link onClick={handleSelect} className={linkStyle} to="/"> <ArrowDown/> kệ tivi</Link></li>
                    </ul>
                    <ul className="flex">
                        {/* item6 */}
                        <li className={styles.menu}><Link onClick={handleSelect} className={linkStyle} to="/"> <ArrowDown/> tủ giày </Link></li>
                        {/* item7 */}
                        <li className={styles.menu}><Link onClick={handleSelect} className={linkStyle} to="/"> <ArrowDown/> bàn ăn</Link></li>
                        {/* item8 */}
                        <li className={styles.menu}><Link onClick={handleSelect} className={linkStyle} to="/"> <ArrowDown/> tủ bếp</Link></li>
                        {/* item9 */}
                        <li className={styles.menu}><Link onClick={handleSelect} className={linkStyle} to="/"> <ArrowDown/> tủ rượu</Link></li>
                       </ul>
                </menu>
            </nav>
        </div>
    
    );
};

export default ProductsMenu;