import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import home from "../../public/home.json";
import LottiePlayer from "react-lottie-player";
import ListingItem from "../components/ListingItem";

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);
  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch("/api/listing/get?offer=true&limit=4");
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=rent&limit=4");
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=sale&limit=4");
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        log(error);
      }
    };
    fetchOfferListings();
  }, []);
  return (
    <div>
      <div className="container mx-auto px-6 max-w-6xl lg:px-0 py-12 lg:py-24 flex flex-col lg:flex-row items-center justify-center lg:justify-between">
        <div className="lg:w-1/2 lg:pr-8">
          <div className="text-center lg:text-left lg:pr-12">
            <h1 className="text-purple-600 font-bold text-4xl lg:text-6xl leading-tight">
              Discover your dream <span className="text-indigo-500">home</span>{" "}
              effortlessly
            </h1>
            <p className="mt-6 text-gray-600 text-base lg:text-lg">
              Welcome to PropertyPulse! Finding your dream home has never been
              easier. We offer a diverse range of properties suited to your
              lifestyle and preferences.
            </p>
            <Link
              to={"/search"}
              className="inline-block mt-8 px-8 py-3 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition duration-300 ease-in-out"
            >
              Explore now
            </Link>
          </div>
        </div>

        <div className="lg:w-1/2 lg:pl-8">
          <div className="text-center lg:text-right">
            <LottiePlayer
              loop
              play
              animationData={home}
              style={{ width: "100%", maxWidth: "400px", padding: "1rem" }}
            />
          </div>
        </div>
      </div>

      {/* swiper */}
      <Swiper navigation>
        {offerListings &&
          offerListings.length > 0 &&
          offerListings.map((listing) => (
            <SwiperSlide>
              <div
                style={{
                  background: `url(${listing.imageUrls[0]}) center no-repeat`,
                  backgroundSize: "cover",
                }}
                className="h-[500px]"
                key={listing._id}
              ></div>
            </SwiperSlide>
          ))}
      </Swiper>

      {/* listing results for offer, sale and rent */}

     <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
  {offerListings && offerListings.length > 0 && (
    <div className="">
      <div className="my-5">
        <h2 className="text-3xl font-semibold text-gray-800">
          Recent Offers
        </h2>
        <Link
          className="text-lg text-blue-700 hover:underline"
          to={"/search?offer=true"}
        >
          Show More Offers
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {offerListings.map((listing) => (
          <ListingItem listing={listing} key={listing._id} />
        ))}
      </div>
    </div>
  )}
  {rentListings && rentListings.length > 0 && (
    <div className="">
      <div className="my-5">
        <h2 className="text-3xl font-semibold text-gray-800">
          Recent Places for Rent
        </h2>
        <Link
          className="text-lg text-blue-700 hover:underline"
          to={"/search?type=rent"}
        >
          Show More Places for Rent
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {rentListings.map((listing) => (
          <ListingItem listing={listing} key={listing._id} />
        ))}
      </div>
    </div>
  )}
  {saleListings && saleListings.length > 0 && (
    <div className="">
      <div className="my-5">
        <h2 className="text-3xl font-semibold text-gray-800">
          Recent Places for Sale
        </h2>
        <Link
          className="text-lg text-blue-700 hover:underline"
          to={"/search?type=sale"}
        >
          Show More Places for Sale
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {saleListings.map((listing) => (
          <ListingItem listing={listing} key={listing._id} />
        ))}
      </div>
    </div>
  )}
</div>

    </div>
  );
}
