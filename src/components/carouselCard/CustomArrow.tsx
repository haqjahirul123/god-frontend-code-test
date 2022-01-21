import ArrowForwardIcon  from "../../../docs/chevron-circled.svg";
import styles from './Style.module.css'


const CustomButtonGroup = ({ next, previous, goToSlide, carouselState }:any) => {
  const { totalItems, currentSlide } = carouselState;
  return (
    <div className={styles.custombuttongroup}>
      <i onClick={() => previous()}><img src={ArrowForwardIcon.src} className={styles.prevSlide}/></i>
      <i onClick={() => next()}><img src={ArrowForwardIcon.src} className={styles.nextSlide}/></i>
    </div>
  );
};

export default CustomButtonGroup
