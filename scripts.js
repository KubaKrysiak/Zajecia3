console.log("skrypty załadowane!")

const nwm22 = [
{
     Name: "marek22",
     kolor: "czerwona",
     age: 522
},



 {
     Name: "marek11",
     kolor: "niebieska",
    age: 511
 },



{
      Name: "marek62",
     kolor: "zielona",
     age: 562
 },



{
     Name: "marek23",
     kolor: "czarna",
     age: 523
 },



 {
     Name: "marek55",
     kolor: "czerwona",
     age: 555
 },



{
      Name: "marek555",
      kolor: "niebieska",
       age: 5555
 },



 {
     Name: "marek5",
     kolor: "zielona",
     age: 55
 },



    {
         Name: "marek10",
         kolor: "czarna",
         age: 10
     }
]


const owce = nwm22.map(
    nwm => `
    <div class="owca">
        <h3>${nwm.kolor}<h3/>
    </div>
    
    `
)

const tekst = owce.join("");

const tekst2 = document.querySelector("#nwm")

tekst.innerHTML = tekst2
