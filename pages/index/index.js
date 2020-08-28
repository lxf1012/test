//index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:0,
    tabs:[{
      id:0,
      name:"首页",
      isActive: true
    },{
      id:1,
      name: "原创",
      isActive: false
    },{
      id:2,
      name: "分类",
      isActive: false
    },{
      id:3,
      name: "关于",
      isActive: false
    }] 
  },
  handleInput(e){
    // console.log(e.detail.value);
    this.setData({
      num:e.detail.value
    })
  },
  handleTap(e){
    const operation = e.currentTarget.dataset.operation;
    this.setData({
      num: this.data.num + operation
    })

  }
})