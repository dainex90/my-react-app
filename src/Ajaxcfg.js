
function Ajaxcfg()
{
//loadDoc("url-2", myFunction2);

function loadDoc(url, cFunction) {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {cFunction(this);}
  xhttp.open("GET", url, true);
  xhttp.send();
}

function myFunction1(xhttp) {
  // action goes here
  document.getElementById("mediacontent").innerHTML = `${xhttp.statusText}`;
  console.log("IM in myFunction1");

}

/*function myFunction2(xhttp) {
  // action goes here
}*/

/*const xhttp = new XMLHttpRequest();
xhttp.onload = function() {
  const xmlDoc = this.responseXML;
  const x = xmlDoc.getElementsByTagName("ARTIST");
  let txt = "";
  for (let i = 0; i < x.length; i++) {
    txt = txt + x[i].childNodes[0].nodeValue + "<br>";
  }
  document.getElementById("demo").innerHTML = txt;
}
xhttp.open("GET", "cd_catalog.xml");
xhttp.send();*/

    return(
        <>
        {loadDoc("https://onedrive.live.com/?cid=A523C1E87430D3A5&id=A523C1E87430D3A5%217199&parId=A523C1E87430D3A5%217198&o=OneUp", myFunction1)}
        </>
    );
}

export default Ajaxcfg;