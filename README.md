# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

TFE - Diseño y desarrollo de sistema de diseño (UI Kit básico) modular bottom-up, configurable y escalable para el dashboard de una consultora de diseño estratégico. 

https://github.com/Masters-UNIR/Design-System-Project


  . React (Vite+JavaScript)
  . Storybook

Cada componente disponede tres archivos: 
    jsx para definir la estructura y lógica de los componentes, 
    archivo css: define la apariencia visual del componente
    archivo stories.jsx visualización aislada en storyvook

Estructura - sistema de diseño atómico (Atomic Design Methodology) organizado en 5 niveles

1. Átomos
    o Son los componentes más básicos e indivisibles de la interfaz
    o Componentes creados:
        § Button, ButtonIcon, Icon, Image, Input, Separator, Text, Title.
2. Moléculas
    o Son combinaciones simples de átomos que forman componentes funcionales.
    o Componentes creados:
        § BarChart, Card, Dropdown, IconSpec, LoginForm, SearchBar.
3. Organismos
    o Son componentes más complejos compuestos por moléculas y átomos.
    o Componentes creados:
        § Body, CardSection, FootBar, HeaderBar, NavBar, TitleHeader.
4. Plantillas
    o Estructuras de diseño que organizan organismos y moléculas en un diseño de
      página.
    o Componentes creados:
        § Layout
5. Páginas
    o Son instancias específicas de plantillas con contenido real.
    o Componentes creados:
        § Home
