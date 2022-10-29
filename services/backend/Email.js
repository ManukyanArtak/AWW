import * as sendGrid from '@sendgrid/mail'

export default class Email {
  client

  constructor() {
    this.client = sendGrid
    this.client.setApiKey(
      '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'
    )
  }

  async send(subject, from, content) {
    return await this.client.send({
      to: 'artakmanukyan17@gmail.com',
      subject,
      from: 'artak.manukyan@mamble.co',
      content,
    })
  }
}
