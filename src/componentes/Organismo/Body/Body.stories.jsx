
import Body from './Body';

export default {
  title: 'Organismo/Body',
  component: Body,
};

const Template = (args) => <Body {...args} />;

export const DarkMode = Template.bind({});
DarkMode.args = {
  darkMode: true, // Modo oscuro
  children: [
    <div key="1">
      <h2>Columna 1</h2>
      <p>Contenido de la columna 1.</p>
    </div>,
    <div key="2">
      <h2>Columna 2</h2>
      <p>Contenido de la columna 2.</p>
    </div>
  ],
};

export const LightMode = Template.bind({});
LightMode.args = {
  darkMode: false, // Modo claro
  children: [
    <div key="1">
      <h2>Columna 1</h2>
      <p>Contenido de la columna 1.</p>
    </div>,
    <div key="2">
      <h2>Columna 2</h2>
      <p>Contenido de la columna 2.</p>
    </div>
  ],
};
