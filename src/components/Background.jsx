import { motion } from 'framer-motion';
import cloudImg from '../assets/clouds.png';
import starImg from '../assets/stars.png';

function Background() {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none">
      {/* Stars (back layer) */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full z-0"
        style={{
          backgroundImage: `url(${starImg})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          opacity: 0.6,
        }}
        animate={{ y: ['0%', '-10%'] }}
        transition={{ duration: 30, repeat: Infinity, repeatType: 'reverse' }}
      />

      {/* Clouds (middle layer) */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full z-10"  // Ensure it's in the middle layer
        style={{
          backgroundImage: `url(${cloudImg})`,
          backgroundSize: '100% auto',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top',
          opacity: 0.5, // Feel free to tweak this opacity
        }}
        animate={{ y: ['0%', '10%'] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
      />
    </div>
  );
}

export default Background;
