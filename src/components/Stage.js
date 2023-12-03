import React from 'react';
import KontronImage from '../assets/kontron.png';
import Video from '../assets/video.mp4';

const Stage = () => {
  return (
    <section className='section' id='stage'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          <h2 className='h2 text-accent mb-[20px] lg:mb-0'>Mes Stages</h2>
          {/* img */}
          <div className='lg:flex-1 bg-cover bg-center bg-no-repeat h-[640px] mix-blend-lighten relative'>
            <img src={KontronImage} alt='Kontron Transportation' className='w-full h-full object-contain' />
          </div>
          {/* text */}
          <div className='flex-1 text-center mx-auto max-w-[800px] lg:max-w-none'>
            <p className='mb-6'>
              Dans le cadre de ma première année de BTS SIO, j'ai dû effectuer un stage de 6 semaines dans l'entreprise KONTRON TRANSPORTATION. Durant ce stage, ma mission a été de créer un mini logiciel servant à analyser et trier les données d'un document Excel, car l'entreprise doit rendre un compte rendu mensuel du système de sécurité de leurs PC à la SNCF. Il sert donc à simplifier le travail de la personne qui s'occupe du compte-rendu.
            </p>
            {/* Vidéo */}
            <video controls className='w-full h-auto'>
              <source src={Video} type='video/mp4' />
              Votre navigateur ne prend pas en charge la lecture de la vidéo.
            </video>
            {/* Phrase ajoutée */}
            <p className='mt-4'>
              Une fois que le logiciel a analysé le ou les fichiers, un pop-up avec les résultats s'ouvre. De plus, un fichier Excel se génère dans le dossier avec toutes les données triées.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stage;
