import utilApi from './utils'

export const formatDate= time => {
  if(!time){
    return ''
  }
  var date = new Date(time);
  return utilApi.formatDate(date, 'yyyy-MM-dd hh:mm');
}
