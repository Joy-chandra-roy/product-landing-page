import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";
import SectionTitle from "../SectionTitle";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    review:
      "I love the deep bass and balanced audio. It completely changed my music experience.",
    author: "John Doe",
    role: "CEO, TechCorp",
  },
  {
    id: 2,
    review: "The cushions are soft and lightweight. Perfect for long hours of use.",
    author: "Sarah Smith",
    role: "Product Manager, InnovateX",
  },
  {
    id: 3,
    review:
      "You get premium quality without spending too much. Totally worth it.",
    author: "Michael Brown",
    role: "CTO, DevSolutions",
  },
  {
    id: 4,
    review: "I only charge once every few days even with regular use.",
    author: "Emily Johnson",
    role: "UI/UX Designer, CreativeHub",
  },
  {
    id: 5,
    review: "The clarity and bass make listening to music more enjoyable.",
    author: "David Wilson",
    role: "Founder, StartSmart",
  },
  {
    id: 6,
    review: "My voice sounds clear even in noisy environments.",
    author: "Olivia Martinez",
    role: "Operations Lead, FlowTech",
  },
  {
    id: 7,
    review: "I really like the design. It feels like a high-end product.",
    author: "James Anderson",
    role: "Marketing Head, Brandify",
  },
  {
    id: 8,
    review: "Lightweight and easy to carry. Great noise isolation too.",
    author: "Sophia Taylor",
    role: "Project Lead, ScaleUp",
  },
  {
    id: 9,
    review: "Connecting and using it is super simple. No confusion at all.",
    author: "Daniel Thomas",
    role: "Backend Engineer, CloudNet",
  },
  {
    id: 10,
    review: "Great performance, comfort, and design—all in one.",
    author: "Isabella Moore",
    role: "Business Analyst, DataWise",
  },
];

const TestimonialSection = () => {
  return (
    <div id="reviews" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Customer Reviews"
          title="Trusted by users and loved by modern brands"
          subtitle="Feel every beat with precision-engineered audio and all-day comfort.."
        />

        {/* testimonial carousel */}
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="shadow-sm py-3 px-2 rounded-2xl mb-10 shadow-purple-400">
                <div className=" flex justify-center   space-y-2  text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4 md:w-3/5 mx-auto text-center">
                  {review.review}
                </p>
                <div>
                  <div
                    className="w-12 h-12 rounded-full bg-blue-500 text-white 
                    flex items-center justify-center mx-auto mb-3"
                  >
                    {review.author.charAt(0)}
                  </div>
                  <h3 className="text-2xl font-bold text-center ">
                    {review.author}
                  </h3>
                  <p className="text-sm text-gray-600 text-center  mb-4">
                    {review.role}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialSection;
