import Card from 'react-bootstrap/Card';
import Tags from './Tags';

const MyCard = ({ imagen, nombre, descripcion, textoTag, colorTag }) => {
  return (
    <Card className="h-100 shadow-lg border-0 rounded-4 overflow-hidden">
      <Card.Img 
        variant="top" 
        src={imagen} 
        alt={nombre} 
        style={{ height: '250px', objectFit: 'cover' }} 
      />
      <Card.Body className="d-flex flex-column text-center bg-light p-4">
        <Card.Title className="fw-bolder fs-3 text-dark mb-3">{nombre}</Card.Title>
        <Card.Text className="flex-grow-1 text-secondary fst-italic">
          "{descripcion}"
        </Card.Text>
        <div className="mt-3">
          <Tags texto={textoTag} color={colorTag} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default MyCard;
