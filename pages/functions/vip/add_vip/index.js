// pages/functions/vip/add_vip/index.js
const myRequest = getApp().myRequest
Page({

  /**
   * 页面的初始数据
   */
  data: {
    vipInfo:{
      name: 'hyh',
      age:18,
      sex:'男',
      tel:'17866',
      amount: 100.6,
    },
    vipGroup:[
      {
        id:1,
        name:'白金'
      },{
        id:2,
        name:'黄金'
      }
    ],
    vipIndex:0
  },
  cancel() {
    wx.navigateBack({
      delta: 1
    })
  },
  addVip(e){
    const data = this.data
    const vipInfo = data.vipInfo
    const req = {
      url: '/vip/addNewUserVip',
      param:{
        username:vipInfo.name,
        telephone: vipInfo.tel,
        sex: vipInfo.sex=='男'?1:0,
        money:vipInfo.amount,
        vipTypeId: data.vipGroup[data.vipIndex].id
      },
      back:(res)=>{
        this.cancel()
      }
    }
    myRequest.sendRequest(req)
  },
  changeSex(e){
    let vipInfo = this.data.vipInfo
    vipInfo.sex = e.detail.value
    this.setData({'vipInfo':vipInfo})
  },
  selectVipGroup(e){
    this.setData({'vipIndex':e.detail.value})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const req = {
      url: '/vip/getVipTypeAndNumList',
      method: 'POST',
      back: (res)=>{
        this.setData({'vipGroup':res})
      }
    }
    myRequest.sendRequest(req)
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