export interface SetBoxImageValue {
  id: string | number, //key值
  text: string,
  img: string,
  tag: 'img' | 'video' | 'article', //图片img,视频video
  info: string,
  tagTextList: string[],
  createDate: string | Date,
  updateDate?: string | Date
}

export interface setShareInfoType {
  id: string | number,
  username: string,
  userid: string | number,
  createTime: string | Date,
  info: string,
  avatarImg: string,
  showImg: [],
  commentNumber?: number | string,

}

export type setCommentType = {
  id: string | number,
  userid: string | number,
  username: string,
  createTime: string | Date,
  updateTime?: string | Date,
  comment: string,
  avatarImg?: string,
  showImg?: string | null | undefined | [],
  to?: string | null | undefined,
  toUserid?: string | null | undefined


}

export type LoginType = {
  userid?: string | number,
  username: string,
  password: string,
  email?: string,
  checkPassword?: string,
}


export type userType = {
  userid: string | number,
  username: string,
  role: string,
  password: string
  email: string
  avatarImg?: string
  createTime?: Date,
  updateTime?: Date

}

