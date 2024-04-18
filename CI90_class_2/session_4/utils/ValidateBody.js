const ValidateBody =(body)=>{
    const keys = Object.keys(body)
    const validate = keys.map(key=> !body[`${key}`] ? false : true)
    console.log(body)
    return true in validate
}
export default ValidateBody;