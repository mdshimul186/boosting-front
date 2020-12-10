const nodemailer = require('nodemailer')
const sgTransport = require('nodemailer-sendgrid-transport')

const transporter = nodemailer.createTransport(sgTransport({
    auth: {
      api_key: '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'
    }
}))

const send = ({ name, email, phone, subject, text }) => {

    const textBody = `Name: ${name}   
                Subject: ${subject}             
                Email: ${email}
                Phone: ${phone}
                Body: ${text}
                This email came from StartP React.js & Next.js template
                `

    const from = name && email ? `${name} <${email}>` : `${name || email}`

    const message = {
        from,
        to: 'shabbir@salahsoftwaresolution.com',
        subject: subject,
        text: textBody,
        replyTo: from
    }

    return new Promise((resolve, reject) => {
        transporter.sendMail(message, (error, info) =>
            error ? reject(error) : resolve(info)
        )
    })
}

module.exports = send