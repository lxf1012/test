// pages/demo1/demo1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  // 1 一般在onLoad中发送异步请求来初始化页面数据
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  //3 页面初次渲染
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  //2 页面显示
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
  // 可以通过点击超链接 navigater来演示 而navigater的open-type的值yo为redirect才行，
  // 这个值表示关闭当前页面 跳转到应用的某个页面，但是不允许跳转到tabbar页面
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  // 可以进行页面的数据或者效果重新刷新
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  // 需要让页面出现上下滚动才行
  onReachBottom: function () {
// 上拉加载下一页数据
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  /*
  页面滚动 就可以触发
  */
  onPageScroll: function (){

  },
  /*
  页面的尺寸发生改变的时候，触发
  小程序发生了横屏竖屏切换的时候 触发
  如果是单个页面横竖屏切换 就在.json文件中加入语句：“pageOrientation”: "auto"
  如果是全部就在app.json的window端中设置“pageOrientation”: "auto"
  */
 onResize: function (){

 },
/**
 * onTabItemTap事件只存在于tabbar的页面上,而且只有点击自己的tabbar item的时候才会触发
 */
onTabItemTap: function (){

}
})