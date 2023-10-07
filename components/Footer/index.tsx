import styles from "./Footer.module.scss";

const Footer = () => (
    <div className={styles.footer}>
        <p>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://entreprenerd.xyz/"
            >
                Developed by Logan
            </a>
        </p>
        <p>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/GalloDaSballo/magic-wallet"
            >
                Source Code on Github
            </a>
        </p>
        <p>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://magic.link/"
            >
                Development sponsored by Devil
            </a>
        </p>
    </div>
);

export default Footer;
