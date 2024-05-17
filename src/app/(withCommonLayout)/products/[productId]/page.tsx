import Contain from "@/components/Shared/Container/Contain";
import { MdOutlineLocalShipping } from "react-icons/md";
import { FaBox } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";

const ProductDetails = () => {
  return (
    <div>
      <Contain>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-16">
          <div>images</div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h1 className="font-bold text-2xl">Name</h1>
              <FaRegHeart className="h-8 w-8" />
            </div>
            <p className="text-2xl">$price</p>
            <p className="pt-16">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              consequatur deleniti cum esse necessitatibus ipsa nobis eaque sit
              nam. Ab omnis autem mollitia voluptatibus inventore iste
              accusantium alias enim similique!
            </p>
            <div className="flex items-center gap-3 pt-20">
              <MdOutlineLocalShipping className="h-6 w-6" />
              <p className="text-small">
                Free worldwide shipping on all orders over $100
              </p>
            </div>
            <div className="flex items-center gap-3">
              <FaBox className="h-6 w-6" />
              <p className="text-small">
                Delivers in: 3-7 Working Days Shipping & Return
              </p>
            </div>
          </div>
        </div>
      </Contain>
      <div className="bg-gray-100 p-16 my-20">
        <div className="mx-auto container space-y-3">
          <h1 className="font-bold text-2xl">Description</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque saepe
            quibusdam a ducimus repellendus esse aperiam quo, at debitis eius.
            Architecto ratione distinctio amet voluptatem provident est culpa
            sapiente odit quaerat eveniet? Quasi nam sunt dignissimos, laborum
            saepe maxime veniam beatae explicabo mollitia tempore et, laudantium
            ipsum dolorem. Provident officia autem, molestias tempore nam quas
            ipsum nisi quia vitae totam? Minima ipsa aliquam mollitia molestias
            porro quasi provident quae sit sequi dolore, voluptatem quam
            similique, facilis sapiente molestiae voluptatibus. Temporibus, amet
            voluptatibus soluta excepturi autem, dignissimos eos earum nihil
            incidunt illum placeat minus ea. Veritatis et blanditiis id dolores
            dolor!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
