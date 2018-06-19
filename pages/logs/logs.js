var util = require( '../../utils/util.js' )
Page( {
  data: {
    projects: [ { name: '辽宁科技大学大学生创新实践项目（开源地址）', git: "https://github.com/giscafer/FinalScheduler" },
     
      { name: '项目介绍', git: "https://github.com/giscafer/hexo-theme-cafe" },
      { name: '项目展示', git: "https://github.com/giscafer/ife-course-demo" },
      { name: '项目开发工具', git:"https://github.com/giscafer/ife-course-demo"},
     wx.setTopBarText({
       text: '项目平台完善中',
       success: function(res) {},
       fail: function(res) {},
       complete: function(res) {},
     })
    ]
  },
  onReady: function() {
    this.clickName();
  },
  clickName: function( e ) {
    var pros = this.data.projects;
    console.log( "#########################################################################################################" )
    console.log( "##                                               其他项目                                               ##" )
    console.log( "##-----------------------------------------------------------------------------------------------------##" )
    pros.forEach( function( item, index ) {
      console.log( "##        ", item.name + ":" + item.git )
    })
    console.log( "##                                                                                                     ##" )
    console.log( "#########################################################################################################" )
  }
})
