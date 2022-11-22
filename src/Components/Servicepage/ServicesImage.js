import * as React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import Aadhar from '../../Assets/Aadhar.png'
import AadharCard from '../../Assets/AadharCard.png'
import advocate from '../../Assets/advocate.png'
import Epf from '../../Assets/Epf.jpeg'
import gst from '../../Assets/gst.jpeg'
import Pan from '../../Assets/Pan.jpeg'
const handleDragStart = (e) => e.preventDefault();
const items = [
    <img src={Aadhar} onDragStart={handleDragStart} role="presentation" alt='logo' style={{width: '100%',
        height: '100px'}}/>,
    <img src={Pan} onDragStart={handleDragStart} role="presentation" alt='logo' style={{width: '100%',
    height: '100px'}}/>,
    <img src={gst} onDragStart={handleDragStart} role="presentation" alt='logo' style={{width: '100%',
    height: '100px'}}/>,
    <img src={AadharCard} onDragStart={handleDragStart} role="presentation" alt='logo' style={{width: '100%',
        height: '100px'}}/>,
    <img src={advocate} onDragStart={handleDragStart} role="presentation" alt='logo' style={{width: '100%',
    height: '100px'}}/>,
    <img src={Epf} onDragStart={handleDragStart} role="presentation" alt='logo' style={{width: '100%',
    height: '100px'}}/>,
  ];
  const responsive = {
    0: { items: 3 },
    568: { items: 4 },
    1024: { items: 6 },
};
export default function ImageScr(props) {
    return (
        <>
           <AliceCarousel items={items} responsive={responsive} infinite autoPlay autoPlayInterval="3000" disableDotsControls disableButtonsControls/>
        </>

    );
}