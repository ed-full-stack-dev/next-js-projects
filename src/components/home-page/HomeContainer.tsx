"use client";

import IntroSection from "./IntroSection";
import ImageGallerySection from "./ImageGallerySection";
import ContentSection from "./ContentSection";

export default function HomeContainer() {
    return (
        <div className="home-page">
            <IntroSection />
            <ImageGallerySection />
            <ContentSection />
        </div>
    )
}