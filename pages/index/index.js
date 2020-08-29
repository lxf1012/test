//index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // num:0,
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
  //自定义事件 用来接收子组件传递的数据的
  handleItemChange(e){
    // console.log(e)
    const {index}=e.detail;
    console.log(index)
    let {tabs} = this.data;//相当于 let tabs =this.data.tabs
    // // 4 循环这个数组
    // // [].forEach 遍历数组 遍历数组的时候 修改了v，也会导致原数组被修改
   tabs.forEach((v,i)=>i ===index?v.isActive=true:v.isActive=false);
     this.setData({
       tabs
     })
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