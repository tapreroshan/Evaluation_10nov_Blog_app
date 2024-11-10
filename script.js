document.addEventListener("DOMContentLoaded",function(){
    const root=document.getElementsByClassName("root");
    
})
const container=document.getElementById("container")
let posts=[];
const filter = document.getElementsByClassName("filter")
const filterselect= document.getElementById("filterselect")

async function fetchPost() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    displyPost(data);
    // filterbyuser(data);

    console.log(data);
    
}
//To Disply all posts
function displyPost(data){
    container.innerHTML=''
    let displydata=data.forEach(element => {
        const postelement = document.createElement('div');
        postelement.classList.add("postelement");
        postelement.innerHTML=`
        <h3>${element.title}</h3>
         <p>${element.body}</p>
        `
        container.appendChild(postelement)      
    });
}


// To Filter by user
function filterbyuser(data){
    //  container.innerHTML=''
     let filterdata=data.filter((ele)=>{
        return ele.userId==filterselect.value
     })

}

fetchPost()






