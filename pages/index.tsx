import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>Selamat Datang di Website Saya!</h1>
      <p>Ini adalah halaman utama.</p>
      <Link href="/about">
        Tentang Kami
      </Link>
    </div>
  );
};

export default HomePage;
