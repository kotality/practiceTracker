require("dotenv").config() 
var { MongoClient, ServerApiVersion } = require('mongodb')
var mongoose = require('mongoose')
var express = require('express')
var router = express.Router()

const client = new MongoClient(process.env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

async function run() {
  try {
    await client.connect()
    await client.db('admin').command({ ping: 1 })
    console.log('Pinged your deployment. Succesfully connected to MongoDB!')
  } finally {
    await client.close()
  }
}
run().catch(console.dir)

router.get('/', (req,res) => {
  res.json({ message: 'It works!' })
})

module.exports = router