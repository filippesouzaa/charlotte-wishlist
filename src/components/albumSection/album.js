import React, { Component } from "react"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css" // This only needs to be imported once in your app
import styled from "styled-components"

const ImageGallery = styled.div`
  text-align: center;
`
const PhotoGallery = styled.img`
  @media (max-width: 425px){
    width: 100% !important;
  };
  @media (max-width:768px){
    width: 100% !important;
  };
  @media (max-width:1440){
    width:80% !important;
  };
    @media (max-width:1024px){
    width: 100% !important;
  };
`


const images = [
  "https://i.ibb.co/n0J2TY0/IMG-0043.jpg",
  "https://i.ibb.co/jGyZLVY/IMG-0197.jpg",
  "https://i.ibb.co/NVmCTV4/IMG-0006.jpg",
  "https://i.ibb.co/h7WXdxB/IMG-0011.jpg",
  "https://i.ibb.co/BLsMtSm/IMG-0109.jpg",
  "https://i.ibb.co/bL9fdvF/IMG-0058.jpg",
  "https://i.ibb.co/HzJz8vy/IMG-0035.jpg",
  "https://i.ibb.co/yVXqgsY/IMG-0180.jpg",
  "https://i.ibb.co/my1rdqR/IMG-0131.jpg"
]

export default class LightboxExample extends Component {
  constructor(props) {
    super(props)

    this.state = {
      photoIndex: 0,
      isOpen: false,
    }
  }

  render() {
    const { photoIndex, isOpen } = this.state

    return (
      <ImageGallery>
          <PhotoGallery src='https://i.ibb.co/n0J2TY0/IMG-0043.jpg' onClick={() => this.setState({ isOpen: true })}/>
          <PhotoGallery src='https://i.ibb.co/jGyZLVY/IMG-0197.jpg' onClick={() => this.setState({ isOpen: true })}/>
          <PhotoGallery src='https://i.ibb.co/NVmCTV4/IMG-0006.jpg' onClick={() => this.setState({ isOpen: true })}/>
          <PhotoGallery src='https://i.ibb.co/h7WXdxB/IMG-0011.jpg' onClick={() => this.setState({ isOpen: true })}/>
          <PhotoGallery src='https://i.ibb.co/BLsMtSm/IMG-0109.jpg' onClick={() => this.setState({ isOpen: true })}/>
          <PhotoGallery src='https://i.ibb.co/bL9fdvF/IMG-0058.jpg' onClick={() => this.setState({ isOpen: true })}/>
          <PhotoGallery src='https://i.ibb.co/Nj4jBhq/IMG-0035.jpg' onClick={() => this.setState({ isOpen: true })}/>
          <PhotoGallery src='https://i.ibb.co/yVXqgsY/IMG-0180.jpg' onClick={() => this.setState({ isOpen: true })}/>
          <PhotoGallery style={{width: `640px`}}src='https://i.ibb.co/my1rdqR/IMG-0131.jpg' onClick={() => this.setState({ isOpen: true })}/>







        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </ImageGallery>
    )
  }
}
