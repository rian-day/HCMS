// pages/functions/order/add_order/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loading:0,
    services:[],
    customerInfo:{},
    settlement:0
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
  cancel() {
    wx.removeStorageSync('currentVip')
    wx.removeStorageSync('currentService')
    wx.navigateBack({
      delta: 1
    })
  },
  completeOrder(){
    const data = this.data
    let servicesCom = []
    for(let s of this.data.services){
      const ser = {
        id:s.id,
        num:1,
        type:s.type
      }
      servicesCom.push(ser)
    }
    const req = {
      url: '/bill/addNewBill',
      method: 'POST',
      param:{
        paramsMap: JSON.stringify(servicesCom),
        uid: data.customerInfo.id,
        username: data.customerInfo.username,
        telephone: data.customerInfo.telephone,
        remarks: ''
      },
      back:(res)=>{
        this.cancel()
      }
    }
    app.myRequest.sendRequest(req)
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

    let customer = wx.getStorageSync('currentVip')
    let curservice = wx.getStorageSync('currentService')
    if (customer){
      const customerInfo = {
        name: customer.title,
        level: customer.value,
        tel: customer.telephone
      }
      this.setData({ "customerInfo": customer })
    }
    let settlement = 0
    if (curservice){
      for(let i of curservice){
        i.name = i.title
        i.coast = i.value
        settlement += parseFloat(i.value)
      }
      this.setData({ "services": curservice })
      this.setData({ "settlement": settlement })
    }
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