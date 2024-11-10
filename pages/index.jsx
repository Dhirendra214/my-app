// pages/index.tsx
import { GetStaticProps } from 'next';
import Navbar from '../components/Navbar';
import UserCard from '../components/UserCard';
import { fetchUsers } from './api/hello';
import ContactUsForm from '../components/ContactUsForm';
import Footer from '@/components/Footer';


const Home = ({ users }) => {
  return (
    <>
      <Navbar />
      <UserCard users={users} />  
      <ContactUsForm />
      <Footer />
    </>
  );
};

export const getStaticProps = async () => {
  try {
    const users = await fetchUsers();
    return { props: { users } };
  } catch (error) {
    console.error(error);
    return { props: { users: [] } };
  }
};

export default Home;
