// pages/device/device.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    devideList:{
      status:"正常",  //设备状态
  	  code:"sss123",   //设备编码
  	  name:"冰箱",    //自定义名称
  	  macAddress:"192.168.0.0",   //设备MAC地址
  	  sourceAddress:"192.158.0.1",    //源地址
    	type:"制冷设备",     //设备类型
  	  time:"2021-11-14",     //绑定事件
    }
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