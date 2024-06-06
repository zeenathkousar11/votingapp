let salmavotes=0;
let zeenathvotes=0;
let tarannumvotes=0;
 let totalcount=0;
function salmavotecount(){
    salmavotes++;
    totalcount++;
    stopvotes(totalcount)
}
function zeenathvotecount(){
    zeenathvotes++;
    totalcount++;
    stopvotes(totalcount)

}
function tarannumvotecount(){
    tarannumvotes++;
    totalcount++;
    stopvotes(totalcount)

}
function stopvotes(count){
    if (count >=8){
       
        document.getElementById("salmabtn").disabled=true;
        document.getElementById("zeenathbtn").disabled=true;
        document.getElementById("tarannumbtn").disabled=true;
        alert ("voting are closed")
        // alert(`winner is ${greatest}`)
        console.log(count)
        console.log(`number of votes of salma,${salmavotes}`)
        console.log(`number of votes of zeenath,${zeenathvotes}`)
        console.log(`number of votes of tarannum,${tarannumvotes}`)
        console.log("winner among three")
        let greatest=((salmavotes>zeenathvotes&&salmavotes>tarannumvotes)?"salma":((zeenathvotes>tarannumvotes)?"zeenath":"tarannum"))
         console.log(greatest )
         document.getElementById("displayText").innerHTML="Votings Are Closed"
         alert(`winner is ${greatest}`)
         document.getElementById("text").innerHTML=`Winner is ${greatest}`
    }

}
 stopvotes(totalcount)
