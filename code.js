const [stdout, stdin] = [process.stdout, process.stdin];
var n=[];
let i=0;
var answer=1;
 const output=()=>{
 
   stdin.on('data', (ans)=>{
   
     n.push(parseInt(ans));
     console.log(n,i);
     i++;
    if(i>1){
        
        
    for(let k=0;k<=n[1];k++){
      stdin.on('data', (ans)=>{
    console.log(answer,k,parseInt(ans));
    answer= answer*parseInt(ans);
    if(k===n[1]){
      process.stdin.destroy();
    }
  });
  }
       
     
     
    }
 });

};
output();

