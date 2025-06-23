import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap, Heart, Coffee, Gamepad2 } from 'lucide-react';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const skills = [
    { icon: Code, title: 'Problem Solving', description: 'Analytical thinking and creative solutions' },
    { icon: Palette, title: 'Design Thinking', description: 'User-centered design approach' },
    { icon: Zap, title: 'Fast Learner', description: 'Quick adaptation to new technologies' }
  ];

  const hobbies = [
    { icon: Coffee, title: 'Coffee Enthusiast', description: 'Exploring different brewing methods' },
    { icon: Gamepad2, title: 'Gaming', description: 'Strategy games and indie titles' },
    { icon: Heart, title: 'Open Source', description: 'Contributing to community projects' }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            About Me
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl transform rotate-6"></div>
              <img
                src="https://res.cloudinary.com/dixiyguj6/image/upload/v1750674089/Snapchat-839321188_2_gh1yuk.jpg"
                alt="Profile"
                className="relative w-full h-full object-cover rounded-2xl shadow-xl"
              />
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              I'm a passionate full-stack developer with over 1 year of experience creating 
              digital solutions that make a difference. My journey started with a curiosity 
              about how things work behind the scenes of beautiful websites and applications.
            </motion.p>
            
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              I specialize in React, Node.js, and modern web technologies, but I'm always 
              eager to learn and adapt to new challenges. When I'm not coding, you'll find 
              me contributing to open-source projects or mentoring aspiring developers.
            </motion.p>
            
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              My goal is to bridge the gap between technical excellence and user experience, 
              creating applications that are not just functional, but delightful to use.
            </motion.p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center"
            >
              Skills & Strengths
            </motion.h3>
            <div className="space-y-6">
              {skills.map((skill) => (
                <motion.div
                  key={skill.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex-shrink-0 p-3 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                    <skill.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {skill.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {skill.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center"
            >
              Interests & Hobbies
            </motion.h3>
            <div className="space-y-6">
              {hobbies.map((hobby) => (
                <motion.div
                  key={hobby.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex-shrink-0 p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
                    <hobby.icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {hobby.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {hobby.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;