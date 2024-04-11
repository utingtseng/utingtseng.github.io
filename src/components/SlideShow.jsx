import Carousel from 'react-bootstrap/Carousel';
import good_boy from "../assets/animal_friends/good_boy.png";
import happy_new_year from "../assets/animal_friends/hny.png";
import walkie from "../assets/animal_friends/walkie.png";

const animalFriends = [
  {
    id: 1,
    name: "Good boy, Doubi",
    file: good_boy
  }, {
    id: 2,
    name: "Sunny day",
    file: walkie
  }, {
    id: 3,
    name: "Happy New Year",
    file: happy_new_year
  }
]

function SlideShow() {
  return (
    <Carousel >
      {animalFriends.map((item) => {
        return (
          <Carousel.Item interval={3000} key={item.name}>
            <img
              className="d-block w-50 mx-auto"
              src={item.file}
              alt={item.name}
            />
            <Carousel.Caption>
              <h3>{item.name}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default SlideShow;