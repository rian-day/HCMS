// components/ListItem/index.js
Page({

  properties: {
    remarks: ['123','41','515'],
    value:['超级会员','哦哦','412'],
    reData:[1,2,3]
  },

  /**
   * 页面的初始数据
   */
  data: {
    listDatas: [
      {
        id:1,
        title:'123',
        remark:'123',
        value:'超级hi元',
        reData:1
      }, {
        id:2,
        title: '1233',
        remark: '1243',
        value: '超级hi元',
        reData: 1
      }, {
        id:3,
        title: '1234213',
        remark: '123',
        value: '超级hi元',
        reData: 1
      }
    ]
  },
  returnData: function (el) {
    const redata = this.data.listDatas[el.target.dataset.index]
    const eventOption={}
    this.triggerEvent('returnChooseData', redata, eventOption)
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