import { google } from 'googleapis'

export default class GoogleSheet {
  spreadsheetId = '1t8KfRpzsF73cAkeXWaRar-0Y-ocg4wx94J7m8ZxxQLY'
  auth = null
  instance = null

  constructor() {
    this.auth = new google.auth.GoogleAuth({
      keyFile: './sheet.json',
      scopes: 'https://www.googleapis.com/auth/spreadsheets',
    })
  }

  getClient = async () => {
    const authClientObject = await this.auth.getClient()

    this.instance = google.sheets({
      version: 'v4',
      auth: authClientObject,
    })
  }

  append = async (sheet, data) => {
    const params = {
      auth: this.auth,
      spreadsheetId: this.spreadsheetId,
      range: sheet,
      valueInputOption: 'USER_ENTERED',
      resource: {
        values: [data],
      },
    }
    await this.instance.spreadsheets.values.append(params)
  }
}
