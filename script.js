document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.onclick=e=>{
    let x=document.querySelector(a.getAttribute("href"));
    if(x){e.preventDefault();x.scrollIntoView({behavior:"smooth"})}
  };
});