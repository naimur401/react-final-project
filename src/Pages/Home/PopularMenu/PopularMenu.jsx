import { useEffect, useState } from "react";
import SectionTittle from "../../../Components/SectionTittle/SectionTittle";
import MenuIteam from "../../Shared/MenuIteam/MenuIteam";


const PopularMenu = () => {
    const [menu,setMenu]=useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data =>{
            const popularIteams=data.filter(item => item.category ==='popular');

            
         setMenu(popularIteams)})
        },[])
    
    return (
      <section className="mb-12">
        <SectionTittle
        heading="From our menu"
        subHeading="Check it out"
        
        
        >

          
        </SectionTittle>
        <div className="grid md:grid-cols-2 gap-10">
            {
                menu.map(iteam=> <MenuIteam
                
                key={iteam._id}
                iteam={iteam}
                
                ></MenuIteam> )
            }
        </div>




      </section>
    );
};

export default PopularMenu;