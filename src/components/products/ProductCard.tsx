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
        <div  className="border rounded-lg shadow-md overflow-hidden max-w-sm bg-white">
            {/* Product Image */}
          <div className="md:h-60 md:w-60" >
          <img
                src={productImage}
                alt={title}
                className="w-full h-full object-contain"
            />
          </div>

            {/* Product Details */}
            <div className="p-4">
                <p className="text-sm text-gray-500 uppercase">{category}</p>
                <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
                <p className="text-xl font-bold text-blue-600">${price.toFixed(2)}</p>
            </div>

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
    );
};
