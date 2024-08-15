import BannerPng from '../../assets/fruits/fruit7.jpg'
import { motion } from 'framer-motion'
import { fadLeft } from '../../utility/animation'

const bgStyle = {
    background:`url(${BannerPng})`,
    backgroundSize:'cover',
    backgroundPosition:'center',
    backgroundRepeat:'no-repeat',
};

const Banner3 = () => {
  return (
    <section className=''>
    <div 
    style={bgStyle}
    className='container grid grid-cos-1 md:grid-cols-2
    space-y-6 md:space-y-0 py-14 rounded-3xl'>
        {/*blank div*/ }
    <div></div>
        {/*Banner info*/ }
        <div className='flex flex-col  justify-center' >
            <div className='text-center md:text-left space-y-4 
            lg:max-w-[400px]'>
                <motion.h1
                variants={fadLeft(0.9)} 
                initial="hidden"
                animate="visible"
                whileInView={"visible"}
                viewport={{once:true}}
                className='text-3xl lg:text-6xl font-bold uppercase'>À Propos de Notre Marque : Fruits Shop</motion.h1>
                <motion.p
                  variants={fadLeft(1.1)} 
                  initial="hidden"
                  animate="visible"
                  whileInView={"visible"}
                  viewport={{once:true}}
                >
              Fruits Shop est bien plus qu'un simple magasin de fruits en ligne ; 
              c'est une marque dédiée à la promotion d'une alimentation saine,
               équilibrée et naturelle. Depuis notre création, nous avons toujours
                eu à cœur de fournir à nos clients des fruits de la plus haute qualité,
                 tout en soutenant les pratiques agricoles durables et responsables.
                </motion.p>
                <motion.p
                  variants={fadLeft(1.3)} 
                  initial="hidden"
                  animate="visible"
                  whileInView={"visible"}
                  viewport={{once:true}}>
             Chez Fruits Shop, notre mission est simple : 
             offrir le meilleur des fruits frais, tout en rendant leur achat aussi
              pratique et agréable que possible. Nous croyons fermement que les fruits 
              frais doivent être accessibles à tous, sans compromis sur la qualité ou la fraîcheur.
                </motion.p>
                <motion.div
            variants={fadLeft(1.1)}
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

export default Banner3;