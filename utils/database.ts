import sql from "mssql";

const config = {

    server: "localhost",

    database: "OrangeHRM",

    user: "sa",

    password: "123456",

    options: {

        trustServerCertificate: true

    }

};

let pool: sql.ConnectionPool;

// connection 
export async function connectDB() {

    if (!pool) {

        pool = await sql.connect(config);

    }

    return pool;

}

// close connection 
export async function closeDB() {

    if (pool) {

        await pool.close();

    }

}

export async function getEmployeeByUsername(username: string) {

    const db = await connectDB();

    const result = await db.request()
        .input("username", username)
        .query(`
            SELECT *
            FROM Employee
            WHERE username = @username
        `);

    return result.recordset[0];
}