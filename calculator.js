function clearInput() {
    $('.calculator-input').val('');
}

function insertCharacter(char) {
    let currentValue = $('.calculator-input').val();
    let length = currentValue.length;
    let flag = false;
    if(char == '+' || char == '-' || char == '*' || char == '/')
        flag = true;
    if(length == 0)
    {
    
        if(flag)
        return;
    }
    let flagNew = false;
    let lastCharacter = currentValue[length-1];
    if(lastCharacter == '+' || lastCharacter == '-' || lastCharacter == '*' || lastCharacter == '/')
    flagNew = true;
    if(flag && flagNew)
    $('.calculator-input').val(currentValue.substring(0,length-1) + char);  
    else
    $('.calculator-input').val($('.calculator-input').val() + char);   
}

function result() {
    let currentValue = $('.calculator-input').val();
    let length = currentValue.length;  
    let flag   = false;                  
    let char   = currentValue[length-1]; 
    if(char == '+' || char == '-' || char == '*' || char == '/')
        flag = true;
    if(flag)
        $('.calculator-input').val("ERROR!");                           
    else
        $('.calculator-input').val(eval($('.calculator-input').val())); 
}