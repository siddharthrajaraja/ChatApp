export module UsersModel{
    export class Users{
        private username :string 
        private password : string
        private email : string 
        constructor(username : string,password: string,email:string){
            this.username = username
            this.password = password
            this.email = email
        }
        get Username(){
            return this.username
        }
        get Password(){
            return this.password
        }
        get Email(){
            return this.email
        }
    }
    
}