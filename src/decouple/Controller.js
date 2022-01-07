class Controller {
  constructor() { }
  exec(req) {
    try {
      if (req.params.status === "false") {
        throw new Error("Fake")
      }
      return Status.sucess("Sucesso")
    } catch (e) {
      return Status.error(400, e.message)
    }
  }
}


class Status {
  static sucess(msg) {
    return {
      statusCode: 200,
      body: msg
    }
  }

  static error(code, msg) {
    return {
      statusCode: code,
      body: {
        menssage: msg
      }
    }
  }
}

module.exports = Controller
