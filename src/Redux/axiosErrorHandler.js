import axios from 'axios'
import { Bounce, toast } from 'react-toastify';

 const axiosInstance= axios.create({
  baseURL: 'https://listtimes.onrender.com/api/todo',
  // other configurations
})

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if ((error.response && error.response.status === 404 )|| (error.response && error.response.status === 401 ) ||  (error.response && error.response.status === 502 )) {
    //   console.log('call the refresh token api here')
     toast.error(error.message, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });

      // Handle 401 error, e.g., redirect to login or refresh token
    }
    return Promise.reject(error)
  },
)

export default axiosInstance