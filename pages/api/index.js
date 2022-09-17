import clientPromise from '../../utils/dbConnect'

export default async function handler(req, res) {
  const client = await clientPromise
  const db1 = client.db('galinato')
  const {
    query: { id },
    method,
  } = req

  switch (method) {
    case 'GET':
      try {
        const books = await db1.collection('resource').find({}).toArray()

        res.status(200).json({ success: true, data: books })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
  }
}
