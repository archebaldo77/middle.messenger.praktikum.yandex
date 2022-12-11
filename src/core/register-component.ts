import Handlebars, { HelperOptions } from 'handlebars';

import Component from './component';

interface ComponentConstructable<
  Props extends Indexed<any> = any,
  IncomingProps = any
> {
  new (props: IncomingProps): Component<Props>;
  componentName?: string;
}

export type AnyProps = Record<string, unknown>;

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
export default function registerComponent<
  Props extends Record<string, unknown> = AnyProps,
  IncomingProps = AnyProps
>(Component: ComponentConstructable<Props, IncomingProps>) {
  Handlebars.registerHelper(
    Component.componentName || Component.name,
    function (
      this: Props,
      { hash: { ref, ...hash }, data, fn }: HelperOptions
    ) {
      if (!data.root.children) {
        data.root.children = {};
      }

      if (!data.root.refs) {
        data.root.refs = {};
      }

      const { children, refs } = data.root;

      (Object.keys(hash) as any).forEach((key: keyof Props) => {
        if (this[key] && typeof this[key] === 'string') {
          hash[key] = hash[key].replace(
            new RegExp(`{{${key as string}}}`, 'i'),
            this[key]
          );
        }
      });

      const component = new Component(hash);

      children[component.id] = component;

      if (ref) {
        refs[ref] = component;
      }

      const contents = fn ? fn(this) : '';

      return `<div data-id="${component.id}">${contents}</div>`;
    }
  );
}
