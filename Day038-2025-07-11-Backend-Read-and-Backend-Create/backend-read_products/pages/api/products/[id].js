import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    try {
      const product = await Product.findById(id).populate("reviews");
      console.log(product);
      

      if (!product) {
        response.status(404).json({ status: "Not Found" });
        return;
      }

      response.status(200).json(product);
    } catch (error) {
      response.status(500).json({ status: "Error", message: error.message });
    }
  }
}
