import http from 'http'
import app from './app.js'

const port = process.env.PORT ?? 4000
const server = http.createServer(app)

server.listen(port, () => {
  console.log(`
          ／＞　  フ
　　　　　| 　_　 _| 
　 　　　／'ミ _x 彡 
　　 　 /　　　 　 | 
　　　 /　 ヽ　　 ﾉ 
　／￣|　　 |　|　| 
　| (￣ヽ＿_ヽ_)_)
server started at ${port} port
  `);
})
