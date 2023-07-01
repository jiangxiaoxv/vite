console.log('hello world12');
let str: string = '娃娃哈'

interface IPerson { 
    name: string;
    [props: string]: any;
}

function demo(person: IPerson) {
    console.log(person);
    
}
 
demo({name: 'jxx', age: 12})
// demo()
console.log("meta", import.meta.env.VITE_PROXY_TRAGET);
