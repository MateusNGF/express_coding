const express = require('express')
const session = require('express-session')

const access = require('./middwares/access')

const port = process.env.PORT || 3000
const app = express()

const path = {
  docs: `${__dirname}/docs`
}

app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: 'login test'
}))

app.use(express.urlencoded({
  extended: true
}))

app.get('/', access.hasSignIn, (req, res) => {
  res.sendFile('login.html', { root: path.docs })
})

app.post('/login', (req, res) => {
  const { email, password } = req.body
  if (email === "adm" && password === "adm") {
    req.session.user = {
      access: "Administrador", email, password
    }
  }
  res.redirect("/")
})


app.listen(port, () => {
  console.log("======> Server running in " + port)
})