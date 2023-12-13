const ToggleButton = ({ setOpen }) => {
  return <button onClick={() => setOpen((e) => !e)}>Button</button>;
};
export default ToggleButton;
