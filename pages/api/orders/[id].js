import dbConnect from "../../../utils/dbConnect";
import Order from "../../../models/Order"

const handler =  async (req, res) => {
    const {method, query:{id}} = req
    
    await dbConnect()

    switch (method) {
        case 'GET':
          try {
            const order = await Order.findById(id)
            res.status(200).json(order)
          } catch (err) {
            res.status(500).json(err)
          }
          break
        case 'PUT':
          try {
            const order = await Order.findByIdAndUpdate(id, req.body, {
              new: true,
            });
            res.status(200).json(order);
          } catch (err) {
            res.status(500).json(err);
          }
          break
          break
        case 'DELETE':
        
            break
        default:
          res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
          res.status(405).end(`Method ${method} Not Allowed`)
    }
}

export default handler