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
