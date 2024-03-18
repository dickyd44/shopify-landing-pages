import { motion } from "framer-motion";

export default function CardProfileList({ profile }) {
  const cardProfile = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y: 20 * profile.id },
  };

  return (
    <motion.div
      variants={cardProfile}
      key={profile.id}
      className="flex items-center justify-between"
    >
      <div className="flex items-center gap-2 5">
        <div></div>
      </div>
    </motion.div>
  );
}
