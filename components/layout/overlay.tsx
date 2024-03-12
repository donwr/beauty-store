
export const Overlay = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: 999 // Ensure this is below your dropdown zIndex but above everything else
      }}
    ></div>
  );
};
