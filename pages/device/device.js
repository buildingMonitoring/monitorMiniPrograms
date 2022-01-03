// pages/device/device.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    devideList:[[{
      status:"正常",  //设备状态
  	  code:"sss123",   //设备编码
  	  name:"冰箱",    //自定义名称
  	  macAddress:"192.168.0.0",   //设备MAC地址
  	  sourceAddress:"192.158.0.1",    //源地址
    	type:"制冷设备",     //设备类型
  	  time:"2021-11-14",     //绑定事件
    },{
      status:"异常",  //设备状态
  	  code:"sss123",   //设备编码
  	  name:"冰箱",    //自定义名称
  	  macAddress:"192.168.0.0",   //设备MAC地址
  	  sourceAddress:"192.158.0.1",    //源地址
    	type:"制冷设备",     //设备类型
  	  time:"2021-11-14",     //绑定事件
    }]]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.request({
      //仅为示例，并非真实的接口地址
      url: 'http://10.100.45.70:8000/device-query',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data);
        const data = [];
        for(let i=0;i<res.data.length/2-1;i++){
          const t = [];
          t.push(res.data[i*2].fields);
          t.push(res.data[i*2+1].fields);
          data.push(t);
        }
        that.setData({
          devideList:data
        })
      }})
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