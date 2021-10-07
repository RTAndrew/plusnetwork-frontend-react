/** Load a component in full page
 * Ideal for when the App is booting up
 */
const Loading = () => {
  return (
    <h1
      style={{
        fontSize: '78px',
        color: 'black',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontWeight: 'bold',
      }}
    >
      Plus Network
    </h1>
  );
};

export default Loading;
