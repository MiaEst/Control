
function header(){
 let header= document.createElement('header');
header.innerText="Mia y Melanie";
header.className="header";

 let div=document.createElement('div');
 div.className="div";
 header.appendChild(div);

 //src
 let img=document.createElement('img')
 img.className="img";
 img.src="https://images.icon-icons.com/3261/PNG/512/github_logo_icon_206752.png"
 div.appendChild(img);
 return header;

}


export {header}