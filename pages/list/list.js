Page({
  data: {
   logs:[]
  },
  //事件处理函数
  onLoad: function () {
    var logs = wx.getStorageSync('callogs');
    this.setData({logs:logs});
    wx.setNavigationBarTitle({
      title: '历史记录'
    })
  }
  
})
