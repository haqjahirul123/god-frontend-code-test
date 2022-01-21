import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CustomButtonGroup from './CustomArrow'
import styles from './Style.module.css'

import CarCard from "./CarCard";
import NotFound from '../NotFound';
import { useEffect, useState } from "react";

const CarCarousel=({CarsInfos})=> {
    //const CarsInfos =props.CarsInfos
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1000 },
          items: 4,
          slidesToSlide: 4 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1000, min: 600},
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 600, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        } 
      };

      const carInfoCard= CarsInfos.map((CarInfo)=>{
          return (
             <CarCard  key={CarInfo.id} CarInfo={CarInfo}/>  
         )
    
      })
     
    return (
        <div>
            <Carousel 
            swipeable={false}
            draggable={false}
            arrows={false}
            responsive={responsive}
            showDots={((typeof window !== "undefined")&&(window.innerWidth > 600))  ? false:true}
            //showDots={responsive.mobile.breakpoint.max < 600 ? true : false}
            //showDots={ window.innerWidth<responsive.mobile.breakpoint.max  ? true:false}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            keyBoardControl={true}
            customTransition="all .5"    
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            containerClass={styles.containerPaddingBottom}
            customButtonGroup={<CustomButtonGroup />}
            
            >
              {carInfoCard.length >0 ? carInfoCard : <NotFound/>}  
            </Carousel>
            
        </div>
    )
}

export default  CarCarousel

function dot(dot: any) {
  throw new Error("Function not implemented.");
}
