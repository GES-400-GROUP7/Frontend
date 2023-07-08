import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Team.scss";

const CarouselComponent = () => {
  return (
    <>
      <div className="Team">
        <div className="head-text">
            <div>
            <b>Empowering Administration for Academic Excellence</b>
            <p>Make it easier for all students to do learning through digital media with existing media making it easier.</p>
            </div>
        </div>
        <Carousel autoPlay infiniteLoop showThumbs={false}>
          <div className="cover-set">
            <div>
              <img src="/images/Rectangle 1.jpg" alt="Image 1" />
              <b>Dr. Friday Onudu</b>
              <p>Head of dept</p>
            </div>
            <div>
              <img src="/images/Rectangle 2.jpg" alt="Image 2" />
              <b>Prof. Wobidi</b>
              <p>Faculty Head</p>
            </div>
            <div>
              <img src="/images/Rectangle 3.jpg" alt="Image 3" />
              <b>Rose Newton</b>
              <p>Course Adviser</p>
            </div>
          </div>
          <div className="cover-set">
            <div>
              <img src="/images/Rectangle 1.jpg" alt="Image 1" />
              <b>Mrs Banks Grace</b>
              <p>Secetary</p>
            </div>
            <div>
              <img src="/images/Rectangle 2.jpg" alt="Image 2" />
              <b>Mr Emeka Okoli</b>
              <p>Administrative head</p>
            </div>
            <div>
              <img src="/images/Rectangle 3.jpg" alt="Image 3" />
              <b>Mrs Favor Cole</b>
              <p>Clerk</p>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default CarouselComponent;
