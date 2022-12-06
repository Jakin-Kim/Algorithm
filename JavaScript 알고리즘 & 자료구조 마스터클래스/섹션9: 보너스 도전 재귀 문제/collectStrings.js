const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

function collectStrings(obj) {
    let collect = [];
    function loopingObj(object) {
        // base case
        
        
        for(let key in object) {
            if(typeof object[key] === 'string') {
                collect.push(object[key]);
            }
            
            if(typeof object[key] === 'object') {
                // recursive case
                loopingObj(object[key]);
            }
        }    
    }
    
    loopingObj(obj);
    
    return collect;
}
collectStrings(obj) // ["foo", "bar", "baz"])
