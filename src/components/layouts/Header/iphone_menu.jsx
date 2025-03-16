// @flow strict



function Iphone_menu( {ulStyle,handleChange}) {
    return (
       
         <section>
      <ul className={ ulStyle + "z-40" }   onClick={handleChange} >
        <li  className='transition-all   delay-75 mt-5 hover:scale-110'><a href="/">trang chủ</a></li>
        <li className='transition-all   delay-75 mt-5 hover:scale-110' ><a href="/">blogs</a></li>
        <li className='transition-all   delay-75 mt-5 hover:scale-110'><a href="/">liên hệ</a></li>
        <li className='transition-all    delay-75 mt-5 hover:scale-110'><a href="/">Dự án</a></li>
        <li className='transition-all   delay-75 mt-5 hover:scale-110'><a href="/"> Tư vấn thiết kế</a></li>
        <li className=' flex flex-col  gap-5 items-center mt-5 '>
        <button className='  md:hidden block transition-all  delay-75 px-2 h-10 w-30 bg-white rounded-full text-black hover:bg-amber-50 mr-3 hover:text-black  hover:scale-110 first-letter:uppercase'>đăng kí</button>
        <button className='  md:hidden block transition-all hover:scale-110  delay-75  px-2 h-10 w-30 bg-green-300 rounded-full  text-white hover:text-black'> đăng nhập</button>
        </li>
      </ul>
      {/* button for iphone */}
      
     </section>  
    );
};

export default Iphone_menu;