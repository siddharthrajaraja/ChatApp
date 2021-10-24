import sequelize from './psql';

const testConnection=async()=>{
    try{
        await sequelize.authenticate()
        console.log("Successful Connection")
    }
    catch(e){
        console.log(e)
    }
}

testConnection()