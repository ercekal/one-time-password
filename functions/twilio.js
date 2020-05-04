const twilio = require('twilio')
// below token is invalid
const accountSid = 'ACb40f20df1b9341fb5914ab60c941e128'
const authToken = '845614d7bcd5322ca882268c4662a1f3'

module.exports = new twilio.Twilio(accountSid, authToken)