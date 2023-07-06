import React from "react";
import guide from "../../assets/guideImage/guide_group.png";
import guide1 from "../../assets/guideImage/guide1.png";
import guide3 from "../../assets/guideImage/guide 3.png";
import guide2 from "../../assets/guideImage/guide 2.png";
import guide6 from "../../assets/guideImage/guide6.png";

function GuideBook() {
  return (
    <div className="grid justify-center mt-2 mx-5">
      <div className="grid justify-center row-span-1">
        <p className="text-blue-800 md:text-4xl lg:text-4xl font-bold">
          Unlock Your Creativity: <span className="text-blue-950">3D</span>
          <br />
          <span className="text-blue-950 grid justify-center">T-Shirt Mastery</span>
        </p>
      </div>
      <div className="flex justify-center mt-auto ease-in-out duration-200">
        <img src={guide} alt="Guide" className="lg:h-[74vh] mb-14" />
      </div>
      <img
        src={guide1}
        className="animate-spin-slow mx-auto lg:ml-[150vh] mt-[-580px] max-w-full lg:max-h-[300px] lg:mt-[-630px] md:max-h-[200px] mt-[2vh] mb-[10vh]"
        alt="Guide 1"
      />
      <div className="grid justify-center">
        <p className="text-blue-950 md:text-4xl lg:text-4xl font-bold items-center">
          Mastering 3D T-Shirt Design: <br />
          <span className="text-blue-800 grid justify-center">A Guidebook</span>
        </p>
      </div>
      <section className="grid md:grid-cols-2 grid-cols-1 justify-right p-4">
        <p className="text-blue-800 font-bold mt-20 lg:mt-35 md:text-xl lg:text-3xl text-justify">
          What is 3D T-Shirt Designing?
          <br />
          <span className="text-slate-800 font-normal w-1/2 text-sm md:text-lg lg:text-base">
            3D T-shirt designing refers to the process of creating visually appealing
            and lifelike designs on T-shirts using three-dimensional elements and
            techniques. By utilizing software and tools, designers can add depth,
            textures, shadows, and special effects to their designs, resulting in
            eye-catching and immersive visuals that enhance the overall appearance of
            the T-shirt.
          </span>
        </p>
        <div className="max-w-full mt-19 ml-[25vh]">
          <img src={guide3} alt="Guide 3" className="max-h-[250px]" />
        </div>
      </section>
      <section className="grid md:grid-cols-2 grid-cols-1 justify-center lg:-m-10 p-4">
        <div className="flex justify-center items-center">
          <img src={guide2} alt="Guide 2" className="w-auto max-h-[250px]" />
        </div>
        <p className="text-blue-800 font-bold mt-20 md:text-xl lg:text-3xl text-justify">
          How to design a T-shirt?
          <br />
          <span className="text-slate-800 font-normal w-1/2 text-sm md:text-lg lg:text-base ml-10">
            You need to choose a t-shirt style. There are many different styles to
            choose from. If you have a design that you'd like to use, you can upload
            it to the design website. If you don't have a design, you can use one of
            the website's templates or create your own using the website's design
            tools. Once you've uploaded your design, you can customize it by adding
            text, images, and other elements. You can also change the size, color,
            and placement of your design. Once you're happy with your design, you can
            preview it to see how it will look on a t-shirt. You can view your design
            from different angles and zoom in to get a close-up look.
          </span>
        </p>
      </section>
      <section className="grid md:grid-cols-2 grid-cols-1 justify-left lg:-m-10 p-4">
        <p className="text-blue-800 font-bold mt-20 md:text-xl lg:text-3xl text-justify">
          Additional Tips.
          <br />
          <span className="text-slate-800 font-normal w-1/2 text-sm md:text-lg lg:text-base mt-5">
            Here are some additional tips for designing a t-shirt:
            <br />
            Keep your design simple. Too much text or too many images can make your
            design look cluttered. Use high-quality images. If you're using images in
            your design, make sure they're high-quality. Low-quality images will look
            pixelated and unprofessional. Choose a font that is easy to read. Avoid
            using fonts that are too small or too difficult to read. Proofread your
            design carefully. Do share your designs on your favorite platforms.
          </span>
        </p>
        <div className="flex justify-center items-center mt-20">
          <img src={guide6} alt="Guide 6" className="lg:-mt-8 max-w-full max-h-[250px]" />
        </div>
      </section>
    </div>
  );
}

export default GuideBook;
