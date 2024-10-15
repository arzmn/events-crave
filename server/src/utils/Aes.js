import CryptoJS from 'crypto-js'


export const encrypt=(data)=>{
    const cipher = CryptoJS.AES.encrypt(data,process.env.AES_SECRET_KEY).toString()
    return cipher
}


export const decrypt=(data)=>{
    const bytes=CryptoJS.AES.decrypt(data,process.env.AES_SECRET_KEY)
    const originalData=bytes.toString(CryptoJS.enc.Utf8);
    return originalData

}