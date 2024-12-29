import  { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Container } from '../../../../shared/ui';

const Block6 = () => {
  useEffect(() => {
    const companyCoordinates = [42.8755552,74.6022346];

    const map = L.map('map').setView(companyCoordinates, 13);


    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);


    L.marker(companyCoordinates)
      .addTo(map)
      .bindPopup('<b>Наша компания</b><br>Чуй 120, Бишкек, Кыргызстан')
      .openPopup();
    

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div>
        <Container>
      <h1>Адрес нашей компании</h1>
      <p>Адрес: Чуй 120, Бишкек, Кыргызстан</p>
      <div id="map" style={{ width: '100%', height: '500px' }}></div>
      </Container>
    </div>
  );
};

export default Block6;
