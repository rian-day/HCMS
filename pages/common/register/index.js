// pages/common/register/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userid : "",
    password : "",
    phone : ""
  },

  handleClick: function () {
    console.log("账号：" + this.data.userid + " | 密码：" + this.data.password + " | 手机号：" + this.data.phone);
    wx.request({
      url: 'http://115.159.181.30:8181/user/addNewHost', //仅为示例，并非真实的接口地址
      data: {
        userid: this.data.userid,
        password: this.data.password
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success(res) {
        console.log(res.data)

        if (userType == 1) {
          sdafasf
          wx.navigateTo({
            url: '../../index/index1/index'
          })
        }
        else {
          wx.navigateTo({
            url: '../../index/index'
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})