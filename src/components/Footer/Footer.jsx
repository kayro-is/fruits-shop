import { FaLinkedin, FaInstagram, FaLeaf,FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-secondary/10 py-12 mt-12">
    
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration: 1, delay: 0.2}}
    className='container flex justify-between items-center'>
        {/* logo section  */}
        <div className='text-2xl flex items-center gap-2 font-bold uppercase'>
                <p className='text-primary'>Fruits</p>
                <p className='text-secondary'>Shope</p>
                <FaLeaf className='text-green-500' />
            </div>
        {/* social media section */}
        <div className="text-3xl flex items-center gap-4 mt-6
        text-gray-700">
        <motion.a href="https://www.linkedin.com/in/khireddine-mehadi-6447402a6/" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.5 }} ><FaLinkedin /></motion.a>
          <motion.a href="https://github.com/kayro-is?tab=overview&from=2024-08-01&to=2024-08-12" target="_blank" rel="noopener noreferrer"whileHover={{ scale: 1.5 }}><FaGithub /></motion.a>
          <motion.a href="https://x.com/KayroWebDev" target="_blank" rel="noopener noreferrer"whileHover={{ scale: 1.5 }}><BsTwitterX /></motion.a>
          <motion.a href="https://www.instagram.com/kayro7892/" target="_blank" rel="noopener noreferrer"whileHover={{ scale: 1.5 }}><FaInstagram /></motion.a>

        </div>
    </motion.div>
    </footer>
  );
}

export default Footer;