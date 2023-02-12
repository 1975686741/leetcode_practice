// 遍历
function replaceSpace(s: string): string {
    let result:string="";
    for(let i of s){
        if(i===" ") 
            result+="%20";
        else 
            result+=i;
    }
    return result;
};

// 正则
function replaceSpace(s: string): string {
    return s.replace(/\s/g, '%20')
};

// 分割
function replaceSpace(s: string): string {
    return s.split(" ").join("%20")
};
