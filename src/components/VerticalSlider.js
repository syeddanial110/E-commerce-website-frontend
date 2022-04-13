import { Carousel } from "bootstrap";
import React from "react";
import { Image } from "react-bootstrap";
import "../styles/verticalslider.css"

const VerticalSlider = () => {
  //   var sliderImages = [
  //     "https://www.junaidjamshed.com/media/weltpixel/owlcarouselslider/images/b/a/banner01_3.jpg",
  //     "https://www.paklap.pk/pub/media/easyslide/sliding-banners-14.2_1_.jpg",
  //     "https://www.junaidjamshed.com/media/weltpixel/owlcarouselslider/images/0/1/01_9.jpg",
  //     "https://www.paklap.pk/pub/media/easybanner/mb_s-14.jpg",
//   https://images.indianexpress.com/2021/01/Dell-Latitude-9420.jpg
  //   ];
  return (
    <>
      {/* <Carousel>
        <Carousel.Item>
          <img
            classNameName="d-block w-100"
            src="https://www.junaidjamshed.com/media/weltpixel/owlcarouselslider/images/b/a/banner01_3.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            classNameName="d-block w-100"
            src="https://www.paklap.pk/pub/media/easyslide/sliding-banners-14.2_1_.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            classNameName="d-block w-100"
            src="https://www.junaidjamshed.com/media/weltpixel/owlcarouselslider/images/0/1/01_9.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */}

      {/* <Carousel fade>
  <Carousel.Item>
    <img
      classNameName="d-block w-100"
      src="holder.js/800x400?text=First slide&bg=373940"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      classNameName="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      classNameName="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> */}

      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://www.junaidjamshed.com/media/weltpixel/owlcarouselslider/images/b/a/banner01_3.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.junaidjamshed.com/media/weltpixel/owlcarouselslider/images/0/1/01_9.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img 
              src="https://images.indianexpress.com/2021/01/Dell-Latitude-9420.jpg"
              className="thirdSliderImage d-block w-100 "
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default VerticalSlider;
