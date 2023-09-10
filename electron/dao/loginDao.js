const mysql = require('../service/database/mysql')
const connection = mysql.connection

const query = args => {
    return new Promise((resolve , reject)=> {
        connection.query("select * from user where username = ? and password = ?",[args.values.username,args.values.password],(error,results)=>{
            if (error){
                reject(error);
            }else {
                resolve(results.length !== 0)
            }
        })
    })
}

module.exports = {
    query
}