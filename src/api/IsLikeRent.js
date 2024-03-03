/*
 * @Author: Junk Chen junkchen@vip.qq.com
 * @Date: 2024-02-12 15:54:16
 * @LastEditors: Junk Chen junkchen@vip.qq.com
 * @LastEditTime: 2024-02-12 17:00:47
 * @FilePath: \SXprogram\src\api\IsLikeRent.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import instance from "../utils/request";

export const IsLikeBooklist = (item) => {
    return instance.put('/rent/booklist/like',item)
}

export const IsLikeBicyclelist = (item) => {
    return instance.put('/rent/bicyclelist/like',item)
}

export const IsLikeCameralist = (item) => {
    return instance.put('/rent/cameralist/like',item)
}

export const IsLikeDiandonglist = (item) => {
    return instance.put('/rent/diandonglist/like',item)
}

export const IsLikeEarlist = (item) => {
    return instance.put('/rent/earlist/like',item)
}

export const IsLikeLaptoplist = (item) => {
    return instance.put('/rent/laptoplist/like',item)
}

export const IsLikePhonelist = (item) => {
    return instance.put('/rent/phonelist/like',item)
}