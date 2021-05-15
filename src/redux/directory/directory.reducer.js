const INITIAL_STATE = {
 sections:[{
  title: 'liver',
  imageUrl: 'https://www.tcmworld.org/wp-content/uploads/2014/02/Shutterstock_9915283-Bamboo-Grove.jpg',
  id: 1,
  linkUrl: 'shop/liver'
 },
 {
  title: 'lung',
  imageUrl: 'https://wp.insighttimer.com/blog/wp-content/uploads/2019/11/teapot.jpg',
  id: 2,
  linkUrl: 'shop/lungs'
 },
 {
  title: 'heart',
  imageUrl: 'https://shawellnessclinic.com/wp-content/uploads/2018/07/POST-09-2018-.jpg',
  id: 3,
  linkUrl: 'shop/heart'
 },
 {
  title: 'spleen',
  imageUrl: 'https://stickoutyourtongue.files.wordpress.com/2015/05/earth-image-e1432824732147.jpg',
  size:'large',
  id: 4,
  linkUrl: 'shop/spleen'
 },
 {
  title: 'kidney',
  imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7PX1hqHT7tRMZN6p2baRDDRGRPlNQM1_yoA&usqp=CAU',
  size: 'large',
  id: 5,
  linkUrl: 'shop/kidney'
 }]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
 switch(action.type) {
  default:
   return state;
 }
}

export default directoryReducer;