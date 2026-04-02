import { motion } from "framer-motion";


export function Reveal({
    children,
    direction = "up",
    delay = 0,
    duration = 0.85,
    className = "",
    distance,
}) {
    const offset = distance ?? 40;
    const axis = direction === "left" || direction === "right" ? "x" : "y";
    const sign = direction === "right" || direction === "down" ? -1 : 1;

    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, [axis]: sign * offset }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.05, margin: "0px 0px -50px 0px" }}
            transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
        >
            {children}
        </motion.div>
    );
}
