//post===============
//url==网址 ,param===参数,back===返回的函数
const BASEURL = 'http://115.159.181.30:8181/'

// const req = {  请求格式
//   url: '/bill/getBillListToday',
//   method: 'GET',
//   param: {
//     sUid: 3
//   },
//   back: (res) => {

//   }
// }
function sendRequest({url,method='POST',param={},back}) {
  if (url[0] == '/') url = url.substring(1,url.length)
  param.sUid = wx.getStorageSync('userid')
  wx.showLoading({
    title: '加载中'
  })
  wx.request({
    url: BASEURL + url,
    data: param,
    method: method, // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    complete: function (res) {
      wx.hideLoading();
    },
    fail: function (res) {
      wx.showToast({
        title: '请求错误',
        icon: 'none',
        mask: true,
      });
      back(false);
    },
    success: function (res) {
      console.log(res)
      wx.hideLoading();
      if(res.data.code != 0){
        wx.showToast({
          title: res.errMsg,
          icon: 'warning',
          mask: true,
        });
        return;
      }
      if (res.statusCode == 200) {
        // wx.showToast({
        //   title: '请求成功',
        //   icon: 'success',
        //   mask: true,
        // });
        back(res.data.data);
        return;
      } else if (res.data.length > 0) {
        wx.showToast({
          title: res.data.data,
          icon: 'error',
          mask: true,
        });
      }
      back(false);
    }
  })
}

module.exports = {
  sendRequest: sendRequest
}