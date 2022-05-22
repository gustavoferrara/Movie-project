import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import styles from '@/styles/Navbar.module.scss';

const Navbar: React.FC = () => {
  const [navbarOpened, setNavbarOpened] = useState(false);
  const [isSmallViewport, setIsSmallViewport] = useState(true);

  const checkSmallViewport = () => {
    if (window.innerWidth < 450) setIsSmallViewport(true);
    else setIsSmallViewport(false);
  };

  useEffect(() => {
    checkSmallViewport();
    window.addEventListener('resize', checkSmallViewport);
  }, []);

  useEffect(() => {
    if (!isSmallViewport && navbarOpened) setNavbarOpened(false);
  }, [isSmallViewport]);

  return (
    <nav className={navbarOpened ? styles.openednavbar : styles.navbar}>
      <AnimatePresence>
        {!navbarOpened && (
          <motion.div
            initial={{ x: '-50%', opacity: 0 }}
            key='logo'
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-50%', opacity: 0 }}
            className={styles.logo}
          >
            <Image
              src='/movielibrary.svg'
              alt='Movie Library logo'
              layout='fill'
              objectFit='contain'
            />
          </motion.div>
        )}
      </AnimatePresence>
      <div className={styles.mobilemenu_container}>
        <AnimatePresence>
          {(navbarOpened || !isSmallViewport) && (
            <motion.ul
              initial={{ x: '50%', opacity: 0 }}
              key='desktoplinks'
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '50%', opacity: 0 }}
              className={styles.desktoplinks}
            >
              <li className={styles.desktoplinks_item}>Home</li>
              <li className={styles.desktoplinks_item}>Library</li>
            </motion.ul>
          )}
        </AnimatePresence>
        {isSmallViewport && (
          <div className={styles.mobilemenu}>
            <Image
              src='/mobilemenu.svg'
              onClick={() => setNavbarOpened(!navbarOpened)}
              alt='Mobile menu'
              layout='fill'
              objectFit='contain'
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
