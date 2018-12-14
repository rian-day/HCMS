// pages/functions/order/add_service/index.js

const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    serviceList : []
  },

  searchService: function(event) {
    console.log(event.detail)
    const req = {
      url: '/commodity/getCommodityList',
      method: 'GET',
      param: { temp: event.detail.value },
      back: (res) => {
        console.log(res)
        for (let r of res) {
          r.title = r.cName
          r.value = r.price
          r.remark = r.remarks
        }
        this.setData({ 'serviceList': res })
      }
    }
    app.myRequest.sendRequest(req)
  },
  addService: function (el){
    let lastData = wx.getStorageSync('currentService')
    if(!lastData){
      lastData = new Array()
    }
    
    lastData.push(el.detail)
    wx.setStorage({
      key: 'currentService',
      data: lastData,
      success: function (res) {
        console.log('异步保存成功')
        wx.navigateBack({
          delta: 1
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      const req = {
        url: '/commodity/getCommodityList',
        method: 'GET',
        param:{},
        back:(res)=>{
          console.log(res)
          for(let r of res){
            r.title = r.cName
            r.value = r.price
            r.remark = r.remarks
          }
          this.setData({'serviceList':res})
        }
      }
      app.myRequest.sendRequest(req)
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