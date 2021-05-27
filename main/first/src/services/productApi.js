import axiosClient from "./axiosClient";

const productApi = {

    getAll: (params) => {
        const url = '/todos';
        return axiosClient.get(url, { params });
    },
    delete: (id) => {
        // console.log(id);
        const url = `/delete?id=${id}`
        return axiosClient.delete(url);
    },
    create: (name,message) => {
        const url = `/createTodo`
        return axiosClient.post(url, {
            name: name,
            message: message
        })
    },
    update:(id,name,message)=>{
        const url = `/update`
        return axiosClient.put(url,{
            id:id,
            name:name,
            message:message
        })
    }

    // get: (id) => {
    //     const url = '/products';
    //     return axiosClient.get(url);
    // },


}
export default productApi;