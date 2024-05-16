import Image from "next/image";
import bannerImage from "../../../assets/banner.jpg";

const Banner = () => {
  return (
    <div style={{ position: "relative", height: "800px" }}>
      <Image
        alt="bannerImage"
        src={bannerImage}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
        className="z-0"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
        <h1 className="text-5xl text-white font-bold">Welcome to My Website</h1>
      </div>
    </div>
  );
};

export default Banner;
