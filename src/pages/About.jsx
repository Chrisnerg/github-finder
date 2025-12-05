import React from 'react'

const About = () => {
  return (
    <div className="text-white text-center py-24">
      <p className=" text-6xl text-center pb-4">Github Finder</p>
      <p className="mb-4 text-2xl font-light">
        A React app to search GitHub profiles and see profile details. <br/>This
        project is part of the
        <a href="https://www.udemy.com/course/modern-react-front-to-back/">
          {" "}
            React Front To Back
        </a>{" "}
            Udemy course by
        <strong>
          <a href="https://traversymedia.com"> Brad Traversy</a>
        </strong>
        .
      </p>
      <p className="text-lg text-gray-400">
            Version <span className="text-white">1.0.0</span>
      </p>
    </div>
  )
}

export default About