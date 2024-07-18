import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './userComments.css';

interface Comment {
  name: string;
  comment: string;
}

const UserComments: React.FC = () => {
  const comments: Comment[] = [
    { name: 'Monikanchan', comment: 'Great experience working together!' },
    { name: 'Raashna Krishn', comment: 'Loved the collaboration and teamwork.' },
    { name: 'Prasoon Agarwal', comment: 'Great,But more data science projects required' },
    { name: 'Arnab Bhatacharya', comment: 'Got to learn a lot of things' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="UserComments">
      <h2>What Users Have to Say About Us</h2>
      <Slider {...settings}>
        {comments.map((comment, index) => (
          <div key={index} className="comment">
            <h3>{comment.name}</h3>
            <p>{comment.comment}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default UserComments;
