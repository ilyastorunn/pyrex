import pic1 from "../assets/pic1.jpeg";
import pic2 from "../assets/pic2.jpeg";
import pic3 from "../assets/pic3.jpeg";
import pic4 from "../assets/pic4.jpeg";

export default function Aesthetics() {
  return (
    <>
      <div className="grid grid-cols-4 grid-rows-4 gap-4 bg-gray-700 p-8">
        <div className="col-span-2 row-span-2 [perspective:1000px]">
          <div className="relative w-[400px] h-[600px] transition-transform duration-700 transform-style-preserve-3d hover:[transform:rotateY(180deg)]">
            <div className="absolute w-full h-full">
              <img
                src={pic1}
                alt="1"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="absolute w-full h-full bg-black/90 rounded-lg [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className="flex items-center justify-center h-full text-white p-8 text-center">
                <p className="text-2xl font-semibold">Estetik Görüntü 1</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 row-span-2 col-start-3 [perspective:1000px]">
          <div className="relative w-[400px] h-[600px] transition-transform duration-700 transform-style-preserve-3d hover:[transform:rotateY(180deg)]">
            <div className="absolute w-full h-full">
              <img
                src={pic2}
                alt="1"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="absolute w-full h-full bg-black/90 rounded-lg [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className="flex items-center justify-center h-full text-white p-8 text-center">
                <p className="text-2xl font-semibold">Estetik Görüntü 2</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 row-span-2 [perspective:1000px]">
          <div className="relative w-[400px] h-[600px] transition-transform duration-700 transform-style-preserve-3d hover:[transform:rotateY(180deg)]">
            <div className="absolute w-full h-full">
              <img
                src={pic3}
                alt="1"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="absolute w-full h-full bg-black/90 rounded-lg [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className="flex items-center justify-center h-full text-white p-8 text-center">
                <p className="text-2xl font-semibold">Estetik Görüntü 3</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 row-span-2 col-start-3 [perspective:1000px]">
          <div className="relative w-[400px] h-[600px] transition-transform duration-700 transform-style-preserve-3d hover:[transform:rotateY(180deg)]">
            <div className="absolute w-full h-full">
              <img
                src={pic4}
                alt="1"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="absolute w-full h-full bg-black/90 rounded-lg [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className="flex items-center justify-center h-full text-white p-8 text-center">
                <p className="text-2xl font-semibold">Estetik Görüntü 4</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
