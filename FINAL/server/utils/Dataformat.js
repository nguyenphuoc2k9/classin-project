export const CheckNullOrUndefined = (body)=>{
    const body_key = Object.keys(body)
    for(let i = 0;i<body_key.length;i++){
        if(body[`${body_key[i]}`] == null || body[`${body_key[i]}`] == undefined){
            console.log(body_key);
            return true
        }
    }
    return false
}
export const verifyEmail = (email)=>{
    return String(email).toLowerCase().match( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
}