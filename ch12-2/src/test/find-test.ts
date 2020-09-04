import { connect } from './../mongodb/connect';
import { MongoClient, Cursor, Db } from 'mongodb'

const findDocumentTest = async () => {
    let connection: MongoClient
    let cursor: Cursor

    try {
        connection = await connect()
        const db: Db = connection.db('ch12-2')
        const personsCollection = db.collection('persons')
        const addressesCollection = db.collection('addresses')

        cursor = personsCollection.find({ name: 'Jack' })
        const foundPersons = await cursor.toArray()
        console.log(foundPersons)

        cursor = addressesCollection.find({})
        const foundAddresses = await cursor.toArray()
        console.log(foundAddresses)
    } catch (e) {
        console.log(e.message)
    } finally {
        connection.close()
    }
}

findDocumentTest()