import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardBody, CardFooter, Button } from '@material-tailwind/react';

const Projectcard = ({ title, badges, location }) => {
  const [cardBadges, setCardBadges] = useState(badges);
  const navigate = useNavigate();

  useEffect(() => {
    setCardBadges(badges);
  }, [badges]);

  return (
    <Card
      className="bg-sectionclr w-[18em] pt-10 text-txtclr rounded-lg 
                    sm:w-[22em] sm:h-[16em] cursor-pointer hover:scale-105 
                    active:scale-95 transition duration-300 ease-in-out"
      onClick={() => navigate(location)}>
      <p className="text-5xl text-center"> {title} </p>

      <CardBody className="items-center mt-4 sm:mt-auto">
        <CardFooter className="flex justify-center p-0 flex-wrap gap-1">
          {cardBadges.map((item) => (
            <Button
              variant="outlined"
              size="md"
              key={item}
              className="py-2 text-xs rounded-xl border-blue-100 text-blue-100">
              {item}
            </Button>
          ))}
        </CardFooter>
      </CardBody>
    </Card>
  );
};
export default Projectcard;
