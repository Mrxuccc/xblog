export interface SetBoxImageValue {
  id:string|number, //key值
  text:string,
  img:String,
  tag:'img'|'video'|'article', //图片img,视频video
  info:String,
  tagTextList:string[],
  date:string|Date
}