import useSWR from "swr";

const productsApiUrl = "/api/products";

const fetcher = async (productsApiUrl) => {
  const response = await fetch(productsApiUrl);

  if (!response.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.info = await response.json();
    error.status = response.status;
    throw error;
  }

  return response.json();
};

export default function Products() {
  const { data: products, isLoading, error } = useSWR(productsApiUrl, fetcher);

  console.log(products);
  if (isLoading) return <p>Loading products...</p>;
  if (error) return <p>Error loading products: {error.message}</p>;

 return (
    <div>
      <h1>All Listings</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Description:</strong> {product.description}</p>
            <p><strong>Price:</strong> {product.price} {product.currency}</p>
          </li>
        ))}
      </ul>
    </div>
  );

}
