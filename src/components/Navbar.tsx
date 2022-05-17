import Image from 'next/image';
import Link from 'next/link';

import styles from '@/styles/Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image
          src='/movielibrary.svg'
          alt='Movie Library logo'
          layout='fill'
          objectFit='contain'
        />
      </div>
      <div className={styles.mobilemenu}>
        <Image
          src='/mobilemenu.svg'
          alt='Mobile menu'
          layout='fill'
          objectFit='contain'
        />
      </div>
      {/* {isMobile ? <LinksDesktop /> : <HamburgerMenu />} */}
    </nav>
  );
};

export default Navbar;
