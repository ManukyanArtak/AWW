import GoogleSheet from '../../services/backend/GoogleSheet'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body
    try {
      const data = [email]

      const googleSheet = new GoogleSheet()
      await googleSheet.getClient()
      await googleSheet.append('downloadList', data)

      return res.status(201).json({})
    } catch (error) {
      return res.status(400).json({ error })
    }
  }

  return res.status(404).json({})
}
