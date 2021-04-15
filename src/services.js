var customers = []

const getCustomersAllDependents = (req, res) => {
    var cpf = req.params.cpf;
    var result = [];

    customers.forEach(elemento => {
        if (cpf == elemento.cpfTitular) {
            result.push(elemento)
        }
    })
    if (result.length == 0) res.json({ message: "Customer not found" }, 404)
    res.json(result)
}

const deleteCustomers = (req, res) => {
    var cpf = `${req.params.cpf}`;
    let valid = false;
    for (let i = 0; i < customers.length; i++) {
        if (cpf == customers[i].cpfTitular) {
            customers.splice(i, 1);
            valid = true;
        }
    }

    if (!valid) res.json({ message: "Custome not found" }, 404)
    else res.json({}, 200)
}

const getCustomersById = (req, res) => {
    var cpf = `${req.params.cpf}`;
    customers.forEach(elemento => {
        console.log(cpf)
        console.log(elemento.cpf)
        if (cpf == elemento.cpf) res.json(elemento)
    })
    res.json({ message: "Customer not found" }, 404)
}

const updateCustomers = (req, res) => {
    var body = req.body;
    let valid = false;
    for (let i = 0; i < customers.length; i++) {
        if (cpf == customers[i].cpf) {
            customers[i] = body;
            valid = true;
        }
    }
    if (!valid) res.json({ message: "Custome  found" }, 404)
    res.json({}, 200)
}

const getAllCustomers = (req, res) => {
    return res.send(customers)
}

const newCustomers = (req, res) => {
    var body = req.body;

    if (body.cpfTitular) res.status(405)
    if (body.dataNascimento) res.status(405)
    if (body.nome) res.status(405)
    if (body.cpf) res.status(405)

    var customer = {
        'cpfTitular': body.cpfTitular,
        'dataNascimento': body.dataNascimento,
        'nome': body.nome,
        'cpf': body.cpf,
    }
    customers.push(customer)
    res.json({}, 200)

}


module.exports = {
    getCustomersAllDependents,
    deleteCustomers,
    getCustomersById,
    updateCustomers,
    getAllCustomers,
    newCustomers
}