import BannerSlider from "@/components/sliders/BannerSliders";
import styles from "./page.module.scss";
import Header from "@/components/layout/Header";
import InfoCards from "@/components/grid/InfoCards";
import SpecialOffers from "@/components/grid/SpecialOffers";


async function getBigSlidersData() {
  const res = await fetch('https://api.b-e.az/task/big-sliders', {
    cache: 'force-cache', 
  });
  return res.json();
}

async function getInfoCardsData() {
  const res = await fetch('https://api.b-e.az/task/features', {
    cache: 'force-cache', 
  });
  return res.json();
}

async function getProductsData() {
  const res = await fetch('https://api.b-e.az/task/special-offer', {
    cache: 'force-cache', 
  });
  return res.json();
}

export default async function HomePage() {
  const slidersData = await getBigSlidersData();
  const infoCardsData = await getInfoCardsData();
  const productsData = await getProductsData();  
  return (
    <div className={styles.page}>
      <Header/>
      <BannerSlider sliders={slidersData}/>
      <InfoCards infoDataCards={infoCardsData}/>
      <SpecialOffers productsData={productsData}/>
    </div>
  );
}
