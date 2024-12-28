import  { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Container } from '../../../../shared/ui';

const Block6 = () => {
  useEffect(() => {
    // Координаты вашей компании
    const companyCoordinates = [42.9103385, 74.638433];

    // Инициализация карты
    const map = L.map('map').setView(companyCoordinates, 13);

    // Добавление карты OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Добавление маркера и всплывающего окна
    L.marker(companyCoordinates)
      .addTo(map)
      .bindPopup('<b>Наша компания</b><br>Чуй 120, Бишкек, Кыргызстан')
      .openPopup();
    
    // Очистка карты при размонтировании компонента
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
