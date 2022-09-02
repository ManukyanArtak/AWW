import { google } from 'googleapis'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body
    try {
      const auth = new google.auth.GoogleAuth({
        keyFile: './sheet.json', //the key file
        //url to spreadsheets API
        scopes: 'https://www.googleapis.com/auth/spreadsheets',
      })

      const authClientObject = await auth.getClient()

      const googleSheetsInstance = google.sheets({
        version: 'v4',
        auth: authClientObject,
      })
      const spreadsheetId = '1t8KfRpzsF73cAkeXWaRar-0Y-ocg4wx94J7m8ZxxQLY'

      const readData = await googleSheetsInstance.spreadsheets.values.append({
        auth, //auth object
        spreadsheetId, // spreadsheet id
        range: 'contactList',
        valueInputOption: 'USER_ENTERED',
        resource: {
          values: [[name, email, subject, message]],
        },
      })

      return res.status(200).json({ name: readData })
    } catch (e) {
      return res.status(200).json({ name: e })
    }
  }

  return res.status(404).json({})
}
