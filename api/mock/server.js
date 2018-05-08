// const env = require('../../config/env')
const jsonServer = require('json-server')
const server = jsonServer.create()

// Support middleware
const middleware = jsonServer.defaults()
server.use(middleware)

const port = process.env.MOCK_PORT || process.env.npm_package_mockPort

// 支持加载多个db json文件
const path = require('path')
const fs = require('fs')
const mockDir = path.join(__dirname, 'data')
const files = fs.readdirSync(mockDir)
let base = {}
files.forEach((file) => {
  base = Object.assign({}, base, require(path.resolve(mockDir, file)))
})
const router = jsonServer.router(base)
server.use(router)
// 返回自定义格式数据
router.render = (req, res) => {
  res.jsonp(res.locals.data)
}

server.listen(port, () => {
  console.log('JSON Server is running')
})
