import {
  Banner,
  Categories,
  Contacts,
  Footer,
  Header,
  NewArrivals,
  Popup,
} from "~/widgets";

export default function Home() {
  return (
    <>
      <Header />
      <Categories />
      <NewArrivals />
      <Banner />
      <Contacts />
      <Footer />
      <Popup />
    </>
  );
}
