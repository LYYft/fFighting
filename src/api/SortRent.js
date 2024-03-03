import instance from "../utils/request";
//获取分类列表
export const GetSortList = () => {
    return instance.get('/rent/sortlist')
}