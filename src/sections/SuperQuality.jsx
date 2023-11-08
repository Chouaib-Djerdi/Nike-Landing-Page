import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You <span className="text-coral-red">Super</span>
          <br />
          <span className="text-coral-red">Quality </span>
          Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum odit
          accusantium omnis modi ratione nemo quod voluptatum cumque mollitia
          consequuntur, molestiae provident quas laborum consectetur sint
          repellendus delectus earum! Autem!
        </p>
        <p className="mt-4 lg:max-w-lg info-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit ratione ipsum
          fuga nobis aliquid hic quia harum tenetur ex provident.
        </p>
        <div className="mt-11">
          <Button label="View Details" iconURL={arrowRight} />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} alt="shoe8" width={570} height={522} />
      </div>
    </section>
  );
};

export default SuperQuality;
