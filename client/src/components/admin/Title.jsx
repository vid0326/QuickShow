import React from 'react'

const Title = ({text1,text2}) => {
  return (
    <h1 className='font-medium text-2xl '>
        {text1} <span className='text-[var(--color-primary)] font-semibold underline'>
            {text2}
        </span>
    </h1>
  )
}

export default Title