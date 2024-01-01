const menu_data = [
  {
    id:1,
    mega_menu:false,
    has_dropdown:true,
    title:'Home',
    link:'/',
    sub_menus:[
      {link:'/',title:'Creative Agency'},
      {link:'/home-2',title:'Personal Portfolio'},
      {link:'/home-3',title:'Startup Business'},
      {link:'/home-4',title:'Digital Agency'},
      {link:'/home-5',title:'Business Advisor'},
      {link:'/home-6',title:'IT Service Agency'},
    ]
  },
  {
    id:2,
    mega_menu:false,
    has_dropdown:true,
    title:'Portfolio',
    link:'/portfolio',
    sub_menus:[
      {link:'/portfolio',title:'Portfolio Full Width'},
      {link:'/portfolio-2',title:'Portfolio Filter 01'},
      {link:'/portfolio-3',title:'Portfolio Filter 02'},
      {link:'/portfolio-masonry',title:'Portfolio Masonry'},
      {link:'/portfolio-details',title:'Portfolio Details'},
    ]
  },
  {
    id:4,
    mega_menu:false,
    has_dropdown:true,
    title:'Blog',
    link:'/blog',
    sub_menus:[
      {link:'/blog',title:'Blog Sidebar'},
      {link:'/blog-details',title:'Blog Details'},
    ]
  },
  {
    id:5,
    mega_menu:false,
    has_dropdown:false,
    title:'Contact',
    link:'/contact',
  }
]
export default menu_data;

