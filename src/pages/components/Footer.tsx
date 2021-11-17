import styles from "../../styles/components/Footer.module.css"

export default function Footer(){
    return(

      <footer className={styles.footer}>
      <nav>
        <ul>
          <li>
            <a href="/author">
              <img src="https://ik.imagekit.io/lrjseyuxi3m/todoapp/author-link_tjA9pExUts.svg?updatedAt=1636587867931" />
            </a>
          </li>
          <li>
            <a href="/about">
              <img src="https://ik.imagekit.io/lrjseyuxi3m/todoapp/about-link_BXBjy6t64.svg?updatedAt=1636587867944" />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
    )
}