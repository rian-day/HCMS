// pages/functions/order/add_order/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loading:0,
    services:[]
  },
  chooseVip(){
    wx.navigateTo({
      url: '/pages/functions/order/choose_vip/index'
    })
  },
  addServices() {
    wx.navigateTo({
      url: '/pages/functions/order/add_service/index'
    })
  },
  completeOrder(){
    this.setData({ "loading": 1 })
  },
  cancel(){
    wx.removeStorageSync('currentVip')
    wx.removeStorageSync('currentService')
    wx.navigateBack({
      delta: 1
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.customerInfo = {}
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

    let customer = wx.getStorageSync('currentVip')
    let curservice = wx.getStorageSync('currentService')
    if (customer){
      const customerInfo = {
        name: customer.title,
        level: customer.value,
        tel: customer.remark
      }
      this.setData({ "customerInfo": customerInfo })
    }
    if (curservice){
      let services = []
      for(let i of curservice){
        const s = {
          name: i.title,
          coast: i.value,
          remark: i.remark
        }
        services.push(s)
      }
      this.setData({ "services": services })
    }
    console.log(this.data.services,curservice)
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