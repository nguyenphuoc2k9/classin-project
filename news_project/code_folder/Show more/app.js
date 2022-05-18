const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');
const topic = urlParams.get("topic")
console.log(topic);
console.log(id);

const class_news_data = "https://621a354481d4074e85bc4294.mockapi.io/api/v1/class-news-data/";

fetch(class_news_data + id)
.then(function(repose){
    return repose.json();
})
.then(function(data){
    console.log(data)
})
.catch(function(err){
    console.log(err);
})