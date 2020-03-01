function getHistory(){
    return document.getElementById("history-value").innerText;
}

function printHistory(num){
    document.getElementById("history-value").innerText = num;
}
function getOutput(){
    return document.getElementById("output-value").innerText;
}
function printOutput(num){
    if (num==""){
        document.getElementById("output-value").innerText=num;
    }
    else{
        document.getElementById("output-value").innerText=getFormattedString(num);
    }
}
function getFormattedString(num){
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}

function reverseFormattedNumber(num){
    return Number(num.replace(/,/g,''));
}

var operator = document.getElementsByClassName("operator");
var i;
for(i=0; i<operator.length ;i++){
    operator[i].addEventListener('click',function(){
       if(this.id=="clear"){
           printOutput("");
           printHistory("");
       }
       else if(this.id=="backspace"){
           var output = reverseFormattedNumber(getOutput()).toString();
           if(output){
               output = output.substr(0,output.length-1);
               printOutput(output);
           }
        }
        else{
            var output = getOutput();
            var history = getHistory();
            if(output!=""){
                output = reverseFormattedNumber(output);
                history=history+output;
                if(this.id=="="){
                    var result=eval(history);
                    printOutput(result);
                    printHistory("");
                }
                else{
                    history+=this.id;
                    printHistory(history);
                    printOutput("");
                }
            }

        }
       

})};
var number = document.getElementsByClassName("number");
for(i=0; i<number.length ;i++){
        number[i].addEventListener('click',function(){
        var output = reverseFormattedNumber(getOutput());
        output+=this.id;
        printOutput(output);
})};

