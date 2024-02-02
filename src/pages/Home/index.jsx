import Card from "../../components/Card/Card";
import Hero from "../../components/Hero/Hero";
import Products from "../../components/Products/Products";

function Home() {
  return (
    <div className="page-wrapper">
      <Hero />
      <Card
        image={
          "https://www.greenlifeseed.com/wp-content/uploads/2022/04/02.jpg"
        }
        titleSpan={"SEED "}
        title={"PRODUCTION"}
        text={
          "Greenlife Seed products are produced by our parent company Polen Seed Co. which is the largest domestic seed company that produces seed corn in Turkey for over 25 years. Our experienced seed production team, using the latest production agricultural equipment never compromise quality, putting in maximum effort…"
        }
      />
      {/* <Products
        image={
          "https://www.greenlifeseed.com/wp-content/uploads/2023/02/Corn.png"
        }
      /> */}
      {/* <Slider 
      image={"https://www.greenlifeseed.com/wp-content/uploads/2022/04/medoacus2.jpg"}/> */}
    </div>
  );
}

export default Home;
