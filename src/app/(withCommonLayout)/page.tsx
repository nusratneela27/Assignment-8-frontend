import Banner from "@/components/UI/HomePage/Banner/Banner";
import FlashSale from "@/components/UI/HomePage/FlashSale/FlashSale";
import Contain from "@/components/Shared/Container/Contain";
const page = () => {
  return (
    <>
      <Banner></Banner>
      <Contain>
        <FlashSale></FlashSale>
      </Contain>
    </>
  );
};

export default page;
