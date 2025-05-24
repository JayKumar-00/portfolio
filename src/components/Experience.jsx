import React from 'react'
import html from '../../public/html.png'
import css from '../../public/css.jpg'
import java from '../../public/java.png'
import javascript from '../../public/javascript.png'
import oracle from '../../public/oracle.png'
import spring from '../../public/spring.png'
import springBoot from '../../public/download.jpg'

const Experience = () => {
    const cardItem = [
        {
            id: 1,
            logo: html,
            name: "HTML"
        },
        {
            id: 2,
            logo: css,
            name: "CSS"
        },
        {
            id: 3,
            logo: javascript,
            name: "JavaScript"
        },
        {
            id: 4,
            logo: oracle,
            name: "Oracle"
        },
        {
            id: 5,
            logo: java,
            name: "Java"
        },
        {
            id: 6,
            logo: springBoot,
            name: "SpringBoot"
        },
        {
            id: 7,
            logo: spring,
            name: "Spring"
        }
    ]
    return (
        <div name="Experience" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-28'>
            <h1 className='text-2xl font-bold mb-5'>Experience</h1>
            <p className='font-medium'>I've more than 2 years of experience in below technologies</p>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-7 gap-x-0 my-3'>
                {cardItem.map(({ id, logo, name }) => (
                    <div className='md:w-[200px] md:h-[200px] border-[2px] rounded-full flex items-center justify-center flex-col p-1 cursor-pointer hover:scale-110 duration-200' key={id}>
                        <img src={logo} alt="" className='w-[120px] h-[120px] p-1 rounded-full' />
                        <div>
                            <div className='font-bold my-2 mx-3 text-lg'>{name}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience