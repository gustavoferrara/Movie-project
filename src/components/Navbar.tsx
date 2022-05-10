import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <h1 className='navbar_title'>Blog website</h1>
      <ul className='navbar_links'>
        <li className='navbar_links_item'>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li className='navbar_links_item'>
          <Link href='/create'>
            <a>Create blog</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
