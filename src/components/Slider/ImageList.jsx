
import './style.css'
import ImageItem from './ImageItem';
import pic1 from '../../assets/img/anh_1.jpg'
import pic2 from '../../assets/img/anh_2.jpg'
import pic4 from '../../assets/img/anh_4.jpg'
import pic5 from '../../assets/img/anh_5.jpg'
const ImageList = () => {


let handleClick=()=>{
    let count =0
    count= count+1 
}
    const images=[pic1,pic2,pic4,pic5]
    
    
    return (
        <>
         <section id='image_list' className='  overflow-hidden rounded-t-2xl  w-[500px] md:w-[800px]  lg:w-[1200px] mt-[65px] mx-auto  flex  '> 
           { images.map((img,indx)=>
           ( <ImageItem key={indx} prop={img} /> )  
        )}  
        </section>
        <div className='hidden sm:block w-[380px] sm:w-[500px] md:w-[800px]  lg:w-[1200px] mx-auto relative bottom-[150px] sm:bottom-[170px] md:bottom-[280px] lg:bottom-[380px] text-white  '>
            <button onClick={handleClick} id='prev' className=' cursor-pointer absolute left-6 min-w-10 min-h-10 rounded-full bg-[#dcdcdc2a] flex justify-center items-center  '>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
             <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
            </svg>
            </button>
            <button  onClick={handleClick}  id='next' className='next cursor-pointer absolute right-6 min-w-10 min-h-10 rounded-fullbg-[#dcdcdc2a]  flex justify-center items-center '> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
             <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>

            </button>
        </div>
        </>
    );
};

export default ImageList;