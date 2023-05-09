const Contact = require('../model/Contact')
const sendEmail = require('../mail/SendEmail')

exports.create = async (req, res) => {
    const body = req.body
    const NewContact = new Contact(body)
    await NewContact.save()
    try{
        const email = process.env.ADMIN_MAIL;
        var data = '<h2>The details submitted are:</h2><p>Name: ' + body.name + '</p><p>Email: ' + body.email +'</p><p>Phone: ' + body.phone + '</p><p>Message: ' + body.message + '</p>'
        sendEmail(email, "Contact Form Submission", data);
        res.send({
            message: 'Contact form submitted successfully'
        })
    }
    catch (err) {
        res.status(500).send({
            message: err || "Some error occurred while submitting contact form",
        });
    }
}
