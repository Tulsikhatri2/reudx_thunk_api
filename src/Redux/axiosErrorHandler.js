import axios from 'axios'
import { toast, Zoom } from 'react-toastify';

 const axiosInstance= axios.create({
  baseURL: 'https://listtimes.onrender.com/api/todo',
})

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error) {
     toast.error(error.message, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
        });
    }
    return Promise.reject(error)
  },
)

export default axiosInstance