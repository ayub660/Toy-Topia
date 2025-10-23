// src/components/HomeSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const slides = [
    { id: 1, image: "https://i.ibb.co/pvcrKNGk/istockphoto-483630545-1024x1024.jpg", title: "Remote Control Monster Truck" },
    { id: 2, image: "https://i.ibb.co/fV4SLqfd/3d-view-powerful-weapon.jpg", title: "Nerf Elite 2.0" },
    { id: 3, image: "https://i.ibb.co/3mCGxjtc/33192.jpg", title: "Kids Cricket Set" },
];

const HomeSlider = () => {
    return (
        <div className="max-w-7xl mx-auto py-10">
            <Swiper navigation={true} modules={[Navigation]} className="rounded-xl">
                {slides.map(slide => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative">
                            <img src={slide.image} alt={slide.title} className="w-full h-64 object-cover rounded-xl" />
                            <div className="absolute bottom-4 left-4 text-white font-bold text-xl bg-rose-500 px-3 py-1 rounded">
                                {slide.title}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HomeSlider;
