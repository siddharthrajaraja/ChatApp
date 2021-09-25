export module App{
    class Users{
        username = ""
        password = ""
        email = ""
        constructor(username : string,password: string,email:string){
            this.username = username
            this.password = password
            this.email = email
        }
        getUsername = () =>{
            return this.username
        }
        
    }
    
}