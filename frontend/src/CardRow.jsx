import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

const CardCarousel = () => {
  const cardData = [
    {
      title: 'Hans',
     content: ' The cake was amazing and tasted absolutely delicious!.',
     imageUrl: 'https://flowera.in/uploads/tempDir/user_img-400X400.png'
    },
    {
      title: 'Elena ',
      content: 'It tastes Delicious! It is beautiful! Thanks for all the hard work! .',
      imageUrl: 'https://flowera.in/uploads/tempDir/user_img-400X400.png'
    },
    {
      title: 'Hiroshi ',
      content: 'Thank you for the glorious cake. It was a joy to behold and taste..',
      imageUrl: 'https://flowera.in/uploads/tempDir/user_img-400X400.png'
    },
    {
      title: 'Isabella',
      content: 'Deliciously rich and creamy, every bite was a delight...',
      imageUrl: 'https://flowera.in/uploads/tempDir/user_img-400X400.png'
    },
    {
      title: 'Nikolai ',
      content: 'A heavenly blend of sweetness and texture, truly memorable.',
      imageUrl: 'https://flowera.in/uploads/tempDir/user_img-400X400.png'
    }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="container mt-4" style={{backgroundColor:'#fff0f7'}}>
      <h3 className="text-center mb-4 fw-bolder p-4 " style={{color:'#6C0345'}}>What Our Client Says</h3>
      <Slider {...settings}>
        {cardData.map((card) => (
        //   <div className="col-sm-4" key={index}>
        //     <div className="card mt-5" style={{ width: '18rem' }}>
        
        //     </div>
        //     </div>
        <div className="col-sm-4 mb-4">
        <div className="card ms-3 " style={{width:350,height:220}}>
          <div className="card-body d-flex flex-column align-items-center justify-content-center">
            <img src={card.imageUrl} className="img-fluid rounded-pill mb-3" alt="Card" style={{ width: '60px', height: '60px', objectFit: 'cover' }} />
            <h5 className="card-title">{card.title}</h5>
            <p className="card-text">{card.content}</p>
        <span><FaStar /><FaStar /><FaStar /><FaStar /><CiStar /></span> 
          </div>
        </div>
      </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardCarousel;
