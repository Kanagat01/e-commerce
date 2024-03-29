import {
  Banner,
  Categories,
  Contacts,
  Footer,
  HeroSlider,
  Header,
  NewArrivals,
  Popup,
} from "~/widgets";

export default function Home() {
  return (
    <>
      <Popup />
      <header className="header" id="header">
        <Header />
        <HeroSlider />
      </header>
      <Categories />
      <NewArrivals />
      <Banner />
      <Contacts />
      <Footer />
    </>
  );
}
