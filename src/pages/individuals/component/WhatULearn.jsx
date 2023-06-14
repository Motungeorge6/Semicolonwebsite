
import React, { useState} from "react";
import { useSwipeable } from 'react-swipeable';


const TrainingPrograms = ({slides}) => {


  const [currentIndex, setCurrentIndex] = useState(0);

    
  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe(1),
    onSwipedRight: () => handleSwipe(-1),
  });

  const handleSwipe = (delta) => {
    if (delta > 0) {
      setCurrentIndex((currentIndex + 1) % slides.length);
    } else {
      setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
    }
  };

  return (
    <div {...handlers}>
      <div>{slides[currentIndex]}</div>
    </div>
  );
};


export default TrainingPrograms;
