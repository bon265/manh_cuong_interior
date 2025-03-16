
import { Link } from "react-router-dom";
import logo from '../../../assets/img/logo.png'
const Footer = () => {
    let liStyle='p-1 hover:bg-[#d3e2df1c]  w-[100%] text-center'
    return (
        <footer className=" bg-[#364945d1] mt-[65px] text-white text-[20px]">
           <section className=" sm:w-[100%] md:max-w-[1200px]  lg:max-w-[1700px] mx-auto bg-[#7af5dc1c] grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4  p-5" >
            
            <ul className="flex flex-col items-center gap-10 mt-4">
                <h2 className="font-bold">PHẦN CHUNG</h2>
        <li className={liStyle}  ><Link to="/blogs">Blogs</Link></li>
        <li className={liStyle}><Link to="/lienhe">Liên hệ</Link></li>
        <li className={liStyle}><Link to="/duan"> Dự án</Link></li>
        <li className={liStyle}><Link to="/tuvan">Tư vấn thiết kế</Link></li>
      </ul>
           
      <ul className="flex flex-col items-center gap-10 mt-4">
                        <h2 className="font-bold">HỖ TRỢ KHÁCH HÀNG</h2>
        <li className={liStyle}  ><Link to="/">chính sách quy định chung</Link></li>
        <li className={liStyle}><Link to="/">chính sách quy thanh toán</Link></li>
        <li className={liStyle}><Link to="/"> chính sách quy bảo hành và sửa chửa</Link></li>
        <li className={liStyle}><Link to="/">hướng dẫn mua hàng</Link></li>
        <li className={liStyle}><Link to="/">chính sách bảo mật</Link></li>
        <li className={liStyle}><Link to="/">những câu hỏi thường gặp</Link></li>
      </ul>
            <ul className="">
               <div className="flex">
                    <li><img className="mx-1.5 mt-4" src="https://w.ladicdn.com/5fcb7ec2f711010011f0629a/mastercard-20230723032025-aaqld.svg" alt="" width='30px' /></li>
                    <li><img className="mx-1.5 mt-4" src="https://w.ladicdn.com/5fcb7ec2f711010011f0629a/visa-20230723031958-rgpjs.svg" alt="" width='30px' /></li>
                    <li><img className="mx-1.5 mt-4" src="https://w.ladicdn.com/5fcb7ec2f711010011f0629a/jcb-20230723031924-qbxvw.svg" alt="" width='30px' /></li>
                    <li><img className="mx-1.5 mt-4" src="https://w.ladicdn.com/5fcb7ec2f711010011f0629a/cash-20230723031831-2lfhd.svg" alt="" width='30px' /></li>
                    <li><img className="mx-1.5 mt-4" src="https://w.ladicdn.com/5fcb7ec2f711010011f0629a/installment-20230723031727-nsksu.svg" alt="" width='30px' /></li>
                    <li><img className="mx-1.5 mt-4" src="https://w.ladicdn.com/5fcb7ec2f711010011f0629a/alepay-logo-20230723031647-zrwnk.svg" alt="" width='30px' /></li>
               </div>
               <div className="flex">
                    <li><img className="mx-1.5 mt-4" src="https://w.ladicdn.com/5fcb7ec2f711010011f0629a/vnpay-logo-20230723031610-wluan.svg" alt="" width='30px' /></li>
                    <li><img className="mx-1.5 mt-4" src="https://w.ladicdn.com/5fcb7ec2f711010011f0629a/mpos-logo-20230723031534-iebdv.svg" alt="" width='30px' /></li>
 
               </div>
               <h2 className="my-10 font-bold">CHỨNG NHẬN</h2>
               <ul className="flex gap-3">
                <li><img width='80px' src="https://media.loveitopcdn.com/26706/thumb/viva-img-6.png" alt="" /></li>
                <li><img width='80px' src="https://media.loveitopcdn.com/26706/thumb/viva-img-7.png" alt="" /></li>
                <li><img width='80px' src="https://media.loveitopcdn.com/26706/thumb/verified-dmca-pro.png" alt="" /></li>
               </ul>
                
            </ul>
            <div className="uppercase mt-4">
                <h2 className="font-bold">LIÊN HỆ VỚI CHÚNG TÔI</h2>
                <img className="mt-4" width='80px' src={logo} alt="logo" />
                <span className="mt-[20px] block">địa chỉ: đường B15- Nguyễn Lương bằng quận 7</span>
                <span className="mt-[20px] block">xưởng sản xuất : Ngã tư Lê Văn Lương và Nguyễn Bình</span>
            </div>

           </section>
        </footer>
    );
};

export default Footer;