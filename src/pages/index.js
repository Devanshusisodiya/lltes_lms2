import ListView from '../../components/ListView';
import Courses from '../../components/ListView';
// import LoginPage from '@/components/LoginPage';
import Navbar from '../../components/Navbar';
import Notes from '../../components/notes';
import Subjects from '../../components/subjects';
import Head from 'next/head';
import Link from 'next/link';

const Home =() =>{
  return(

    <div className='bg-[#C0B9DD] h-screen'>
    <div class="w-full bg-white rounded-lg shadow-lg lg:w-1/3">
      <Navbar/>
        
    </div>

    <Link href="/courses"> click kar </Link>
    </div>
  )
}
export default Home ;