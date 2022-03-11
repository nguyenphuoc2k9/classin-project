
var API = "https://621a354481d4074e85bc4294.mockapi.io/api/v1/iloveroblox"

fetch(API)
.then(function(repose){
     return repose.json()
})
.then(function(data){
     printheml(data)
})
.catch(function(err){
    console.log(err);
})
    
    const printheml = (data) =>{
        let Html = "";
        for(element of data){
            Html +=
            `
            <tr>
              <th scope="row">${element.id}</th>
              <td>
                  <img src="${element.avatar}" alt="avartar" width="10%" height="10%" >
              </td>
              <td>${element.name}</td>
              <td>${element.age}</td>
              <td>
                  <button type="button" class="btn btn-primary">Update</button>
                  <button type="button" class="btn btn-secondary" onclick="deleteuser()" id="delete-btn">Delete</button></td>
            </tr>
          `
        }
        document.getElementById("content").innerHTML = Html;
    }
    //add data
    document.getElementById("add-data").onclick =()=>{
        const name = document.getElementById("name").value
        const age = document.getElementById("age").value

        const user = {
            name,
            age
        }
        fetch(API, {
            method:"post",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(function(repose){
            return repose.json()
        })
        .then(function(post){
            console.log(post);
        })
        .catch(function(err){
            console.log(err);
        })
    }
    //delete
    const deleteuser = (id) =>{
        fetch(API + "/" + id,{
            method:"delete"
        })
        .then(()=>{
            console.log("removed id" + id);
        })
        .then((err) =>{
            console.log(err);
        })
    }