const input = document.getElementById("noOfWords");
const container = document.querySelector(".div");


const generateWords = (n) => {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    let text="";
    for(let i=0 ;i<n ; i++){
        const random = (Math.random()*25).toFixed(0);
        text += letters[random];
    }
    return text;
}



let totalWords;

const generatePara = () => {

    totalWords = Number(input.value);
    

    myPara = document.createElement("p");
    myPara.setAttribute("class","mypara");

    let data="";

    for(let i=0 ;i<totalWords; i++){
    const wordlength = (Math.random()*10).toFixed(0);
    data += generateWords(wordlength);
    data += " ";
    }
    myPara.innerText=data;
    container.prepend(myPara);

}