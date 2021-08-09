object1 = {"a":{"b":{"c":"d"}}}

object2 = {"x":{"y":{"z":"a"}}}

function getObjectKeys(object, key) {
    // if you want another split key you can change this.
    const keys = key.split('/');
    let obj = object;
    for (let ikey of keys) {
        for (let [objKey, value] of Object.entries(obj)) {
            if(!keys.includes(objKey)) {
                continue;
            }
            obj = value;
        }
    }
    return obj;
}

console.log("Result at 'a/b/c':", getObjectKeys(object1, 'a/b/c'));

console.log("Result at 'x/y/z':", getObjectKeys(object2, 'x/y/z'));


https://github.com/hchiao/three-tier-architecture

https://github.com/lpredova/Katyusha

https://acloud.guru/forums/aws-cda-2018/discussion/-LxM1CBXWo8QgFv2vvEL/How%20does%20API%20Gateway%20deal%20with%20legacy%20SOAP%20applications	