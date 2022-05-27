import React, { useCallback } from "react";
import styles from "../../styles/pages/Document/Home.module.scss";
import { useRouter } from "next/router";
import { useDropzone } from "react-dropzone";

export default function DocsIndex() {
  const router = useRouter();
  const { getRootProps, getInputProps, acceptedFiles, fileRejections } =
    useDropzone({
      maxFiles: 1,
    });

  const acceptedFileItems = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
      <ul>
        {errors.map((e) => (
          <li key={e.code}>{e.message}</li>
        ))}
      </ul>
    </li>
  ));

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
            <div {...getRootProps({ className: "dropzone" })}>
              <input {...getInputProps()} />
              <h4>Accepted files</h4>
              <ul>{acceptedFileItems}</ul>
              <h4>Rejected files</h4>
              <ul>{fileRejectionItems}</ul>
            </div>
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
