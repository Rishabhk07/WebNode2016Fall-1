/**
 * Created by championswimmer on 11/09/16.
 */

function MyNumber(n) {
    let num = n;
    
    return {
        incr: () => {
        num++;
        },
        decr: () => {
            num--;
        },
        print: () => {
            return num;
        }
        
    
    }
}