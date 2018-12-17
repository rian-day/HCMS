// pages/functions/order/order_list/index.js
const app = getApp()
const myRequest = app.myRequest
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab:'doingOrder',
    completeOrderList:[],
    doingOrderList:[],
    ids:''
  },
  changeTab({ detail }){
    this.setData({
      currentTab: detail.key
    });
  },
  completeOrder(e){
    const index = e.currentTarget.dataset.billindex
    const currentOrder = this.data.doingOrderList[index]
    const obj = this
    wx.showModal({
      title: '提示',
      content: '是否完成该订单',
      success(res) {
        if (res.confirm) {
          
          const req = {
            url : '/bill/settleAccounts',
            method:'POST',
            param:{
              billId:currentOrder.id
            },
            back:(res)=>{
              console.log(res)
            }
          }
          myRequest.sendRequest(req)
          obj.loadData()
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  cancelOrder(e) {
    const index = e.currentTarget.dataset.billindex
    const currentOrder = this.data.doingOrderList[index]
    const obj = this
    wx.showModal({
      title:'提示',
      content:'是否确定取消该订单',
      success(res) {
        if (res.confirm) {
          const req = {
            url: '/bill/deleteBill',
            method: 'POST',
            param: {
              billId: currentOrder.id
            },
            back: (res) => {
              console.log(res)
            }
          }
          myRequest.sendRequest(req)
          obj.loadData()
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },

  loadData(){
    const completeOrderReq = {
      url: '/bill/getBillListToday',
      method: 'GET',
      param: {
        isPay: '1'
      },
      back: (res) => {
        this.setData({ 'completeOrderList': res.list }, { 'ids': res.ids })
      }
    }
    const doingOrderReq = {
      url: '/bill/getBillListToday',
      method: 'GET',
      param: {
        isPay: '0'
      },
      back: (res) => {
        this.setData({ 'doingOrderList': res.list }, { 'ids': res.ids })
      }
    }
    app.myRequest.sendRequest(completeOrderReq)
    app.myRequest.sendRequest(doingOrderReq)
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
    this.loadData()
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