import BannerPng from '../../assets/fruits/fruit5.png'
import { motion } from 'framer-motion'
import { fadUp } from '../../utility/animation'

const Banner = () => {
  return (
    <section className='bg-secondary/15'>
    <div className='container grid grid-cos-1 md:grid-cols-2
    space-y-6 md:space-y-0 py-14'>
        {/*Banner img*/ }
        <div className='flex justify-center items-center'>
            <motion.img
            initial={{opacity: 0, scale: 0.5}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{type:"spring", stiffness:100, delay:0.2}}
            src={BannerPng} alt=""
            className='w-[500px] md:max-w-[600px] h-full
            object-cover drop-shadow'  />
            
        </div>
        {/*Banner info*/ }
        <div className='flex flex-col  justify-center' >
            <div className='text-center md:text-left space-y-4 
            lg:max-w-[400px]'>
                <motion.h1
                variants={fadUp(0.5)} 
                initial="hidden"
                animate="visible"
                whileInView={"visible"}
                viewport={{once:true}}
                className='text-3xl lg:text-6xl font-bold uppercase'>informations sur la marque</motion.h1>
                <motion.p
                  variants={fadUp(0.7)} 
                  initial="hidden"
                  animate="visible"
                  whileInView={"visible"}
                  viewport={{once:true}}
                >
                Fruit Shop est votre destination incontournable pour les fruits les plus
                 frais et les plus délicieux. Nous sommes fiers d'offrir une large 
                 variété de fruits, sélectionnés à la main dans les meilleurs vergers
                  du monde, garantissant que chaque bouchée est riche en saveur 
                  et en nutriments.
                </motion.p>
                <motion.p
                  variants={fadUp(0.9)} 
                  initial="hidden"
                  animate="visible"
                  whileInView={"visible"}
                  viewport={{once:true}}>
                Fruit Shop est dédié à offrir une expérience d'achat 
                à la fois agréable et satisfaisante. Que vous cherchiez une 
                collation rapide, que vous planifiiez un repas nutritif, 
                ou que vous envoyiez un cadeau, vous pouvez compter sur nous pour 
                livrer fraîcheur, qualité et goût à chaque fois.
                </motion.p>
                <motion.div
            variants={fadUp(1.1)}
            initial="hidden"
            animate="visible"
            className='flex justify-center
            md:justify-start'>
            <button className='primary-btn '>
            commander maintenant
            </button>
            </motion.div>
            </div>
        </div>
    </div>
    </section>
  );
}

export default Banner;