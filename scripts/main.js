var operatorA;
var operatorB;
var operation;

function init (){
    const result= document.getElementById('result');
    const one= document.getElementById('one');
    console.log(one)
    const two= document.getElementById('two');
    const three= document.getElementById('three');
    const fourth= document.getElementById('fourth');
    const five= document.getElementById('five');
    const six= document.getElementById('six');
    const seven= document.getElementById('seven');
    const eigth= document.getElementById('eigth');
    const nine= document.getElementById('nine');
    const zero= document.getElementById('zero');
    const multiplication= document.getElementById('multiplication');
    const sustraction= document.getElementById('sustraction');
    const sum= document.getElementById('plus');
    const divide= document.getElementById('divide');
    const reset= document.getElementById('reset');
    const equal= document.getElementById('equal');

    one.onclick = function(e){
        //result.textContent =  result.textContent + "1";
        console.log(result.textContent =  result.textContent + "1");
    }
    two.onclick = function(e){
        result.textContent =  result.textContent + '2';
    }
    three.onclick = function(e){
        result.textContent =  result.textContent + '3';
    }
    fourth.onclick = function(e){
        result.textContent =  result.textContent + '4';
    }
    five.onclick = function(e){
        result.textContent =  result.textContent + '5';
    }
    six.onclick = function(e){
        result.textContent =  result.textContent + '6';
    }
    seven.onclick = function(e){
        result.textContent =  result.textContent + '7';
    }
    eigth.onclick = function(e){
        result.textContent =  result.textContent + '8';
    }
    nine.onclick = function(e){
        result.textContent =  result.textContent + '9';
    }
    zero.onclick = function(e){
        result.textContent =  result.textContent + '0';
    }

    reset.onclick = function(e){
        resett();
    }

    sum.onclick = function(e){
        operatorA = result.textContent;
        operation = '+'
        clear();
    }
    sustraction.onclick = function(e){
        operatorA = result.textContent;
        operation = '-'
        clear();
    }
    multiplication.onclick = function(e){
        operatorA = result.textContent;
        operation = '*'
        clear();
    }
    divide.onclick = function(e){
        operatorA = result.textContent;
        operation = '/'
        clear();
    }

    equal.onclick = function(e){
        operatorB = result.textContent;
        resolver();
    }

    function clear(){
        result.textContent='';
    }
    function resett(){
        result.textContent='';
        operatorB=0;
        operatorA=0;
        operation='';
    }

    function resolver(){
        var resp=0;
        switch (operation){
            case '+':
                resp = parseFloat(operatorA) + parseFloat(operatorB);
            break
            case '-':
                 resp = parseFloat(operatorA) - parseFloat(operatorB);
            break
            case '*':
                 resp = parseFloat(operatorA) * parseFloat(operatorB);
            break
            case '/':
                 resp = parseFloat(operatorA) + parseFloat(operatorB);
            break
         }
         resett();
         result.textContent = resp;
    }
}

