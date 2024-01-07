const str=`<div>
          <h1 class="a">This is heading with class</h1>
          <h1>This heading without any class and id</h1>
          <h1 id="a">This heading with id</h1>
         </div>`;
const dom=new DOMParser().parseFromString(str,'text/html');
console.log(dom.body);
function dfs(element,id,result){
    if(element==null || result.length==1) return;
        if(element.id==id) {
            result.push(element);
            return;
        }
    for(const child of element.children){
        dfs(child,id,result);
    }
}

function getElementById(body,id){
    const result=[];
    for(const bodyChild of body.children){
        dfs(bodyChild,id,result);
    }
}

getElementById(dom.body,"a");