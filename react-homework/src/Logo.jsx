const logoImage = {
  src: '/src/assets/react.svg',
  alt: '리액트',
};

const figStyle = { margin: 0, display: 'flex', alignItems: 'center', gap: 12 };

function Logo() {
  let onlyRenderImage = true;

  // if (onlyRenderImage) {
  //   return <img src={logoImage.src} alt={logoImage.alt} />;
  // }
  return onlyRenderImage ? (
    <img src={logoImage.src} alt={logoImage.alt} />
  ) : (
    <figure style={figStyle}>
      <img src={logoImage.src} alt="" />
      <figcaption>{logoImage.alt}</figcaption>
    </figure>
  );
}

export default Logo;
