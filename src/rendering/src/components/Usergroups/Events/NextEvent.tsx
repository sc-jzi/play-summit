import { ComponentProps } from 'lib/component-props';
import React from 'react';

export type NextEventProps = ComponentProps & {
    fields: {
        Date: {
            value: string
        },
        Title: {
            value: string,
        }
    }
};

const NextEvent = (props: NextEventProps): JSX.Element => {
  const sxaStyles = `${props.params?.styles || ''}`;

  console.log(props);
    return (
        <div className={`next-event container ${sxaStyles}`}>
            <h1>In progress</h1>
        </div>
    );
};

export const Default = NextEvent;
