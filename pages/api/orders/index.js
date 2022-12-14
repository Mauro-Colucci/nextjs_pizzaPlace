import dbConnect from "../../../utils/dbConnect";
import Order from "../../../models/Order"

const handler =  async (req, res) => {
    const {method} = req
    
    await dbConnect()

    switch (method) {
        case 'GET':
          try {
            const orders = await Order.find()
            res.status(200).json(orders)
          } catch (err) {
            res.status(500).json(err)
          }
          break
        case 'POST':
          try {
            const order = await Order.create(req.body)
            res.status(201).json(order)
          } catch (err) {
            res.status(500).json(err)
          }
          break
        default:
          res.setHeader('Allow', ['GET', 'POST'])
          res.status(405).end(`Method ${method} Not Allowed`)
      }
}

export default handler