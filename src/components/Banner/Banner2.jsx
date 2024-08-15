import BannerPng from '../../assets/fruits/fruit6.png'
import { motion } from 'framer-motion'
import { fadUp } from '../../utility/animation'

const Banner2 = () => {
  return (
    <section className=''>
    <div className='container grid grid-cos-1 md:grid-cols-2
    space-y-6 md:space-y-0 py-14 md:py-24'>
   
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
                className='text-3xl lg:text-6xl font-bold uppercase'>Pourquoi Choisir Notre Magasin de Fruits en Ligne ?</motion.h1>
                <motion.p
                  variants={fadUp(0.7)} 
                  initial="hidden"
                  animate="visible"
                  whileInView={"visible"}
                  viewport={{once:true}}
                >
               Nous croyons que manger sainement ne devrait jamais être compliqué.
                Notre mission est de rendre les fruits frais accessibles à tous, 
                tout en offrant une qualité et un service irréprochables. Grâce à notre engagement envers la fraîcheur,
                 la qualité et la satisfaction du client, nous sommes devenus un choix de confiance pour des milliers de clients satisfaits.
                </motion.p>
                <motion.p
                  variants={fadUp(0.9)} 
                  initial="hidden"
                  animate="visible"
                  whileInView={"visible"}
                  viewport={{once:true}}>
               Découvrez la simplicité de faire vos courses de fruits en ligne.
                Commandez aujourd'hui et savourez la différence !
                </motion.p>
                <motion.div
            variants={fadUp(1.1)}
            initial="hidden"
            animate="visible"
            className='flex justify-center
            md:justify-start'>
            <button className='primary-btn '>
            Télécharger l'Application
            </button>
            </motion.div>
            </div>
        </div>
             {/*Banner img*/ }
             <div className='flex justify-center items-center'>
            <motion.img
            initial={{opacity: 0,x:200, rotate: 75}}
            whileInView={{opacity: 1,x:0, rotate: 0}}
            transition={{duration:1, delay:0.2}}
            viewport={{once:true}}
            src={BannerPng} alt=""
            className='w-[850px] md:max-w-[900px] h-full
            object-cover drop-shadow' />
            
        </div>
    </div>
    </section>
  );
}

export default Banner2;