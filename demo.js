function calculate()
{
const amt =  document.querySelector("#amount").value;
const intrst =  document.querySelector("#interest").value;
const duration =            document.querySelector("#month").value; 

const output = amt * intrst * duration; 
document.querySelector("#result").innerHTML = output;

}
