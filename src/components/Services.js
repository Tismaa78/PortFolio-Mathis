import React from 'react';
// icon
import { BsArrowUpRight } from 'react-icons/bs';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';

// services data
const services = [
  {
    name: 'HTML & CSS',
    description: 'Langages de balisage que je maitrise relativement bien, utilisé pour ce site.',
    link: <a href="https://fr.wikipedia.org/wiki/Hypertext_Markup_Language">Cliquez ici</a>,
  },
  {
    name: 'C#',
    description: 'Langage de programmation que je maitrise le mieux.',
    link: <a href="https://fr.wikipedia.org/wiki/C_sharp">Cliquez ici</a>,
  },
  
  {
    name: 'SQL',
    description: 'Particulièrement utile pour la base de donnée.',
    link: <a href="https://fr.wikipedia.org/wiki/Structured_Query_Language">Cliquez ici</a>,
  },
  {
    name: 'PHP',
    description: 'Principalement utile pour servir de langage de script coté serveur',
    link: <a href="https://en.wikipedia.org/wiki/PHP">Cliquez ici</a>,
  },
];

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text & image */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0 mt-8'  // Ajout de la marge supérieure
          >
            <h2 className='h2 text-accent mb-6'>Mes compétences.</h2>
            <h3 className='h3 max-w-[455px] mb-16'>
              Je possède une familiarité avec ces langages, mais je ne suis pas expert.
              Cela viendra avec le temps.
            </h3>
            <a href="https://github.com/Tismaa78" className="btn btn-sm">Voir mon travail</a>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'
          >
            {/* service list */}
            <div>
              {services.map((service, index) => {
                // destructure service
                const { name, description, link } = service;
                return (
                  <div
                    className='border-b border-white/20 h-[146px] mb-[38px] flex'
                    key={index}
                  >
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>
                        {name}
                      </h4>
                      <p className='font-secondary leading-tight'>
                        {description}
                      </p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                      <a
                        href='#'
                        className='btn w-9 h-9 mb-[42px] flex justify-center items-center'
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href='#' className='text-gradient text-sm'>
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;