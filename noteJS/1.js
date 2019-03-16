function f(a,b,c) {
    this.a=a;
    this.b=b;
    this.c=function () {
        console.log('name');
    }
}

// f.prototype.color='red';
let dom1=new f('A','B');
// dom1.color='blue';
f.prototype.__proto__.color='xx';
// console.log(dom1.a);
// console.log(dom1.b);
let dom2=new f('C','D');
// console.log(dom2.a);
// console.log(dom2.b);
// console.log(dom1.c===dom2.c);

console.log(dom1.color === dom2.color);
console.log(dom1.color, dom2.color);