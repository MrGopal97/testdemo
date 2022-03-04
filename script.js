var request =new XMLHttpRequest();
request.open("GET","https://www.anapioficeandfire.com/api/books/1");
request.send();
request.onload=function() {
      var data= JSON.parse(request.response);
      console.log(data);
   }
{
   var res=data.filter((e)=>e.region==="Asia");
   console.log(res);
      
}
{
 var final=res.reduce((sum,cv)=>sum+cv.population,0);
 console.log(final);
      


}