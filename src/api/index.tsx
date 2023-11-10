import ajax from "./ajax";
/**
 * include all interfaces, each return result is promise object
 * before login, server 5000 should be started
 */
const BASE = 'http://localhost:5000'
    // const BASE = ''
export const reqLogin = (username,password) => ajax(BASE+'/login',{username,password},'POST')
export const reqAddUser = (user) => ajax(BASE+'/manage/add/user',user,'POST')