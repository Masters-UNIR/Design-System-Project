
import Button from '/src/components/Atoms/Button/Button';
import CardSection from '/src/components/Organisms/CardSection/CardSection';



const Home = () => {
  // Datos para CardSection
  const cardSectionItems = [
    {
      name: 'Workshop 1',
      description: 'Descripción del Workshop 1',
      stock: 10,
      price: 50,
      image: '/path-to-image/product1.jpg',
    },
    {
      name: 'Workshop 2',
      description: 'Descripción del Workshop 2',
      stock: 15,
      price: 70,
      image: '/path-to-image/product2.jpg',
    },
    // Agregar más workshops según sea necesario
  ];

  return (
    <>
      <h2>Columna 1</h2>
      <p>Contenido de la columna 1.</p>
      <Button type="primary">Botón 1</Button>
      <Button type="secondary">Botón 2</Button>
      <Button type="secondary">Botón 3</Button>
      <Button type="secondary">Botón 4</Button>

      <h2>Columna 2</h2>
      <p>Contenido de la columna 2.</p>
      <CardSection
        title="Proyectos Destacados"
        subtitle="Revisa los workshops de tus proyectos activos"
        items={cardSectionItems}
        highlighted={true}
      />
    </>
  );
};

export default Home;
