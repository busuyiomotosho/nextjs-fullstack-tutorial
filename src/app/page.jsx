import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/programming.svg";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Building Products of The Future</h1>
        <p className={styles.description}>
          Let us bring your imaginations into reality with futuristic
          cutting-edge technology
        </p>
        <Button text="Check Out Our Works" url="/portfolio" />
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="Man working on laptop" className={styles.hero} />
      </div>
    </div>
  );
}
