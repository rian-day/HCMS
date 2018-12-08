
Page({
  data: {
    region: ['浙江省', '杭州市', '临安区'],
    customItem: '其他'
  },
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  }
  
})
