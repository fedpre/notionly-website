import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by checking
          <code className={styles.code}> our services</code>
        </p>
        <div>
          <a
            href="https://notionly.fedpregnolato.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/logo.png"
              alt="Notionly Logo"
              className={styles.vercelLogo}
              width={200}
              height={200}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <h1 className={inter.className}>
          Notionly
        </h1>
      </div>

      <div className={styles.grid}>
        <a
          href="#"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Services <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Find in-depth information about the services we provide.
          </p>
        </a>

        <a
          href="#"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Portfolio <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Explore our work.</p>
        </a>

        <a
          href="#"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Contacts <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Get in touch with us.
          </p>
        </a>
      </div>
    </main>
  )
}
