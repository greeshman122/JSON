async function add(a,b) 
{
    let sum = await a+b;
    display(sum);
}
function display(sum)
{
    document.getElementById("output").innerHTML = sum;
}
add(9,4)