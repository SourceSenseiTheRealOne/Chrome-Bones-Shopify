import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Hero = () => {
  return (
    <div class="relative  h-screen  bg-gradient-to-r from-purple-600 to-blue-600  text-white overflow-hidden">
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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

      <div class="absolute -bottom-28 -right-12">
        <img src="https://ucarecdn.com/b0daa085-8336-4a80-b897-94609c80e4e0/character12.png" className="md:visible visible sm:invisible" />
      </div>

      <div class="relative z-10 flex flex-col justify-center items-center h-full text-center -top-20">
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
