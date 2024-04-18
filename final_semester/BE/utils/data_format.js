
export const Data_verify = (args)=>{
    const args_keys = Object.keys(args)
    if(args_keys.length ==0){
        return false
    }
    for(let i=0;i<args_keys.length;i++){
        if(!args[`${args_keys[i]}`] || args[`${args_keys[i]}`] ==""){
            return true
        }
    }
    return false
}
export const Data_format = (obj)=>{
    const keys = ["name","introduce","time","year"]
    const data_keys = Object.keys(obj)
    for(let i =0;i<data_keys.length;i++){
        let verify = false;
        for(let x=0;x<keys.length;x++){
            if(data_keys[i] == keys[x]){
                verify = true
            }
        }
        if(!verify){
            return true 
        }
    }
    return false
}
export const Validate_email = (email)=>{
    return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}