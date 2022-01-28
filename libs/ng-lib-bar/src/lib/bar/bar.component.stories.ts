import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { BarComponent } from './bar.component';

export default {
  title: 'BarComponent',
  component: BarComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<BarComponent>;

const Template: Story<BarComponent> = (args: BarComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}