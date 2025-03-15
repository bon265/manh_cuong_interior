

const ImageItem = ({prop,id}) => {

   

    return (
        <>
            <figure>
             <div className='  w-[500px] md:w-[800px]  lg:w-[1200px]'><img  key={id} src={prop} alt="" /> </div>     
            <figcaption className= 'text-center underline' >nội thất cho tiệm spa</figcaption>
          </figure>   
        </>
    );
};

export default ImageItem;