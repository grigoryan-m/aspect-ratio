document.addEventListener("DOMContentLoaded", () => {
    const asp1 = document.getElementsByClassName("aspect-field")[0];
    const asp2 = document.getElementsByClassName("aspect-field")[1];

    const res1 = document.getElementsByClassName("res-field")[0];
    const res2 = document.getElementsByClassName("res-field")[1];
    const button = document.getElementById("button");
    
    button.addEventListener("click", () => {
        if(res2.value != null && res1.value != null){
            const gcd = (a, b) => {
                while (b !== 0) {
                    const temp = b;
                    b = a % b;
                    a = temp;
                }
                return a;
            };
        
            const commonDivisor = gcd(res1.value, res2.value);
            
            asp1.value = res1.value / commonDivisor;
            asp2.value = res2.value / commonDivisor;
        }
    });
});