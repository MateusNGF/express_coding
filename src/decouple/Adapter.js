

class ExpressAdapterRoute {
  // Ao chamar de router, defina tambem como o Controller ou o endpoint.
  static adapt(controller) {
    return (req, res) => {
      // Definido que o controller só precisara das informações, ele não precisa saber como ou por onde vem.
      const httpRequest = { body: req.body, params: req.params, query: req.query }
      // Agora faz a chamada da função padrão dos controllers.
      const httpResponse = controller.exec(httpRequest)
      // returna para o cliente.
      res.status(httpResponse.statusCode).json(httpResponse.body)
    }
  }
}
module.exports = ExpressAdapterRoute