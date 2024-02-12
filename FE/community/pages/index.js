import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const router = useRouter();
  const [roomName, setRoomName] = useState("");

  const joinRoom = () => {
    router.push(`/rooms/${roomName || Math.random().toString(36).slice(2)}`);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Algonion - 커뮤니티</title>
        <meta
          name="description"
          content="Use Native WebRTC API for video conferencing"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>커뮤니티</h1>
        <input
          onChange={(e) => setRoomName(e.target.value)}
          value={roomName}
          className={styles["room-name"]}
        />
        <button
          onClick={joinRoom}
          type="button"
          className={styles["join-room"]}
        >
          입장
        </button>
      </main>
    </div>
  );
}
