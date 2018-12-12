// components/ListItemComponent/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    inDatas:{
      type: Array,
      value: [],
      
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    listDatas: [
      {
        id: 1,
        title: '123',
        remark: '123',
        value: '超级hi元',
        reData: 1
      }, {
        id: 2,
        title: '1233',
        remark: '1243',
        value: '超级hi元',
        reData: 1
      }, {
        id: 3,
        title: '1234213',
        remark: '123',
        value: '超级hi元',
        reData: 1
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    returnData: function (el) {
      const redata = this.properties.inDatas[el.target.dataset.index]
      const eventOption = {}
      console.log(redata)
      this.triggerEvent('returnChooseData', redata, eventOption)
    }
  }
})
