import api from '@/api';

const getPicklists = async (): Promise<any> => {
  return api({
    url: 'picklists', 
    method: 'get'
  });
}

const getPicklist = async (query: any): Promise<any> => {
  return api({
    url: `picklists/${query.id}`,
    method: 'get'
  });
}

const completePicklist = async (payload: any): Promise <any>  => {
  return api({
    url: 'pickPicklist',
    method: 'post',
    data: payload,
  });
}

export const PicklistService = {
  getPicklist,
  getPicklists,
  completePicklist
}