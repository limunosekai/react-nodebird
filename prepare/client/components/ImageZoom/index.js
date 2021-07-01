import PropTypes from 'prop-types';
import { useState } from 'react';
import Slick from 'react-slick';
import {
  Overlay,
  CloseBtn,
  Global,
  Header,
  ImgWrapper,
  Indicator,
  SlickWrapper,
} from './styles';

const ImageZoom = ({ images, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <Overlay>
      <Global />
      <Header>
        <h1>상세 이미지</h1>
        <CloseBtn onClick={onClose}>X</CloseBtn>
      </Header>
      <SlickWrapper>
        <div>
          <Slick
            initialSlide={0}
            beforeChange={(slide) => setCurrentSlide(slide)}
            infinite
            arrows={false}
            slidesToShow={1}
            slidesToScroll={1}
          >
            {images.map((item) => {
              return (
                <ImgWrapper key={item.src}>
                  <img src={item.src} alt={item.src} />
                </ImgWrapper>
              );
            })}
          </Slick>
          <Indicator>
            <div>
              {currentSlide + 1} /{images.length}
            </div>
          </Indicator>
        </div>
      </SlickWrapper>
    </Overlay>
  );
};

ImageZoom.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ImageZoom;
