import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { FooComponent } from './foo.component';

export default {
  title: 'FooComponent',
  component: FooComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<FooComponent>;

const Template: Story<FooComponent> = (args: FooComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}