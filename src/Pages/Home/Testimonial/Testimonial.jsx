import SectionTittle from "../../../Components/SectionTittle/SectionTittle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";

import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
const Testimonial = () => {
    const [reviews, setReviews]=useState([]);
    useEffect(()=>{
        fetch('reviews')
        .then(res=>res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <section className="my-20">
            <SectionTittle

                subHeading="What Our Client Say"
                heading={'Testimonials'}



            >


            </SectionTittle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
               
               {
                reviews.map(review => <SwiperSlide
                key={review._id}
                
                >
                    <div>
                        <p></p>
                    </div>

                </SwiperSlide>)
               }
            </Swiper>

        </section>
    );
};

export default Testimonial;