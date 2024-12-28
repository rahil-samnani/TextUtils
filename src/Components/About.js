import React from 'react'
import icon from "./textutils.png"
import dark_icon from "./textutils_dark.png"

export default function About(props) {
  return (
    <div className={`mx-5 d-flex-parent text-${props.mode === "light" ? "dark" : "light"}`}>
      <div className="d-flex">
        <div className='about_img_conatiner'>
            <img className='about_img' src={props.mode === "light" ? icon : dark_icon} alt="logo" style={{borderColor : props.mode==="light" ? "black" : "white"}}/>
        </div>
        <div>
            <h1>About Us</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae ratione aperiam quo atque minima voluptatem sequi deserunt. Modi repellendus voluptas delectus inventore voluptate! Praesentium rerum ipsum ex quae, porro sint.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dicta pariatur cum qui soluta quidem doloribus deserunt ex, quam ratione tenetur laboriosam inventore. Sequi qui tempora deleniti illum officiis. Est.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae ratione aperiam quo atque minima voluptatem sequi deserunt. Modi repellendus voluptas delectus inventore voluptate! Praesentium rerum ipsum ex quae, porro sint.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, sed. Excepturi facere officia sunt. Totam?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae ratione aperiam quo atque minima voluptatem sequi deserunt. Modi repellendus voluptas delectus inventore voluptate! Praesentium rerum ipsum ex quae, porro sint.</p>
        </div>
      </div>
    </div>
  )
}
