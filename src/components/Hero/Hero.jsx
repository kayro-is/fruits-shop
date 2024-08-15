import { IoBagHandleOutline } from "react-icons/io5";
import HeroPng from "../../assets/fruits/fruits.png"
import leafPng from "../../assets/fruits/leaf.png"
import { motion } from 'framer-motion';
import { fadRight } from '../../utility/animation';
const Hero = () => {
  return (
    <section>
    <div className='container grid grid-cols-1
    md:grid-cols-2 min-h-[850px] relative'>
        {/* Brand Info*/}
        <div className='flex flex-col justify-center 
        py-14 md:py-0 relative z-10'>
            <div className='text-center md:text-left space-y-6 lg:max-w-[800px]'>
                <motion.h1
                variants={fadRight(0.6)}
                initial="hidden"
                animate="visible"
                className='text-5xl lg:text-6xl font-bold
                leading-relaxed xl:leading-loose 
                '>Fruits <br />
                Nature et <span 
                className='text-secondary'>Bien-être !
                </span>
                </motion.h1>
                <motion.p 
                variants={fadRight(0.9)}
                initial="hidden"
                animate="visible"
                className='text-2xl tracking-wide'>
                    Découvrez une sélection irrésistible de fruits frais</motion.p>
                <motion.p 
                variants={fadRight(1.2)}
                initial="hidden"
                animate="visible"
                className='text-gray-400'>
                    soigneusement choisis pour leur qualité et leur goût exceptionnel. 
                    Chaque bouchée vous transporte dans un voyage sensoriel où la nature
                     dévoile toute sa richesse en vitamines, minéraux et antioxydants.
                      Nos fruits, issus des meilleurs vergers, sont synonymes de santé 
                      et de bien-être, offrant à votre corps l'énergie et la vitalité 
                      dont il a besoin au quotidien. Que vous les dégustiez au petit-déjeuner,
                       en collation ou en dessert, laissez-vous séduire par 
                       ces trésors naturels, parfaits pour un mode de vie équilibré. 
                       Croquez dans la fraîcheur, savourez la santé.</motion.p>
                       <br />
            </div>
           
           
            {/*Hero btn*/ }
            <motion.div
            variants={fadRight(1.5)}
            initial="hidden"
            animate="visible"
            className='flex justify-center
            md:justify-start'>
            <button className='primary-btn flex items-center gap-2'>
                <span>
                <IoBagHandleOutline />
                </span>
            commander maintenant
            </button>
            </motion.div>
        </div>
          {/*Hero img*/ }
          <div className='flex justify-center items-center'>
                <motion.img 
                initial= {{opacity: 0, x: 200, rotate: 75}}
                animate= {{opacity: 1, x: 0, rotate: 0}}
                transition={{duration:1, delay:0.2}}
                src={HeroPng} 
                alt="" 
                className='w-[350px]
                md:w-[550px] drop-shadow'
                />
            </div>
            <div className='absolute top-14 right-1/2 
                blur-sm opacity-80 rotate-[60deg]'>

                <motion.img 
                 initial= {{opacity: 0, x: -200, rotate: 75}}
                 animate= {{opacity: 1, x: 0, rotate: 0}}
                 transition={{duration:1, delay:1.5}}
                src={leafPng} alt="" 
                className=' w-full md:max-w-[300px]'
                />
            </div>
        </div>
        </section>
  );
}

export default Hero;