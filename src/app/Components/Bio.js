import React from 'react'

function Bio() {
  return (
    <div className='mt-80'>
        <div className='flex'>
        <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.7021 17.0526C22.5269 16.5487 23.604 16.809 24.1078 17.6338L29.5812 26.5943L38.5418 21.1209C39.3666 20.6171 40.4436 20.8773 40.9474 21.7021C41.4512 22.5269 41.191 23.604 40.3662 24.1078L31.4057 29.5812L36.8791 38.5418C37.3829 39.3666 37.1227 40.4436 36.2979 40.9474C35.4731 41.4512 34.396 41.191 33.8922 40.3662L28.4188 31.4057L19.4582 36.8791C18.6334 37.3829 17.5564 37.1227 17.0526 36.2979C16.5488 35.4731 16.809 34.396 17.6338 33.8922L26.5943 28.4188L21.1209 19.4582C20.6171 18.6334 20.8773 17.5564 21.7021 17.0526Z" fill="#E7E7E7"/>
        </svg>
        <h1 className='font-bold text-3xl font-mono mt-auto mb-auto'> I&apos;m a Student at NSUT</h1>
        </div>
        <p>Currently, pursuing a BTech in <span className='text-purple-500 font-semibold'>Mechanical Engineering</span></p>
        <p className='mt-10'>I&apos;m a self-taught programmer and freelance developer with over 3 years of experience in building responsive websites, web apps, and custom software solutions. My focus is on creating seamless digital experiences that balance user needs with performance and efficiency. With a passion for clean code and innovative problem-solving, I bring practical and creative solutions to every project.</p>
    </div>
  )
}

export default Bio