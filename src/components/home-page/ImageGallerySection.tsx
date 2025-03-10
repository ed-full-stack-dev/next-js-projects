import { imageGallery } from "@/assets";
import Image from "next/image";
export default function ImageGallerySection() {
    return (
    <div className="image-gallery">
        <div className="image-gallery-wrapper">
            {
                imageGallery && imageGallery.map((img, index) => (
                    <div key={`${img.alt + index}`} className={`image-gallery__item ${index % 2 ? 'image-gallery__item--rotate-2' : 'image-gallery__item--rotate--2'}`}>
                        <Image className="image-gallery__image" src={img.src} alt="speaking" loading="lazy" />
                    </div>
                ))
            }
        </div>
    </div>
    )
}