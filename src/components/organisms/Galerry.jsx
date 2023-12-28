import '../../styles/styleGallery.css';
import GalleryImg from '../molecules/Galleryimgs'
import TitleGallery from '../molecules/TitleGallery'
const Gallery = () => {
return (
    <div className='contentGallery'>
        <GalleryImg/>
        <TitleGallery/>
    </div>
);
};

export default Gallery;