const fs = require('fs')
const path = {
  docs: `${__dirname}/../docs`
}
exports.hasSignIn = (req, res, next) => {
  if (req.session.user) {
    let panel = fs.readFileSync(path.docs + "/panel.html", 'utf-8')

    panel = panel.replace('{{name}}', req.session.user.access)
    panel = panel.replace('{{email}}', req.session.user.email)
    res.send(panel)
  }
  next()
}