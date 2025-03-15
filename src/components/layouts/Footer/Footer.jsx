
import { Link } from "react-router-dom";
import logo from '../../../assets/img/logo.png'
const Footer = () => {
    let liStyle='p-5 hover:bg-[#d3e2df1c]  w-[100%] text-center'
    return (
        <footer className=" bg-[#364945d1] mt-[65px] text-white text-[20px]">
           <section className=" sm:w-[100%] md:w-[1200px]  lg:w-[1700px] mx-auto bg-[#7af5dc1c] grid sm:grid-cols-2 lg:grid-cols-4 ">
            
            <ul className="flex flex-col items-center gap-10 ">
        <li className={liStyle}  ><Link to="/blogs">Blogs</Link></li>
        <li className={liStyle}><Link to="/lienhe">Liên hệ</Link></li>
        <li className={liStyle}><Link to="/duan"> Dự án</Link></li>
        <li className={liStyle}><Link to="/tuvan">Tư vấn thiết kế</Link></li>
      </ul>
           
            <div>2</div>
            <div></div>
            <div className="uppercase">
                <img width='80px' src={logo} alt="logo" />
                <span className="mt-[20px] block">địa chỉ: đường B15- Nguyễn Lương bằng quận 7</span>
                <span className="mt-[20px] block">xưởng sản xuất : Ngã tư Lê Văn Lương và Nguyễn Bình</span>
            </div>

           </section>
        </footer>
    );
};

export default Footer;