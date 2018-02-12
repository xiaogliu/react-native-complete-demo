import XgHttp from './xgHttp';

export default {
  /**
   * 聚合数据 API，GET，查询历史上的今天
   * @param key   应用APPKEY
   * @param v     当前固定值 1.0
   * @param month 月份，如 10
   * @param day   月份，如 1
   */
  todayOnHistory: urlPar => XgHttp('GET', '/japi/toh', { urlParams: urlPar }),
};
