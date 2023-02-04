//My Solution (very dumb solution, 4/10)
var romanToInt = function(s) {
    const charS = s.split('');              //very useless thing to do since javascript can turn string into char by default

    let numeric = 0;

    for(let i = 0; i <= charS.length; i++){
        if(charS[i] == 'M'){                //too many ifs, code isn't efficient and takes a lot of time
            numeric += 1000;
        }
        
        else if(charS[i] == 'D'){
            numeric += 500;
        }
        
        else if(charS[i] == 'C'){
            if(charS[i+1] == 'D'){
                numeric += 400;             //should have check whether current number is smaller than the next number LMAO
                i += 1;                     
            } else if(charS[i+1] == 'M'){
                numeric += 900;
                i += 1;
            } else {
                numeric += 100;
            }
        }

        else if(charS[i] == 'L'){
            numeric += 50;
        }
        
        else if(charS[i] == 'X'){
            if(charS[i+1] == 'L'){
                numeric += 40;
                i += 1;
            } else if(charS[i+1] == 'C'){
                numeric += 90;
                i += 1;
            } else {
                numeric += 10;
            }
        }

        else if(charS[i] == 'V'){
            numeric += 5;
        }

        else if(charS[i] == 'I'){
            if(charS[i+1] == 'V'){
                numeric += 4;
                i += 1;
            } else if(charS[i+1] == 'X'){
                numeric += 9;
                i += 1;
            } else {
                numeric += 1;
            }
        }
    }

    return numeric;
};

//Fastest solution
var romanToInt = function(s) {

    //literally hash table
    //make an array that contains data of each roman number and its value
      const sym = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let result = 0;

    for (let i = 0; i < s.length; i++) {
        const cur = sym[s[i]];          //get current char and get the value of the roman number
        const next = sym[s[i + 1]];     //get next char

        if (cur < next) {               //why didn't I think of this
            result += next - cur;       //basic roman number rule, if the current number is smaller than the next number
            i++;                        //then substract the bigger number with the smaller one
        } else {                        
            result += cur;              
        }
    }

    return result;
};