export interface SetBoxImageValue {
  id:string|number, //key值
  text:string,
  img:String,
  tag:'img'|'video'|'article', //图片img,视频video
  info:String,
  tagTextList:string[],
  date:string|Date
}

export interface setShareInfoType {
  id:string|number,
  userName:string,
  releaseTime:string|Date,
  info:string,
  avatarImg:string,
  showImg:[string],
  commentNumber:number|string
}