import styles from "./Carousel.module.css";
import CardItem from "./CardItem";

function Carousel(tags="trending", heading="Trending T-Shirts") {

  return (
    <div>
      <hr className={styles["hr-text"]} data-content={heading} />
      <br></br>
      <CardItem tag={tags}/>
    </div>
  );
}

export default Carousel;
