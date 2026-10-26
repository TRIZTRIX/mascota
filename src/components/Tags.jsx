import Badge from 'react-bootstrap/Badge';

const Tags = ({ texto, color }) => {
  return (
    <Badge bg={color} className="px-4 py-2 fs-6 rounded-pill shadow-sm">
      {texto}
    </Badge>
  );
};

export default Tags;
