import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

// https://cdn.pixabay.com/photo/2016/03/21/10/44/desert-1270345_1280.jpg
// https://cdn.pixabay.com/photo/2016/10/17/19/37/dune-1748462_1280.jpg
// https://cdn.pixabay.com/photo/2017/08/01/13/47/landscape-2565574_1280.jpg

const Hero = () => {
  return (
    <div class="relative  h-screen  bg-gradient-to-r from-purple-600 to-blue-600  text-white overflow-hidden ">
      <div class="absolute inset-0">
        <img
          src="https://cdn.pixabay.com/photo/2017/08/01/13/47/landscape-2565574_1280.jpg"
          alt="Background Image"
          class="object-cover object-center w-full h-full"
        />
        <div class="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div class="absolute bottom-0 left-32">
        <img
          src="https://ucarecdn.com/83de2e77-270c-4ed4-b79e-b2b7aa960205/character3.png"
          className="h-96 md:visible visible sm:invisible"
        />
      </div>

      <div class="absolute -bottom-20 -right-12">
        <img
          src="https://ucarecdn.com/b0daa085-8336-4a80-b897-94609c80e4e0/character12.png"
          className="md:visible visible sm:invisible"
        />
      </div>

      <div class="relative z-10 flex flex-col justify-center items-center h-full text-center -top-8">
        <h1 class="text-5xl font-bold leading-tight mb-12">
          Welcome to Chrome Bones!
        </h1>
        {/* <p class="text-lg text-gray-300 mb-8">
          Discover amazing features and services that await you.
        </p> */}
        <a
          href="#"
          class="bg-gradient-to-r from-amber-600 to-amber-800 text-white hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
        >
          Visit Store
        </a>
      </div>
    </div>
  );
};

export default Hero;
