// ajax in 120 characters from https://gist.github.com/segdeha/5601610
function a(u,c){var x=new XMLHttpRequest;x.open('GET',u);x.onreadystatechange=function(){3<x.readyState&&c(x)};x.send()}

// insta-module, voilá
export { a }
