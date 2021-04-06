import express  from 'express'
import mongoose  from 'mongoose'

const app = express()

mongoose.connect('mongodb://localhost/React', {useNewUrlParser: true, useUnifiedTopology: true});

const Contact = mongoose.model('Contact',{
  name: String,
  number: Number
})

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/contacts', async (req, res) => {
  const contacts = await Contact.find()
  res.status(200).json(contacts)
})

app.post('/contacts', async (req, res) => {
  const {name, number} = req.body
  if(name && number){
    const newContact = await Contact.create({
      name: name,
      number: number
    })
    res.status(201).json(newContact)
  }
  res.status(400).json({ create: false })
})


export default app
