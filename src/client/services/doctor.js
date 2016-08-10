import api from 'api/api'
export const getDoctors = (mobile) => {
  return api.post('getUserList', {"name":"","mobile":"","role":"D","auth":"","currentPageIndex":1,"pageSize":10,"isPaging":true});
};
