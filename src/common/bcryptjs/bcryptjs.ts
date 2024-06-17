import { JSEncrypt } from 'jsencrypt'

//公钥加密

export function getEncrypt(publicKey:string,message:string){
    const encryption = new JSEncrypt({ default_key_size: '1024' });
    // console.log(encryption);
    encryption.setPublicKey(publicKey); // 设置公钥
    return encryption.encrypt(message); // 对数据进行加密
}