//过滤

//替代required() 加载本地文件
export function getImageUrl(name:any){
    console.log( new URL(`${name}`, import.meta.url))
    return new URL(`${name}`, import.meta.url).href
}