const mysql = require('mysql2/promise');

async function migrate() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'spaceintell-lp'
  });

  try {
    console.log("Adding UTM columns...");
    await connection.execute(`
      ALTER TABLE leads 
      ADD COLUMN utm_source VARCHAR(255),
      ADD COLUMN utm_medium VARCHAR(255),
      ADD COLUMN utm_campaign VARCHAR(255),
      ADD COLUMN utm_name VARCHAR(255)
    `);
    console.log("Success!");
  } catch (e) {
    if (e.code === 'ER_DUP_FIELDNAME') {
      console.log("Columns already exist.");
    } else {
      console.error("Migration failed:", e);
    }
  } finally {
    await connection.end();
  }
}

migrate();
