import { MongoClient } from 'mongodb';
import { connect } from './../mongodb/connect';

const makedbTest = async () => {
    let connection: MongoClient
    try {
        connection = await connect()
        const db = await connection.db('ch12-2')
        console.log('db', db)
    } catch (e) {
        console.log(e.message)
    } finally {
        connection.close()
    }
}

makedbTest()