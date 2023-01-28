import styles from './index.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '../nav'

function Header() {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <div className={styles.header__icon}>
          <Image 
              src="/img/headerIcon/menu.png"
              alt="menu icon" 
              loading="eager"
              width={30}
              height={30}
              priority 
          />
          <div className={styles.nav}>
              <nav >
                <Nav />
              </nav>
          </div>
        </div>
        <h1 style={{ letterSpacing: '1px', textAlign: 'left' }}>
            <Link href='/'> 
              <span style={{ fontWeight: 220 }}>Simple</span>
            </Link>
            <Link href='/'>
              <span style={{ fontWeight: 80 }}>News</span>
            </Link>
        </h1>
      </header>

    </section>
    
  )
  
}

export default Header;
