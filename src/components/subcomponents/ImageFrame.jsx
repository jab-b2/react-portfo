import './image-frame.css'

function ImageFrame({ imageLink, imageAlt }) {
    return (
        <img className='image-frame' src={imageLink} alt={imageAlt}/>
    )
}

export default ImageFrame