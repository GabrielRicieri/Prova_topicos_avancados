const express = require('express')
const app = express()
const service = require('./src/services')

const router = express.Router()
router.get('/', (req, res) => {
    res.send('rodando')
})
router.get('/customers/:cpf/dependents', service.getCustomersAllDependents)
router.delete('/customers/:cpf', service.deleteCustomers)
router.get('/customers/:cpf', service.getCustomersById)
router.put('/customers/:cpf', service.updateCustomers)
router.get('/customers', service.getAllCustomers)
router.post('/customers', service.newCustomers)

app.use('/', router)

const porta = process.env.PORT;
console.log(porta)

app.listen(porta || 8081, () => {
    console.log('Server started on port 8081')
})