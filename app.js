//app.js
App({
  //1 onLaunch 函数就是应用第一次启动的时候就会触发的事件
  onLaunch: function () {
    // 在应用第一次启动的时候 获取用户的个人信息
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  // 2 应用 被用户看到就会触发
  onShow(){
// 可以对应用的数据或者页面的效果 做一些重置
  },
  //3 应用 被隐藏了
  onHide(){
// 可以暂停或清除定时器
  },

  // 4 应用的代码发生了报错的时候 就会触发
  onError(){
    // 在应用发生代码报错的时候，收集用户的错误信息，通过异步请求 将错误的信息发送到后台去
  },
  // 5 页面找不到就会触发
  // 当应用第一次启动的时候，如果找不到第一个入口页面 才会触发
  onPageNotFound(){
// 如果页面不存在了 通过js的方式来重新跳转页面 重新跳到第二个首页
// 不能跳到tabbar页面 和导航组件类似
wx.navigateTo({
  url: '/pages/index/index',
})
  },
  globalData: {
    userInfo: null
  }
})