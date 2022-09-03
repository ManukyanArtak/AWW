import GoogleSheet from '../../services/backend/GoogleSheet'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body
    try {
      const data = [name, email, subject, message]

      const googleSheet = new GoogleSheet()
      await googleSheet.getClient()
      await googleSheet.append('contactList', data)

      return res.status(201).json({})
    } catch (error) {
      return res.status(400).json({ error })
    }
  }

  return res.status(404).json({})
}