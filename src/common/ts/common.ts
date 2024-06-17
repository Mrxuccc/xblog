//数据过滤方法

//替代required() 加载本地文件
export function getImageUrl(name:any){
    return new URL(`${name}`, import.meta.url).href
}
