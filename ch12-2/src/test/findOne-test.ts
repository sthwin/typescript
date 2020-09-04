import { connect } from './../mongodb/connect';
import { MongoClient, Cursor, Db } from 'mongodb'

const findOneTest = async() => {
    let connection: MongoClient
    let cursor: Cursor

    try {
        connection = await connect()
        const db: Db = await connection.db('ch12-2')
        const personsCollection = db.collection('persons')

        cursor = personsCollection.find({})
        const foundPersons = await cursor.toArray()

        const _id = foundPersons[0]._id
        const result = await personsCollection.findOne({_id})
        console.log(result)
    } catch(e) {
        console.log(e.message)
    } finally {
        connection.close()
    }
}

findOneTest()