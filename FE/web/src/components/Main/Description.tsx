// https://www.framer.com/motion/scroll-animations/
import { motion } from "framer-motion"
import classes from "./Description.module.scss"

// type items = { title: string, description: string[] };
type items = { items: { title: string; description: string[]; }; }

function Description(props: items) {
  return (
    <div className={classes.components}>
      <motion.div animate={{ x: 100 }} />
      <div className={classes.component}>
        <p>{props.items.title}</p>
        <div>
          <p>{props.items.description[0]}</p>
          <p>{props.items.description[1]}</p>
        </div>
      </div>
    </div>
  );
)
}
  
export default Description