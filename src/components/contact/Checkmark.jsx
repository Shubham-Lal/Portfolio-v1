import { motion, useTransform } from "framer-motion"

const Checkmark = ({ progress, size, stroke }) => {
    const circleLength = useTransform(progress, [0, 100], [0, 1])
    const checkmarkPathLength = useTransform(progress, [0, 95, 100], [0, 0, 1])
    const circleColor = useTransform(
        progress,
        [0, 95, 100],
        ["#fff", "#fff", "#fff"]
    )

    return (
        <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 258 258"
        >
            <motion.path
                transform="translate(60 85)"
                d="M3 50L45 92L134 3"
                fill="transparent"
                stroke="#fff"
                strokeWidth={stroke}
                style={{ pathLength: checkmarkPathLength }}
            />
            <motion.path
                d="M 130 6 C 198.483 6 254 61.517 254 130 C 254 198.483 198.483 254 130 254 C 61.517 254 6 198.483 6 130 C 6 61.517 61.517 6 130 6 Z"
                fill="transparent"
                strokeWidth={stroke}
                stroke={circleColor}
                style={{
                    pathLength: circleLength
                }}
            />
        </motion.svg>
    )
}

export default Checkmark