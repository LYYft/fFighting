/*
 * @Author: Junk Chen junkchen@vip.qq.com
 * @Date: 2024-02-19 22:23:16
 * @LastEditors: Junk Chen junkchen@vip.qq.com
 * @LastEditTime: 2024-03-03 14:32:59
 * @FilePath: \SXprogram\src\api\UploadRent.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import instance from "../utils/request";

//上传书籍信息
export const UploadBookMessage = (data) => {
    return instance.post('/rent/uploadBook',data)
}

export const UploadBicycleMessage = (data) => {
    return instance.post('/rent/uploadBicycle',data)
}

export const UploadCameraMessage = (data) => {
    return instance.post('/rent/uploadCamera',data)
}

export const UploadLaptopMessage = (data) => {
    return instance.post('/rent/uploadLaptop',data)
}

export const UploadDiandongMessage = (data) => {
    return instance.post('/rent/uploadDiandong',data)
}

export const UploadPhoneMessage = (data) => {
    return instance.post('/rent/uploadPhone',data)
}

export const UploadEarphoneMessage = (data) => {
    return instance.post('/rent/uploadEarphone',data)
}