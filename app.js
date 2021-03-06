//app.js
App({
  myRequest: require('/components/common/myRequest.js'),
  convertPinyin: require('/utils/convertToPinYin.js').ConvertPinyin,
  telCheck:'/^(((13[0-9]{1})|159|153)+\d{8})$/',
  onLaunch: function () {
    // 展示本地存储能力
    wx.setStorageSync('userid', 2)

    //云开发
    wx.cloud.init({
      env: 'hcms-c57199',
      traceUser:true
    })
    const db = wx.cloud.database()
    

    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
})