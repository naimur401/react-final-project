import SectionTittle from "../../../Components/SectionTittle/SectionTittle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css';


const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTittle subHeading="check it out"  heading="Featured Item"></SectionTittle>

            <div className="md:flex justify-center pb-20  pt-12 px-36">

            
            <div>
                <img src={featuredImg} alt="" />
            </div>
            <div className="md:ml-10">
                <p>5/16/2024</p>
                <p className="uppercase">WHERE CAN I GET SOME?</p>
                
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptated , deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                <button className="btn btn-outline border-0 border-b-4">Order Now</button>
            </div>
        </div>
        </div>
    );
};

export default Featured;