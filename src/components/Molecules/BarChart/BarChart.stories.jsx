import BarChart from './BarChart';

export default {
  title: 'Molecules/BarChart',
  component: BarChart,
};

const Template = (args) => <BarChart {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: [
    { label: 'ENE', value: 50 },
    { label: 'FEB', value: 75 },
    { label: 'MAR', value: 30 },
    { label: 'ABR', value: 90 },
    { label: 'MAY', value: 100 },
  ],
};
