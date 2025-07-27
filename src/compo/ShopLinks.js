import React from 'react';

function ShopLinks() {
  return (
    <div style={styles.container}>
      <h2>Buy Our Products</h2>
      <div>
        <a href="https://www.amazon.in" target="_blank" rel="noopener noreferrer">
          <img src="amazon-logo.png" alt="Amazon" style={styles.logo}/>
        </a>
        <a href="https://www.flipkart.com" target="_blank" rel="noopener noreferrer">
          <img src="flipkart-logo.png" alt="Flipkart" style={styles.logo}/>
        </a>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '30px',
  },
  logo: {
    width: '150px',
    margin: '10px',
  },
};

export default ShopLinks;
