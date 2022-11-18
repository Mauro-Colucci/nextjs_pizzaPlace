import dbConnect from "../../../utils/dbConnect";
import Product from "../../../models/Product"

export default async function handler(req, res) {
    const { method, query: { id } } = req;

    await dbConnect()

    switch (method) {
        case 'GET':
          try {
            const product = await Product.findById(id)
            res.status(200).json(product)
          } catch (err) {
            res.status(500).json(err)
          }
          break
        case 'PUT':
          try {
            const product = await Product.findByIdAndUpdate(id, req.body, {
              new: true,
            });
            res.status(200).json(product);
          } catch (err) {
            res.status(500).json(err);
          }
          break
        case 'DELETE':
          try {
            await Product.findByIdAndDelete(id)
            res.status(200).json("product has been deleted")
          } catch (err) {
            res.status(500).json(err)
          }
          break
        default:
          res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
          res.status(405).end(`Method ${method} Not Allowed`)
      }
}