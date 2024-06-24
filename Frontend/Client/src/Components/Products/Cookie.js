import Cookies from 'js-cookie';

// Function to set cookies
 const setUidCookie = (productId) => {
  Cookies.set('productId', productId, { expires: 7 }); 
};
 const setModel = (model) => {
  Cookies.set('model', model, { expires: 7 }); 
};
export {setUidCookie,setModel}