import Header from '../components/header'
import styles from './index.module.css'

type LayoutProps = {
  children: React.ReactNode;
} 

function MainLayout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <main className={styles.main}>{children}</main>
    </>
  )

}

export default MainLayout;
