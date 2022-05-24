let dataSet=[
    {
        "previewImage": "https://images.unsplash.com/photo-1561948955-570b270e7c36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "title": "cat.jpeg"
    },
    {
        "previewImage": "https://images.unsplash.com/photo-1606787620819-8bdf0c44c293?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "title": "a man and a woman trying to cook a meal together in a modern kitchen.jpg"
    },
    {
        "previewImage": "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "title": "bali-kelingking-beach-plastic-removal-drive.key"
    },
    {
        "previewImage": "https://images.unsplash.com/photo-1623206837956-07dab21608f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "title": "NextByk Investor Pitch 2022.ppt"
    },
    {
        "previewImage": "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        "title": "interns-performance-report-may-2022.key"
    }
]

const bodyy=document.querySelector("div div");
ind=0
dataSet.forEach(function(Element){
    let s1=(Element.title.length<30?Element.title:Element.title.substring(0,14)+"...."+Element.title.substring(Element.title.length-14));
    let newObj=document.createElement("button");
    newObj.setAttribute("id",Element.previewImage);
    ind++;
    newObj.innerHTML=`<div class="row" id="${ind}"><img src="${Element.previewImage}" style="width:30px;height:30px"><span>${s1}</span></div>`;
    bodyy.append(newObj);
})


var prev=undefined; 
const tbodyyy=document.querySelector("div div");
tbodyyy.addEventListener("keydown",onkeydown) 
const title=document.querySelector("input")

function activate(item) {
    const y=item.querySelector("span").innerHTML;
 title.value=y ;
    const shw=document.querySelector(".display");
    const cng=shw.querySelector("img");
    cng.setAttribute("src",item.id) ;
    if(prev!=undefined){
       prev.classList.remove("class","blue");
    }
    prev=item;
    item.classList.add("class","blue") 
}
 title.addEventListener("change",(event)=>{
   let str=(Element.title.length<38?Element.title:Element.title.substring(0,19)+"...."+Element.title.substring(Element.title.length-19));
   event.target.value=str 
   if(prev!=undefined){
      prev.querySelector("span").innerHTML=str  
      activate(button[ind])
   }
})

const button=document.querySelector(".column").querySelectorAll("button");
button.forEach(function(Element){
Element.addEventListener("click", (event) => {
        ind=Element.querySelector("div").id
        activate(Element)
  }, false);})


document.addEventListener('keydown',function(e){
    console.log(e.key);
    switch(e.key){
        case "ArrowUp":
            e.preventDefault();
            console.log(e.keycode)
            if(ind==0)            {
                ind=button.length
            }
            ind=(ind-1+button.length)%button.length;
            activate(button[ind]);
            break;
        case "ArrowDown":
            e.preventDefault();
            console.log(e.keycode)
            if(ind==button.length-1){
                ind=-1;
            }
            ind=(ind+1+button.length)%button.length;
            activate(button[ind]);
            break;
    }
});


