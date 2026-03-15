import { MongoClient } from "mongodb";
import dotenv from "dotenv"
dotenv.config()

/**
 * the database singleton class
 */
export default class Database {
    /**
     * 
     * @param {*} uri the SRV for mongo db
     * @param {*} dbName the databas name
     */
    constructor(uri, dbName) {
        this.uri = uri
        this.dbName = dbName
        this.client = null
        this.db = null
    }

    /**
     * connect to the database
     */
    async connect() {
        // if we got the db, then just return that
        if(this.db) return this.db
        // create the client
        this.client = new MongoClient(this.uri)
        // connects to mongo db and catches any errors
        await this.client.connect().catch(err => {
            throw new Error("Failed to connect", err)
        })
        // set the database to the db variable
        this.db = this.client.db(this.dbName)
        // log we connected
        console.log("Connected to MongoDb")
        // return the db
        return this.db
    }

    /**
     * gets the database
     * @returns the database
     */
    getDb() {
        if(!this.db) throw new Error("Db is not set yet")
        return this.db
    }

    /**
     * disconnect from the database
     */
    async disconnect() {
        // if the client exist, close it
        if(this.client) await this.client.close()
        // set client and db to null
        this.client = null
        this.db = null
    }
}

// database instance
let instance = null

/**
 * Get the database instance
 * @returns the database instance
 */
export function getDatabaseInstance() {
    // if the instance is null
    if(!instance) {
        // get the uri and db name
        const uri = process.env.MONGO_URI
        const dbName = process.env.MONGO_DB_NAME
        // create the instance
        instance = new Database(uri, dbName)
    }
    // return the instance
    return instance
}