import React from 'react'
import Carousel from 'react-carousel-minimal/dist/components/Carousel'
import './gallery.css';
const Gallery = () => {
    const data = [
        {
            image: "../asset/b1.jpg",
            heading: "Hospital equipment",
        },
        {
            image: "../asset/b2.jpg",
            heading: "Accessories,medical",
        }, {
            image: "../asset/b3.jpg",
            heading: "Medical",
        }
    ]
    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
      }
      const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
      }
    return (
        <>
            <div className="gallery">
                <div style={{ textAlign: "center" }}></div>
            </div>
            <Carousel
            data={data}
            time={1000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
          
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </>
    )
}

export default Gallery