import { Button } from '@mui/material';
import Projectslist from '../components/Projectslist';
import { BsLinkedin } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';

const Homepage = () => {
    return (
        <div className="h-screen bg-bgclr text-txtclr">
            <div className="h-40 bg-deep-purple-500 relative flex flex-col items-center justify-center">
                <h1 className="text-5xl font-black">PORTFOLIO</h1>
                <a href="www.hemnath-portfolio.netlify.app" target="_blank">
                    <Button
                        sx={{
                            mt: 3,
                            color: 'black',
                            backgroundColor: '#ba9802',
                            fontWeight: '700',
                            padding: '0.5em 5em',
                            '&:hover': {
                                backgroundColor: '#ba9802',
                            },
                        }}>
                        Visit Main Portfolio
                    </Button>
                </a>
                <div className="absolute right-6 items-center h-full flex flex-col justify-around">
                    <div className="text-4xl hover:text-bgclr cursor-pointer transition-color duration-300 ">
                        <a
                            href="https://www.linkedin.com/in/hemnath-balasubramanian-0a23a5185/"
                            target="_blank">
                            <BsLinkedin />
                        </a>
                    </div>
                    {/* <div className="text-4xl hover:text-bgclr cursor-pointer transition-color duration-300 ">
                        <GrMail />
                    </div> */}
                </div>
            </div>
            <Projectslist />
        </div>
    );
};

export default Homepage;
