import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const slides = [
    { id: 1, image: "https://i.ibb.co/pvcrKNGk/istockphoto-483630545-1024x1024.jpg", title: "Remote Control Monster Truck" },
    { id: 2, image: "https://i.ibb.co/fV4SLqfd/3d-view-powerful-weapon.jpg", title: "Nerf Elite 2.0" },
    { id: 3, image: "https://i.ibb.co/XfZ1VXt9/premium-photo-1741788842165-0b6feea44ce8.jpg", title: "Dinosaur Action Figure Set" },
];

const HomeSlider = () => {
    return (
        <div className="max-w-7xl mx-auto py-10 px-4">
            <Swiper
                navigation={true}
                modules={[Navigation]}
                slidesPerView={1}
                className="rounded-2xl shadow-lg overflow-hidden"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative w-full h-80 md:h-96 flex items-center justify-center">
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-4 left-4 bg-rose-500 bg-opacity-80 text-white font-bold px-3 py-1 rounded">
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