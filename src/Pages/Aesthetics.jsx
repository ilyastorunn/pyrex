import pic1 from "../assets/pic1.jpeg";
import pic2 from "../assets/pic2.jpeg";
import pic3 from "../assets/pic3.jpeg";
import pic4 from "../assets/pic4.jpeg";
import pic5 from "../assets/pic5.JPG";

export default function Aesthetics() {
  return (
    <>
      <div className="grid grid-cols-5 grid-rows-5 gap-4 bg-gray-700 p-8 min-h-screen">
        <div className="col-span-1 row-span-2 [perspective:1000px]">
          <div className="relative w-full h-full transition-all duration-700 transform-style-preserve-3d hover:[transform:rotateY(180deg)]">
            <div className="absolute w-full h-full [backface-visibility:hidden]">
              <img
                src={pic5}
                alt="Aes1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute w-full h-full [transform:rotateY(180deg)] [backface-visibility:hidden] bg-black flex items-center justify-center">
              <p className="text-2xl font-bold text-white">Minimal Art</p>
            </div>
          </div>
        </div>

        <div className="col-span-2 row-span-1 [perspective:1000px]">
          <div className="relative w-full h-full transition-all duration-700 transform-style-preserve-3d hover:[transform:rotateY(180deg)]">
            <div className="absolute w-full h-full [backface-visibility:hidden]">
              <img
                src={pic5}
                alt="Aes1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute w-full h-full [transform:rotateY(180deg)] [backface-visibility:hidden] bg-black rounded-lg flex items-center justify-center">
              <p className="text-2xl font-bold text-white">Urban Style</p>
            </div>
          </div>
        </div>

        <div className="col-span-2 row-span-1 [perspective:1000px]">
          <div className="relative w-full h-full transition-all duration-700 transform-style-preserve-3d hover:[transform:rotateY(180deg)]">
            <div className="absolute w-full h-full [backface-visibility:hidden]">
              <img
                src={pic5}
                alt="Aes1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute w-full h-full [transform:rotateY(180deg)] [backface-visibility:hidden] bg-black rounded-lg flex items-center justify-center">
              <p className="text-2xl font-bold text-white">Nature View</p>
            </div>
          </div>
        </div>

        <div className="col-span-1 row-span-1 [perpective:1000px]">
          <div className="relative w-full h-full transition-all duration-700 transform-style-preserve-3d hover:[transform:rotateY(180deg)]">
            <div className="absolute w-full h-full [backface-visibility:hidden]">
              <img
                src={pic5}
                alt="Aes1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute w-full h-full [transform:rotateY(180deg)] [backface-visibility:hidden] bg-black rounded-lg flex items-center justify-center">
              <p className="text-xl font-bold text-white">Modern</p>
            </div>
          </div>
        </div>

        <div className="col-span-2 row-span-2 [perspective:1000px]">
          <div className="relative w-full h-full transition-all duration-700 transform-style-preserve-3d hover:[transform:rotateY(180deg)]">
            <div className="absolute w-full h-full [backface-visibility:hidden]">
              <img
                src={pic5}
                alt="Aes1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute w-full h-full [transform:rotateY(180deg)] [backface-visibility:hidden] bg-black rounded-lg flex items-center justify-center">
              <p className="text-3xl font-bold text-white">Abstract</p>
            </div>
          </div>
        </div>

        <div className="col-span-1 row-span-2 [perspective:1000px]">
          <div className="relative w-full h-full transition-all duration-700 transform-style-preserve-3d hover:[transform:rotateY(180deg)]">
            <div className="absolute w-full h-full [backface-visibility:hidden]">
              <img
                src={pic5}
                alt="Aes1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute w-full h-full [transform:rotateY(180deg)] [backface-visibility:hidden] bg-black rounded-lg flex items-center justify-center">
              <p className="text-2xl font-bold text-white">Vintage</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
