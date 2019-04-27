const express = require('express')
const next = require('next')
const env = process.env.NODE_ENV !== 'production'
const app = next({env})
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()
  
  server.get('/p/:id', (req, res) => {
    const actualPage = '/post'
    const queryParams = { id: req.params.id }
    app.render(req, res, actualPage, queryParams)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, err => {
    if(err) throw err

    console.log('> Ready on http://localhost:3000');
  })
})
.catch(exception => {
  console.error(exception.stack);
  process.exit(1)
})