/*
 * @Author: Junk Chen junkchen@vip.qq.com
 * @Date: 2024-01-07 14:56:31
 * @LastEditors: Junk Chen junkchen@vip.qq.com
 * @LastEditTime: 2024-01-07 15:02:54
 * @FilePath: \SXprogram\src\api\GoodsRent.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from "axios";
const baseURL = 'http://127.0.0.1'
const instance = axios.create({
    //基础地址，超时时间
    baseURL,
    timeout: 10000
})
export const GetGoodsMessage = () => {
    return instance.get('/');
} 