import Section1 from '@/components/Home/Section1';
import Section2 from '@/components/Home/Section2';
import Banner from '@/components/share/Banner';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const HomePage = () => {
  return (
    <>
      <Banner />
      <Section1 />
      <Section2 />
    </>
  );
};

export async function getServerSideProps({ locale }: any) {
  try {
    return {
      props: {
        ...(await serverSideTranslations(locale, ['common'])),
      },
    };
  } catch (error) {
    console.error(error);
  }
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
export default HomePage;
