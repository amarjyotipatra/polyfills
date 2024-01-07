const str=`<div>
          <h1 class="a">This is heading with class</h1>
          <h1>This heading without any class and id</h1>
          <h1 id="a">This heading with id</h1>
         </div>`;
const dom=new DOMParser().parseFromString(str,'text/html');
console.log(dom.body);
function dfs(element,tagName,result){
    if(element==null) return;
    if(element.tagName==tagName){
        result.push(element);
        return;
    }
    for(const child of element.children){
        dfs(child,tagName,result);
    }
}

function getElementByTagName(body,tagName){
    const result=[];
    for(const bodyChild of body.children){
        dfs(bodyChild,tagName,result);
    }
    console.log(result);
}

getElementByTagName(dom.body,"h1");