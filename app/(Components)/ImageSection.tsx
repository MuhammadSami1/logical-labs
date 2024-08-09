import Image from "next/image";
import { images } from "../(Data)";

const ImageSection = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-1 md:gap-5">
      {images.map((item, i) => (
        <div key={i} className={i === 1 ? "col-span-2 row-span-2" : ""}>
          <Image
            alt="images"
            src={item.img}
            style={{ objectPosition: "center", objectFit: "cover" }}
            height={150}
            width={400}
            className="h-full w-full"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageSection;
