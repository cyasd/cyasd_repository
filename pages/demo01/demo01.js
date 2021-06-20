// pages/demo01/demo01.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    msg:"hello mina",
    number:100,
    person:{
      age:70,
      height:170,
      weight:100
    },
    list:[
      {
        name:"张三",
        age:10
      },
      {
        name:"李四",
        age:20
      },
      {
        name:"王五",
        age:30
      }
    ]
  },
  handleInput(e){
    wx.getSystemInfo({
      success: (result) => {
        console.log(result.SDKVersion)
      },
    })
    this.setData({
      number:e.detail.value
    })
    console.log(getApp().myData++)
    console.log(typeof this.data.number)
  },
  handletap(e){
    this.setData({
      number:this.data.number*1 + e.currentTarget.dataset.operation2
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