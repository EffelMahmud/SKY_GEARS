import { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RxDotFilled } from "react-icons/rx";
import img1 from "../images/image1.png";
import img2 from "../images/imageb1.jpg";
import img3 from "../images/image3.png";
import img4 from "../images/imageb1.jpg";

const ImageSlider = () => {
  const slides = [img1, img2, img3, img4];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  console.log(slides);

  return (
    <>
      <div className="w-[1296px] h-[478px]  py-10 px-18 relative group">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex]})` }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500 "
        ></div>
        {/**left Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer ">
          <MdKeyboardArrowLeft onClick={prevSlide} size={20} />
        </div>
        {/**Right Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer ">
          <MdKeyboardArrowRight onClick={nextSlide} size={20} />
        </div>
        <div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl text-[#D9D9D9] {text-[#4493FA] ? slideIndex} cursor-pointer"
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default ImageSlider;

/**
 *
 * url: "https://s3-alpha-sig.figma.com/img/05b7/4142/3c072cb72d551536721c3919283bacbc?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ffy76e8EJMbRzESqGbG7nKUzk6PSJtUUK3dgXecxObGvXWS469yQ0mP-Hnt-uNdMYnQQQ7Y9fR7AsmlSgZCC0zf-MoRGonGdnmcDmOX7Q9Hk6jqiGyA1~TlSpa8tlOj4pxlcKGLEwKecqzavGMa1MZHrup6y64M4s-ZrzYyGOqtdOOmAiETvG0XMT6ICxQbsHlBqzFjVvxeQ-eCqjpliAYQ83EaSD5vsp19~Y08NZxPetKHk5ogy9VyBcNvgrOincR9AFXvCceuDbh8TZwUgqKWsW-qbRJdwG6dEhImKD9ZUxTTQbpEqhYB1i5IedrIYxJ07V7iV8U7HGkZ06SYktg__",
 */
