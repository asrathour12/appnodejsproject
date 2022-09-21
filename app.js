const express = require('express')
const app = express()

app.get('/', (req, res) => re.send('Hello World!'))
app.listen(3000, () => console.log('server ready'))
