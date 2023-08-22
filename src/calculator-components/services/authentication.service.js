
import axios from 'axios';

const loginUrl = "http://localhost:8080/CLEANSPRINGSECURITY/api/auth/signin";
const hdr = () => {JSON.parse(localStorage.getItem("data"));}
let axiosConfig ={
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
         'Authorization': 'Bearer '+ hdr()
        // 'Authorization':"BearereyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJoYXJzaCIsImlhdCI6MTY4OTMxMzMyNSwiZXhwIjoxNjg5Mzk5NzI1fQ.exGRFXQyGzb3yl4iz3rexAzXDwqgk04Jcw00sse3bh4"
    }
}

const getcurrentUser = () => {
    return JSON.parse(localStorage.getItem('data'));
}

const hasAccess =()=>{  
   if(getcurrentUser()===null){
        return;
    } else{
        console.log("else block has acces")
        const value = JSON.parse(localStorage.getItem("data"));
        console.log(value)
        let check = false;
        const ROLE_VALUE = [value.roles]; 
        const roless = ROLE_VALUE.map(rol =>{
           console.log("in map method"+rol)
            if(rol=="ROLE_ADMIN"){
                check = true;
            }
       })
    
       return check;
    }
 
}

const login = (body) => {

    axios.post(loginUrl,JSON.stringify(body),axiosConfig)
    .then( (res)=>{console.log(res)
     const localValueStorage = localStorage.setItem('data', JSON.stringify(res.data));
     const datakey = JSON.parse(localStorage.getItem("data"));
    }

)
.catch((err)=>{console.error(err)})
}

const authHeader = ()=>{
    const accesTkn =  getcurrentUser();
    console.log(accesTkn);
    return accesTkn.accessToken;
} 

const AuthService = {
    login,hasAccess,authHeader
}

export default AuthService;
