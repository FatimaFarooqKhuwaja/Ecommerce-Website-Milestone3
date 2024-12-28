import Image from "next/image";
import { FC } from "react";

interface ProductCardProps {
  id: number;
  image: string;  // Change from StaticImageData to string
  title: string;
  price: number;
  addToCart: (product: { id: number; title: string; price: number; image: string }) => void;
}

const ProductCard: FC<ProductCardProps> = ({ id, image, title, price, addToCart }) => {
  return (
    <div className="w-full lg:w-[260px] h-[330px] bg-white border border-gray-300 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 hover:scale-105 flex flex-col mt-8">
      <Image
        src={image}
        alt={title}
        className="w-full h-[210px] object-cover rounded-t-lg"
        height={300}
        width={300}
      />
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 truncate">{title}</h3>
          <p className="text-xl text-green-600 font-bold">${price}</p>
        </div>

        {/* Button directly attached to the bottom of the card */}
        <button
          onClick={() => addToCart({ id, title, price, image })}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-b-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
