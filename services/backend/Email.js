import * as sendGrid from '@sendgrid/mail'

export default class Email {
  client

  constructor() {
    this.client = sendGrid
    this.client.setApiKey(process.env.SENDGRID_API_KEY)
  }

  async send(subject, from, content) {
    return await this.client.send({
      to: process.env.TO_EMAIL,
      subject,
      from: process.env.FROM_EMAIL,
      content,
    })
  }
}
