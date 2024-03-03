/*
 * @Author: Junk Chen junkchen@vip.qq.com
 * @Date: 2024-01-07 14:56:31
 * @LastEditors: Junk Chen junkchen@vip.qq.com
 * @LastEditTime: 2024-01-18 23:21:33
 * @FilePath: \SXprogram\src\api\GoodsRent.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import instance from "../utils/request";

export const GetEarList = () => {
    return instance.get('/rent/earlist')
}

export const GetBookList = () => {
    return instance.get('/rent/booklist')
}

export const GetBicycleList = () => {
    return instance.get('/rent/bicyclelist')
}

export const GetDianDongList = () => {
    return instance.get('/rent/diandonglist')
}

export const GetLaptopList = () => {
    return instance.get('/rent/laptoplist')
}

export const GetPhoneList = () => {
    return instance.get('/rent/phonelist')
}

export const GetCameraList = () => {
    return instance.get('/rent/cameralist')
}