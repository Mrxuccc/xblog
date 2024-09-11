//替代required() 加载本地图片
export function getImageUrl(name: any) {
    return new URL(`${name}`, import.meta.url).href
}

//服务器 图片地址
export function getBGImgLinkUrl(e: string) {
    return `url('/xblog-api${e}')`
}
export function getBGImgLink(e: string) {
    return `/xblog-api${e}`
}


export function removeMarkdown(str: string): string {

    const markdownRegex = /[\*\[\]\(\)>\n#]+|<[^>]*>|/g;
    const codeBlockPattern = /```[\s\S]*?```/g;
    // 替换为空字符串
    str = str.replace(markdownRegex, '').replace(codeBlockPattern, '')
    return str.trim();
}


/**
 * 为某个元素添加 class
 * @param element 
 * @param classes 
 */
export function addClasses(element: HTMLElement | null, classes: string[]) {
    console.log(element)
    if (element) {
        element.classList.add(...classes);
    }
}