import Banner from "@/components/UI/HomePage/Banner/Banner";
import FlashSale from "@/components/UI/HomePage/FlashSale/FlashSale";
import Contain from "@/components/Shared/Container/Contain";
import Category from "@/components/UI/HomePage/Category/Category";
const page = () => {
  return (
    <>
      <Banner></Banner>
      <Contain>
        <FlashSale></FlashSale>
        <Category></Category>
      </Contain>
    </>
  );
};

export default page;
