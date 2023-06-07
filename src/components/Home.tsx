import { Link } from "react-router-dom";
import { motion, Transition, MotionProps } from "framer-motion";
import Beach1 from "../../public/Beach1.jpg";
import "../css/app.scss";

interface ImageDetails {
  width: number;
  height: number;
}

interface HomeProps {
  imageDetails: ImageDetails;
}

const transition: Transition = {
  duration: 0.6,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const Home: React.FC<HomeProps> = ({ imageDetails }) => (
  <>
    <main>
      <div className="container">
        <div className="row center">
          <div className="image-container">
            <div
              className="thumbnail"
              style={{
                width: imageDetails.width,
                height: imageDetails.height,
              }}
            >
              <div className="frame">
                <Link to="/akira-na">
                  <motion.img
                    src={Beach1}
                    alt="Beach"
                    whileHover={{ scale: 1.1 }}
                    transition={transition as MotionProps["transition"]}
                  />
                </Link>
              </div>
            </div>
            <motion.div
              exit={{ opacity: 0 }}
              transition={transition as MotionProps["transition"]}
              className="information"
            >
              <div className="title">Akira Na</div>
              <div className="location">
                <span>28.538336</span>
                <span>-81.379234</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  </>
);

export default Home;
