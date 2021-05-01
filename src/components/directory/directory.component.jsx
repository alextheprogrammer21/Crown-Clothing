import React from 'react';

import MenuItem from '../menu-item/menu-item-component'

import "./directory.styles.scss"

class Directory extends React.Component {
 constructor() {
  super();
  
  this.state = {
   sections:[{
    title: 'liver',
    imageUrl: 'https://www.tcmworld.org/wp-content/uploads/2014/02/Shutterstock_9915283-Bamboo-Grove.jpg',
    id: 1
   },
   {
    title: 'lung',
    imageUrl: 'https://wp.insighttimer.com/blog/wp-content/uploads/2019/11/teapot.jpg',
    id: 2
   },
   {
    title: 'heart',
    imageUrl: 'https://shawellnessclinic.com/wp-content/uploads/2018/07/POST-09-2018-.jpg',
    id: 3
   },
   {
    title: 'spleen',
    imageUrl: 'https://stickoutyourtongue.files.wordpress.com/2015/05/earth-image-e1432824732147.jpg',
    size:'large',
    id: 4
   },
   {
    title: 'kidney',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7PX1hqHT7tRMZN6p2baRDDRGRPlNQM1_yoA&usqp=CAU',
    size: 'large',
    id: 5
   }]
  }
 }

 render() {
  return (
  <div className='directory-menu'>
   {this.state.sections.map(({title, imageUrl, id, size}) => (
    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
   )) }
  </div>
  )
 }
}

export default Directory;