import { useNavigate } from "react-router-dom"
import { MdNavigateNext } from "react-icons/md";

const Products = ({image,link}) => {
    const navigate=useNavigate()
  return (
    <>
      <div className="products container">
         <h2>PRODUCTS</h2>
         <div className="liners container">
            <div className="line"></div>
            <div className="liner"></div>
            <div className="line"></div>
         </div>
         <div className="products_box">
            <div data-aos="fade-up" className="products_blog">
                <img src={image} alt="" />
                <button onClick={()=>navigate(link)}>corn <MdNavigateNext className="icon"/></button>
            </div>
            <div data-aos="fade-up" className="products_blog">
                <img src={image} alt="" />
                <button onClick={()=>navigate(link)}>corn <MdNavigateNext className="icon"/></button>
            </div>
            <div data-aos="fade-up" className="products_blog">
                <img src={image} alt="" />
                <button onClick={()=>navigate(link)}>corn <MdNavigateNext className="icon"/></button>
            </div>
            <div  data-aos="fade-right" className="products_blog">
                <img src={image} alt="" />
                <button onClick={()=>navigate(link)}>corn <MdNavigateNext className="icon"/></button>
            </div>
            <div data-aos="fade-up" className="products_blog">
                <img src={image} alt="" />
                <button onClick={()=>navigate(link)}>corn <MdNavigateNext className="icon"/></button>
            </div>
            <div data-aos="fade-left" className="products_blog">
                <img src={image} alt="" />
                <button onClick={()=>navigate(link)}>corn <MdNavigateNext className="icon"/></button>
            </div>
         </div>
      </div>
    </>
  )
}

export default Products