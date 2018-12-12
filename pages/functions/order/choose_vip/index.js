// pages/functions/order/choose_vip/index.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchContent:'',
    vipList:[
      // {
      //   id: 2,
      //   title: '1233',
      //   remark: '1243',
      //   value: '超级hi元',
      //   reData: 1
      // }, {
      //   id: 3,
      //   title: '1234213',
      //   remark: '123',
      //   value: '超级hi元',
      //   reData: 1
      // }
    ]
  },
  searchVip: function(event){
    console.log(event.detail)
    const req = {
      url : '/vip/getVipByTelephoneOrUsername',
      method:'POST',
      param: { temp: event.detail.value},
      back:(res)=>{
        console.log(res)
        for(let r of res){
          r.title = r.username
          r.value = r.telephone
          r.remark = r.sex?'男':'女'
        }
        this.setData({'vipList':res})
      }
    }
    app.myRequest.sendRequest(req)
  },
  setVipInfo: function(el){
    console.log(el)
    wx.setStorage({
      key: 'currentVip',
      data: el.detail,
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