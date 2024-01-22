const logoImage = {
  src: '/src/assets/react.svg',
  alt: '리액트',
};

const figStyle = { margin: 0, display: 'flex', alignItems: 'center', gap: 12 };

function Logo() {
  return (
    <figure style={figStyle}>
      <img src={logoImage.src} alt="" />
      <figcaption>{logoImage.alt}</figcaption>
    </figure>
  );
}

export default Logo;
