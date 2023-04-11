const express = require('express')
const app = express()
const port = 7000;
app.use(express.json())

const employee = [
    {
        id: 1,
        name: 'John',
        age: 23
    },
    {
        id: 2,
        name: 'Smith',
        age: 45
    },
    {
        id: 3,
        name: 'Donald',
        age: 23
    },
    
]

app.get('/', (req, res) => {
//   res.status(200).json(employee)
res.send(employee)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})