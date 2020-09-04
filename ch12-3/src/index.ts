import { runServer } from './runServer';
import { connect } from './mongodb/connect';
import { Db } from 'mongodb';

connect()
    .then(async (connection) => {
        const db: Db = await connection.db('ch12-2')
        return db
    }).then(runServer)
    .catch((e: Error) => console.log(e.message))