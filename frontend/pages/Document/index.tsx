import React from "react";
import styles from "../../styles/pages/Document/Home.module.scss";
import { useRouter } from "next/router";

export default function DocsIndex() {
  const router = useRouter();
  return (
    <main className={styles.DocsIndex}>
      <div className={styles.DocsIndexTop}>
        <div
          className={styles.Card}
          onClick={() => router.push("/Document/New")}
        >
          <div className={styles.CardCenter}>
            <span>+</span>
            <span>Click to create new docs</span>
          </div>
        </div>
        <div className={styles.Card}>
          <div className={styles.CardCenter}>
            <span>+</span>
            <span>drop docs new docs</span>
          </div>
        </div>
      </div>
      <div className={styles.DocsIndexBottom}>
        {new Array(10).fill("").map((m, i) => (
          <div className={styles.DocsIndexBottomCard} key={i}>
            <span>lol</span>
            <span>created at</span>
          </div>
        ))}
      </div>
    </main>
  );
}
