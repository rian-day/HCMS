// pages/functions/vip/add_vip/index.js
const app = getApp()
const myRequest = app.myRequest
Page({

  /**
   * 页面的初始数据
   */
  data: {
    vipInfo:{
      name: '',
      age:18,
      sex:'男',
      tel:'177',
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
  vaildInfo() {
    const data = this.data
    const vipInfo = data.vipInfo
    if(!vipInfo.name){
      wx.showToast({
        title: '请填写用户名字',
        icon: 'none',
        mask: true,
      });
      return;
    }
    if (!vipInfo.age){
      wx.showToast({
        title: '请填写用户年龄',
        icon: 'none',
        mask: true,
      });
      return;
    }
    if (!vipInfo.amount){
      wx.showToast({
        title: '请填写用户账户初始金额',
        icon: 'none',
        mask: true,
      });
      return;
    }
    if (!(/^1[3|5|7|8][0-9]\d{4,8}$/.test(vipInfo.tel))) {
      wx.showToast({
        title: '请填写正确的手机号',
        icon: 'none',
        mask: true,
      });
      return;
    }
    this.addVip()
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