L = [];
total = 0;
dflag =0;

function towrite(num){
    onScreen = document.getElementsByClassName("screen")[0].textContent;
    if(onScreen == 0){
        document.getElementsByClassName('screen')[0].textContent = num.toString()
        if(num == "."){
            dflag = 1;
        }
    }else{
        if(num == "."){
            if(dflag == 0){
                dflag = 1;
                document.getElementsByClassName('screen')[0].textContent = onScreen + num.toString();
            }else if(dflag == 1){
            }
        }else{        
            document.getElementsByClassName('screen')[0].textContent = onScreen + num.toString()
        }
    }
    
}

function toperform(sym){
    onScreen = parseFloat(document.getElementsByClassName('screen')[0].textContent);
    L.push(onScreen);
    L.push(sym);
    document.getElementsByClassName('screen')[0].textContent = "0";    
}

function toclear(){
    document.getElementsByClassName('screen')[0].textContent = "0";
    L = [];
}

function tobackspace(){
    onScreen = document.getElementsByClassName('screen')[0].textContent;
    length = onScreen.length;
    x = "";
    for(i = 0 ; i < length - 1 ; i++){
        x = x + onScreen[i]
    }
    document.getElementsByClassName('screen')[0].textContent = x;
    if(onScreen[length - 1] == "."){
        dflag = 0;
    }
}

function toequal(){
    cflag = 0;
    onScreen = parseFloat(document.getElementsByClassName('screen')[0].textContent);
    L.push(onScreen);
    for(i = 0; i < L.length ; i++){
        if(total == 0){
            total = L[i]
        }else{
            if(cflag == 0){
                if(L[i] == "+"){
                    total = total + L[i + 1];
                    cflag = 1;
                }else if(L[i] == "-"){
                    total = total - L[i + 1];
                    cflag = 1;
                }else if(L[i] == "*"){
                    total = total * L[i + 1];
                    cflag = 1;
                }else if(L[i] == "/"){
                    total = total / L[i + 1];
                    cflag = 1;
                }
            }else{
                cflag = 0;
            }
        }
    }
    document.getElementsByClassName('screen')[0].textContent = total.toString();
    total = 0;
    L = [];   
}

