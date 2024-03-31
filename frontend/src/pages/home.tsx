import {
  Banner,
  Categories,
  Contacts,
  Footer,
  HeroSlider,
  Header,
  NewArrivals,
} from "~/widgets";

export default function Home() {
  return (
    <>
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
