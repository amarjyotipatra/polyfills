const str=`<div>
          <h1 class="a">This is heading with class</h1>
          <h1>This heading without any class and id</h1>
          <h1 id="a">This heading with id</h1>
         </div>`;
const dom=new DOMParser().parseFromString(str,'text/html');
console.log(dom.body);
function dfs(element,className,result){
    if(element==null) return;
    for(const list of element.classlist){
        if(list ==className) {
            result.push(element);
            return;
        }
    }
    for(const child of element.children){
        dfs(child,className,result);
    }
}

function getElementByClassName(body,className){
    const result=[];
    for(const bodyChild of body.children){
        dfs(bodyChild,className,result);
    }
}

getElementByClassName(dom.body,"a");