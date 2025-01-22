type ProductCardProps = {
    title?: string;
    price: number;
    productImage?: string;
    category?: string;
    onAddToCart?: () => void; // Optional callback for adding to cart
}

export const ProductCard = ({

    title,
    price,
    productImage,
    category,
    onAddToCart,
}: ProductCardProps) => {


    return (
        <div className="border flex-1 h-[450px] flex-col gap-2 justify-center items-center rounded-lg shadow-md  h-auto max-w-sm bg-white">
            {/* Product Image */}
            <div className="md:h-60 md:w-60 pt-3" >
                <img
                    src={productImage}
                    alt={title}
                    className="w-full h-full object-contain"
                />
            </div>

            {/* Product Details */}
            <div className="p-4 w-full flex flex-col justify-between relative ">
                <p className="text-sm text-gray-500 uppercase">{category}</p>
                <h2 className="text-lg font-semibold text-gray-800">{title}</h2>


                <div className="flex items-center justify-between w-full " >
                    <p className="text-xl font-bold text-blue-600">${price.toFixed(2)}</p>

                    {/* Action Button */}
                    {onAddToCart && (
                        <div className="p-4">
                            <button
                                onClick={onAddToCart}
                                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
                            >
                                Add to Cart
                            </button>
                        </div>
                    )}
                </div>

            </div>


        </div>
    );
};
