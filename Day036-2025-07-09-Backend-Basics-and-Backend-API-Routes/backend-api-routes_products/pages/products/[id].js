import { useRouter } from "next/router";
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

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  const {
    data: product,
    isLoading,
    error,
  } = useSWR(`${productsApiUrl}/${id}`, fetcher);

  if (isLoading) return <p>Loading product...</p>;
  if (error) return <p>Error loading product: {error.message}</p>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>
        <strong>Category:</strong> {product.category}
      </p>
      <p>
        <strong>Description:</strong> {product.description}
      </p>
      <p>
        <strong>Price:</strong> {product.price} {product.currency}
      </p>
    </div>
  );
}
