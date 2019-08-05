if (process.env.NODE_ENV !== 'development') {
  require('dotenv').config()
}
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./models')
const Product = db.Product

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.send('hello, use /api/product to get demo-product json data.')
})

app.get('/api/products', (req, res) => {
  Product.findAll({}).then(products => {
    res.json(products)
  })
})

app.post('/api/product', (req, res) => {
  if (!req.body.name || !req.body.price) {
    return res.json({
      status: 'error',
      message: '請輸入名字及價格'
    })
  }
  Product.create(req.body).then(product => {
    Product.findByPk(product.id).then(product => {
      res.json({
        status: 'success',
        product
      })
    })
  })
})

app.listen(port, () => {
  console.log(`Express is running on ${port}`)
})
