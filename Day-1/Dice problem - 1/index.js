document.querySelector("#roll").addEventListener("click" , throwDice)

function throwDice(){
        const random =(min=1,max = 6) => Math.floor(Math.random()*(max-min)+min)


        let a = random();
        let b = random();
        let c = random();

        var c1 = "";
        var c2 = "";
        var c3 = "";


        if(a>b && a> c){
                c1 = "green"
        }
        else if(b>a,b>c){
                c2 = "green"
        }
        else if(c>a,c>b){
                c3 = "green"
        }



        if(a<b && a< c){
                c1 = "red"
        }
        else if(b<a,b<c){
                c2 = "red"
        }
        else if(c<a,c<b){
                c3 = "red"
        }
        
        
        if(a>b && a<c || a<b && a>c){
                c1 = "yellow"
        }
        else if(b>a && b<c || b<a && b>c){
                c2 = "yellow"
        }
        else if(c>a && c<b || c<a && c>b){
                c3 = "yellow"
        }

        if(a==b){
                c1 = "blue"
                c2 = "blue"
        }
        else if(a==c){
                c1 = "blue"
                c3 = "blue"
        }
        else if(b==c){
                c3 = "blue"
                c2 = "blue"
        }
        else if(a==b){
                c1 = "blue"
                c2 = "blue"
                c3 = "blue"
        }
        

        const win = (a,b,c ) => {
                let max = Math.max(a,b,c);
                if(max==a){
                        return 1;
                }
                else if(max==b){
                        return 2;
                }
                else if(max==c){
                        return 3;
                }
        }

        let winner =document.querySelector("#winner")
        winner.textContent = `winner is Member - ${win(a,b,c)}`

        let m1 = document.querySelector("#member-1");
        m1.textContent = a;
        m1.style.backgroundColor = c1
        
        let m2 = document.querySelector("#member-2");
        m2.textContent = b;
        m2.style.backgroundColor = c2
        
        let m3 = document.querySelector("#member-3");
        m3.textContent = c;
        m3.style.backgroundColor = c3
}
       