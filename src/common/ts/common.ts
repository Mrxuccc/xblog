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
    // const markdownPattern = /\*\*[\s\S]*?\*\*|__[\s\S]*?__|[`\*_]{1,3}([\s\S]*?)(?:[\s\S]*?|\B)[`\*_]{1,3}|\B\*\*[\s\S]*?\*\*(?:[\s\S]*?|\B)|\B__[\s\S]*?__(?:[\s\S]*?|\B)|~~[\s\S]*?~~|\{:\w+\}|[`\*_=\[\]]|\Bhttps?:\/\/[\w\/:%#~/.-?=&]+|\B@[\w_]+|\{\{\{|\}\}\}|\n|\{:\w+:}/g;
    // const htmlTagPattern = /<("[^"]*"|'[^']*'|[^'">])*>/g;
    const codeBlockPattern = /```[\s\S]*?```/g;

    // 替换为空字符串
    // str = str.replace(markdownPattern, '');
    // str = str.replace(htmlTagPattern, '');
    str = str.replace(markdownRegex, '')
    str = str.replace(codeBlockPattern, '');

    return str.trim();
}