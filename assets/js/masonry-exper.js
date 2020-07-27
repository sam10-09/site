let $parentNode = document.querySelector(".masonry");
let arr = Array.from($parentNode.querySelectorAll(".masonry-el"));
split(arr,4,$parentNode);
function split(arr,n,node) {
    let N = 0,cnt=0,l = arr.length;
    createRow(n,node);
    let columns = Array.from(document.querySelectorAll(".column"));
    while(l--) {
        N%=n;
        N++;
        columns[N-1].appendChild(arr[cnt++]);
    }
}
function createRow(n,node) {
    for (let i=0;i<n;i++) {
        let columns = document.createElement("li");
        columns.className="column";
        node.appendChild(columns);
    }
}