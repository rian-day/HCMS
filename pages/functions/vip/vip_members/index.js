// pages/functions/vip/vip_members/index.js

const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    vipList:[]
  },
  onChange(event) {
    console.log(event.detail, 'click right menu callback data')
  },
  searchVip: function (event) {
    console.log(event.detail)
    const req = {
      url: '/vip/getVipByTelephoneOrUsername',
      method: 'POST',
      param: { temp: event.detail.value },
      back: (res) => {
        console.log(res)
        for (let r of res) {
          r.title = r.username
          r.value = r.telephone
          r.remark = r.sex ? '男' : '女'
        }
        this.setData({ 'vipList': res })
      }
    }
    app.myRequest.sendRequest(req)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.vipGroupId)
    const req = {
      url: '/vip/getUserListByVipType',
      method: 'POST',
      param: {
        vipId: options.vipGroupId
      },
      back: (res) => {
        for(let r of res){
          r.index = app.convertPinyin(r.username).toUpperCase()
        }
        this.setVipData(res)
      }
    }
    app.myRequest.sendRequest(req)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  setVipData(vipList){
    let store = new Array(26);
    const words = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    words.forEach((item, index) => {
      store[index] = {
        key: item,
        list: []
      }
    })
    vipList.forEach((item) => {
      let firstName = item.index.substring(0, 1);
      let index = words.indexOf(firstName);
      item.key = firstName
      item.name = item.username
      store[index].list.push(item);
    })
    this.setData({
      'vipList': store
    })
    console.log(store)
  },
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