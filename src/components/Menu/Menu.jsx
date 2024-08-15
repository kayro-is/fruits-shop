import Fruit1 from '../../assets/fruits/fruit1.png'
import Fruit2 from '../../assets/fruits/fruit2.png'
import Fruit3 from '../../assets/fruits/fruit3.png'
import Fruit4 from '../../assets/fruits/fruit4.png'
import { motion } from 'framer-motion'
import { fadRight } from '../../utility/animation'

const MenuData = [
    {
        id:1,
        title:"pommes rouges fraîches",
        link:"/",
        price:"2.00€",
        img:Fruit1,
        delay:0.3
    },
    {
        id:2,
        title:"Orange fraîches",
        link:"/",
        price:"3.50€",
        img:Fruit2,
        delay:0.6
    },
    {
        id:3,
        title:"banane",
        link:"/",
        price:"1.99€",
        img:Fruit3,
        delay:0.9
    },
    {
        id:4,
        title:"Framboises",
        link:"/",
        price:"5.00€",
        img:Fruit4,
        delay:1.2
    },
]

const Menu = () => {
  return (
    <section>
        <div className="container pt-12 pb-20">
            <motion.h1
            initial={{opacity:0, x: -200}}
            whileInView={{opacity:1, x:0}}
            transition={{duration:1, delay:0.3}}
            className="text-2xl font-bold text-left pb-10 uppercase">
            notre menu
            </motion.h1>
            <div className='grid grid-cols-1 sm:grid-cols-2
            md:grid-cols-4 gap-6'>
                {MenuData.map((menu) => (
                    <motion.div
                    variants={fadRight(menu.delay)}
                    initial="hidden"
                    whileInView={"visible"}
                    whileHover={{scale:1.1}}
                     key={menu.id} className="bg-white rounded-3xl px-12 
                    shadow-[0_0_22px_0_rgba(0,0,0,0.15)] flex flex-row 
                    justify-around items-center gap-10"
                    >
                        <img src={menu.img} alt="" 
                        className='w-[80px] mb-4 scale-110 transform-translate-y-6' />
                        <h1 className='text-lg font-semibold'>{menu.title}</h1>
                        <p className='text-lg font-semibold text-primary'>{menu.price}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
    
  );
}

export default Menu;