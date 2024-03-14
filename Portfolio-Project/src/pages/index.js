import { Inter } from 'next/font/google';
import Project from '/components/Project.jsx';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return ( 
    <>
      <Project />
    </>
  );
}