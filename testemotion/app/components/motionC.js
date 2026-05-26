export default function EnterAnimation() {
    return <div style={ball} />
}

/**
 * ==============   Styles   ================
 */

const ball = {
    width: 100,
    height: 100,
    backgroundColor: "#red",
    borderRadius: "50%",
}
export default function EnterAnimation() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            style={ball}
        />
    )
}