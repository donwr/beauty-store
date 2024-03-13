import { Money } from '@/lib/shopify/types';
import clsx from 'clsx';
import Image from 'next/image';
import Label from '../label';
export function GridTileImage({
  isInteractive = true,
  active,
  label,
  ...props
}: {
  isInteractive?: boolean;
  active?: boolean;
  label?: {
    title: string;
    amount: string;
    currencyCode: string;
    compareAtAmount?: Money | string;
    position?: 'bottom' | 'center';
  };
} & React.ComponentProps<typeof Image>) {
  return (
    <div
      className={clsx(
        'group flex h-full w-full flex-col items-center justify-center overflow-hidden',

      )}
    >
      {props.src ? (
        // eslint-disable-next-line jsx-a11y/alt-text -- `alt` is inherited from `props`, which is being enforced with TypeScript
        <Image
          className={clsx('relative h-full w-full flex-grow object-cover', {
            'transition duration-300 ease-in-out group-hover:scale-105 overflow-hidden': isInteractive
          })}
          src={props.src}
          alt={props.alt}
          height={400}
          width={280}
        />
      ) : null}
      {label ? (
        <Label
          title={label.title}
          amount={label.amount}
          currencyCode={label.currencyCode}
          position={label.position}
          compareAtAmount={label.compareAtAmount}
        />
      ) : null}
    </div>
  );
}
