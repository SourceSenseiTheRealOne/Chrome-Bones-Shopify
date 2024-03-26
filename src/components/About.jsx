import React from "react";

const backgroundImage = "https://cdn.pixabay.com/photo/2016/10/17/19/37/dune-1748462_1280.jpg";

const About = () => {
  return (
    
    <div className="min-h-screen py-8 bg-cover relative" style={{backgroundImage: `url(${backgroundImage})`}}>
       <div className="absolute inset-0 bg-black opacity-50"></div>
      <section className="absolute max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex justify-between">
            <div className="mt-20 ml-12">
                  <div>
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                      Hey 👋 I am <br className="block sm:hidden" />
                      Jenny Carter
                    </h2>
                    <p className="max-w-lg mt-3 text-xl leading-relaxed text-white md:mt-8">
                      Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                      amet sint. Velit officia consequat duis enim velit mollit.
                      Exercitation veniam consequat sunt nostrud amet.
                    </p>
                  </div>
                  <div className="flex flex-row">
                    <div className="mt-12">
                      <button
                        className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs bg-blue-500 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                        type="button"
                          >
                        <span
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        ><i className="fas fa-heart text-white" aria-hidden="true"></i>
                        </span>
                      </button>
                    </div>
                    <div className="mt-12 ml-8">
                      <button
                        className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs bg-blue-500 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                        type="button"
                          >
                        <span
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        ><i className="fas fa-heart text-white" aria-hidden="true"></i>
                        </span>
                      </button>
                    </div>
                    <div className="mt-12 ml-8">
                     
                        <span
                        className="text-white"
                        ><i class="fa-solid fa-cart-shopping text-white"/>
                        </span>
                    
                    </div>
                  </div>
            </div>
            <div className="ml-20">
              <img
                className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
                src="https://ucarecdn.com/f2196f22-4861-4903-9494-e2f790c87c34/character2.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
