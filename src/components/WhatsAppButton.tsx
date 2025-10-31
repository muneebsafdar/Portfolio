import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '+923228989972'; // Replace with actual number
  const message = 'Hi! I would like to discuss a project with you.';

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <motion.button
      onClick={handleClick}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-green-500/50 transition-shadow duration-300"
    >
      <motion.div
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </motion.div>

      {/* Ripple effect */}
      <motion.div
        className="absolute inset-0 rounded-full bg-green-500"
        animate={{ scale: [1, 1.5, 1.5], opacity: [0.5, 0, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.button>
  );
};

export default WhatsAppButton;
