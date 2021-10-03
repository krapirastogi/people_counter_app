//document.getElementById("count-el").innerText = 5
let countEl=document.getElementById("count-el")
console.log(countEl)
let count=0
function increment(){
  console.log("clicked")
  count+=1
  countEl.textContent=count
  console.log(count)
}
let saveEl=document.getElementById("save-el")
function save()
{
  let countstr=count+" - "
  saveEl.textContent+=countstr
  console.log(countstr)
  countEl.textContent=0
  count=0
}
