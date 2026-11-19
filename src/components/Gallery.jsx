import ImageFrame from "./subcomponents/ImageFrame"
import image1 from "../assets/Image (2).jpg"
import image2 from "../assets/Image.jpg"

function Gallery() {
    return (
        <div>
            <ImageFrame imageLink={image1} imageAlt="" />
            <ImageFrame imageLink={image2} imageAlt="" />
        </div>
    )
}

export default Gallery